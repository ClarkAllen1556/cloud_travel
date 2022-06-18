<script lang='ts' setup>
const query = ref<string>('');
const showSuggestions = ref<boolean>(false);
const { data: cities } = useFetch('https://hiring.zumata.xyz/job01/autosuggest');

function toggleShowSuggestion(): void {
  showSuggestions.value ? showSuggestions.value = false : showSuggestions.value = true;
}
</script>

<template>
  <div class='flex bg-blue-1 p-3 pl-32 pr-32'>
    <div class='w-96'>
      <div class='flex border border-grey-3 rounded bg-white-1'>
        <img src='~/assets/img/search.svg' class='w-4 h-4 m-3' :alt='$t("alt.search_icon")' />

        <input class='w-full outline-none' v-model='query' @focus='toggleShowSuggestion' @blur='toggleShowSuggestion' />
      </div>

      <SearchSuggestionBox v-if='showSuggestions'>
        <SearchSuggestion v-for='(city, i) in cities' :city='city' :key='i' />
      </SearchSuggestionBox>
    </div>

    <div class='ml-auto'>
      <Button :label="$t('action.search')" />
    </div>
  </div>
</template>
