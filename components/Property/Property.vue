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
  <div class="flex justify-between">
    <div class="flex">
      <Gallery
        :hero="location.property.heroImage"
        :gallery="location.property.gallery"
      />

      <div class="flex flex-col gap-1 ml-4">
        <PropertyName
          :propertyName="location.property.name"
          :propertyStarRating="location.property.starRating"
        />

        <PropertyAddress
          :propertyAddress="location.property.location.address"
          :propertyCode="location.property.propertyCode"
        />

        <div v-if="location.property.reviews">
          <p
            class="_secondary-text max-w-lg whitespace-nowrap overflow-hidden text-ellipsis"
          >
            "{{ reviews.summary.text }}"
          </p>
        </div>

        <div class="flex gap-1">
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
      </div>
    </div>

    <div class="flex flex-col justify-between text-right">
      <img
        src="~/assets/img/score-widget-transparent.png"
        class="ml-auto"
        :alt="$t('alt.score')"
      />

      <PropertyPrice :propertyPackage="cheapestPackage" class="" />
    </div>
  </div>
</template>

<style scoped></style>
