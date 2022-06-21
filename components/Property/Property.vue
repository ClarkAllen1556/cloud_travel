<script lang="ts" setup>
type Package = {
  adjustedDisplayRate: {
    value: number;
  };
  foodCode: number;
  nonRefundable: boolean;
  payLater: boolean;
  payAtHotel: boolean;
};

type Reviews = {
  summary: {
    text: string;
  };
};

const { location } = defineProps(['location']);

const reviews = computed((): Reviews => {
  return location.property.reviews;
});

const cheapestPackage = computed((): Package => {
  return location.packages.reduce((cur, prev) => {
    if (cur.adjustedDisplayRate.value < prev.adjustedDisplayRate.value) {
      return cur;
    }

    return prev;
  });
});

const displayFoodPackage = computed((): boolean => {
  // TODO this should use composable food type
  switch (cheapestPackage.value.foodCode) {
    case 1:
    case 7:
      return false;
    default:
      return true;
  }
});
</script>

<template>
  <div>
    <div class="flex">
      <Gallery
        :hero="location.property.heroImage"
        :gallery="location.property.gallery"
      />

      <div>
        <div class="flex gap-1.5 items-center mb-1.5">
          <h3>{{ location.property.name }}</h3>

          <PropertyRating :rating="location.property.starRating" />
        </div>

        <div class="flex gap-1">
          <p>
            {{ location.property.location.address }}
          </p>

          <span>
            <NuxtLink :to="`/map/${location.property.propertyCode}`">
              ({{ $t('actions.map.view') }})
            </NuxtLink>
          </span>
        </div>
      </div>

      <img
        src="~/assets/img/score-widget-transparent.png"
        class="ml-auto"
        :alt="$t('alt.score')"
      />
    </div>

    <div v-if="location.property.reviews">
      <p>
        {{ reviews.summary.text }}
      </p>
    </div>

    <div>
      <!--   TODO this should be done in loop   -->
      <!--   and also be limited to three labels before hiding rest   -->
      <PropertyLabel
        v-if="displayFoodPackage"
        :foodCode="cheapestPackage.foodCode"
      />

      <PropertyLabel
        v-if="cheapestPackage.nonRefundable"
        :refundable="cheapestPackage.nonRefundable"
      />

      <PropertyLabel
        v-if="cheapestPackage.payLater"
        :payLater="cheapestPackage.payLater"
      />

      <PropertyLabel
        v-if="cheapestPackage.payAtHotel"
        :payAtHotel="cheapestPackage.payAtHotel"
      />
    </div>

    <div>
      <PropertyPrice :propertyPackage="cheapestPackage" />
    </div>
  </div>
</template>

<style scoped></style>
