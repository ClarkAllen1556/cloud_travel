<script lang="ts" setup>
type Package = {
  adjustedDisplayRate: {
    value: number;
  };

  foodCode: number;
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
      <PropertyLabel
        v-if="displayFoodPackage"
        :foodCode="cheapestPackage.foodCode"
      />
    </div>

    <div>
      {{ cheapestPackage.adjustedDisplayRate.value }}
    </div>
  </div>
</template>

<style scoped></style>
