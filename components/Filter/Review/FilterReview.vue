<script lang="ts" setup>
const reviewFilter = useReviewScoreFilter();

const filterKeys = computed(() => {
  console.log(reviewFilter.value);
  return reviewFilter;
});
</script>

<template>
  <div>
    <h4>{{ $t('filter.reviews.title') }}</h4>

    <template v-for="(score, k) in reviewFilter" :key="k">
      <div>
        <input v-model="reviewFilter[k]" type="checkbox" />
        {{ $t(`filter.reviews.scores.${k}`) }}
      </div>
    </template>
  </div>
</template>
