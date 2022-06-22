<script lang="ts" setup>
const reviewFilter = useReviewScoreFilter();

function clearFilter() {
  for (const filter in reviewFilter.value) {
    reviewFilter.value[filter] = false;
  }
}
</script>

<template>
  <div>
    <div class="flex items-top justify-between mb-5">
      <h4 class="">{{ $t('filter.reviews.title') }}</h4>

      <FilterClearButton @btn-clicked="clearFilter" />
    </div>

    <template v-for="(score, k) in reviewFilter" :key="k">
      <div class="pt-1 pb-1">
        <input
          v-model="reviewFilter[k]"
          :id="k"
          type="checkbox"
          class="mr-2.5"
        />

        <label :for="k" class="select-none">
          {{ $t(`filter.reviews.scores.${k}`) }}
        </label>
      </div>
    </template>
  </div>
</template>
