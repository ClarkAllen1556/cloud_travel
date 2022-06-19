<script lang="ts" setup>
const props = defineProps(['location']);
</script>

<template>
  <div>
    <div class="flex">
      <div>
        <div class="flex gap-1.5 items-center mb-1.5">
          <h3>{{ location.property.name }}</h3>
          <StarRating :rating="location.property.starRating" />
        </div>

        <p>
          {{ location.property.location.address }}
        </p>
      </div>

      <img
        src="~/assets/img/score-widget-transparent.png"
        class="ml-auto"
        :alt="$t('alt.score')"
      />
    </div>

    <p>
      {{ location.property.reviews.summary.text }}
    </p>
  </div>
</template>

<style scoped></style>
