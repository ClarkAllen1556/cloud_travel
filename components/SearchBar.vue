<script lang='ts' setup>
const { $fetchResource, $Resources } = useNuxtApp()

const currentCity = useState('currentCity');
const searchResults = useState('searchResults')
const { data: cities } = $fetchResource($Resources.AutoSuggest)

const query = ref<string>('');
const showSuggestions = ref<boolean>(false);

watch(currentCity, async (nCityCode: string) => {
  const { data: results } = await $fetchResource($Resources.Search, nCityCode)
  searchResults.value = results
})

function setShowSuggestions (isShow: boolean) {
  showSuggestions.value = isShow
}

function setCurrentCity(cityCode: string) {
  currentCity.value = cityCode
}

function handleCitySelection (cityCode) {
  setCurrentCity(cityCode)
  setShowSuggestions(false)
}
</script>

<template>
  <div class='flex bg-blue-1 p-3 pl-32 pr-32'>
    <div class='w-96'>
      <div class='flex border border-grey-3 rounded bg-white-1'>
        <img src='~/assets/img/search.svg' class='w-4 h-4 m-3' :alt='$t("alt.search_icon")' />

        <input class='w-full outline-none' v-model='query' @focus='setShowSuggestions(true)'/>
      </div>

      <SearchSuggestionBox v-if='showSuggestions && query && query.trim().length'>
        <SearchSuggestion
          v-for='(city, i) in cities'
          :city='city'
          :key='i'
          @item-clicked='handleCitySelection'
        />
      </SearchSuggestionBox>
    </div>

    <div class='ml-auto'>
      <Button :label="$t('action.search')" />
    </div>
  </div>
</template>
