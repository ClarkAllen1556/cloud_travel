<script lang="ts" setup>
const hotelNameFilter = useHotelNameFilter();

function clearFilter() {
  hotelNameFilter.value.name = '';
}
</script>

<template>
  <div>
    <div class="flex items-top justify-between mb-5">
      <h4>{{ $t('filter.name.title') }}</h4>

      <FilterClearButton @btn-clicked="clearFilter" />
    </div>

    <div class="flex border border-grey-3 rounded bg-white-1 pl-2 pr-2">
      <input class="w-full outline-none" v-model="hotelNameFilter.name" />

      <img
        src="~/assets/img/search.svg"
        class="w-4 h-4 m-3"
        :alt="$t('alt.search_icon')"
      />
    </div>
  </div>
</template>
