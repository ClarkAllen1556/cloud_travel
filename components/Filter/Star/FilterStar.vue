<script lang="ts" setup>
const starFilter = useStarRating();

function clearFilter() {
  for (const filter in starFilter.value) {
    starFilter.value[filter] = false;
  }
}
</script>

<template>
  <div>
    <div class="flex items-top justify-between mb-5">
      <h4>{{ $t('filter.stars.title') }}</h4>

      <FilterClearButton @btn-clicked="clearFilter" />
    </div>

    <template v-for="(score, k, i) in starFilter" :key="k">
      <div class="flex pt-1 pb-1">
        <input v-model="starFilter[k]" :id="k" type="checkbox" class="mr-2.5" />

        <label :for="k" class="select-none">
          <PropertyRating v-if="5 - i" :rating="5 - i" />
          <p v-else>{{ $t('filter.stars.scores.none') }}</p>
        </label>
      </div>
    </template>
  </div>
</template>
