<script lang="ts" setup>
const isLoading = useLoadingState();
const searchResults = useSearchState();

const hasError = computed(() => {
  if (searchResults.value.error) {
    return true;
  }

  return false;
});

const results = computed((): [] | undefined => {
  return searchResults.value.result?.outlets.availability.results;
});
</script>

<template>
  <div id="content" class="h-full">
    <SortPane />

    <Message v-if="isLoading">
      <Loading />
    </Message>
    <template v-else>
      <template v-if="hasError">
        <Message>
          <MessageError>
            <template #error>
              <p>{{ searchResults.error }}</p>
            </template>
          </MessageError>
        </Message>
      </template>
      <template v-else-if="results && results.length === 0">
        <Message>
          <MessageNoResults />
        </Message>
      </template>
      <template v-else>
        <Card v-for="(location, i) in results" :key="i" class="hover:shadow">
          <div>
            <Property :location="location" />
          </div>
        </Card> </template
    ></template>
  </div>
</template>

<style scoped></style>
