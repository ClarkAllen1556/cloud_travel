<script lang='ts' setup>
const query = ref<string>('');

const { data: cities } = await useFetch('https://hiring.zumata.xyz/job01/autosuggest');
</script>

<template>
  <div class='flex bg-blue-1 p-3 pl-32 pr-32'>
    <div class='w-96'>
      <div class='flex border border-grey-3 rounded bg-white-1'>
        <img src='~/assets/img/search.svg' class='w-4 h-4 m-3' alt="search-icon"/>

        <input class='w-full outline-none' v-model='query' />
      </div>

      <SearchSuggestionBox :query='query'>
        <SearchSuggestion :cityName='"Tokyo, Japan"' />
        <SearchSuggestion :cityName='"Osaka, Japan"' />
      </SearchSuggestionBox>
    </div>

    <div class='ml-auto'>
      <Button :label="$t('action.search')" />
    </div>
  </div>
</template>
