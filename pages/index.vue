<script lang="ts" setup>
const isLoading = useState<boolean>('isLoading', () => false);
const currentCity = useState<string>('currentCity', () => '');
const searchResults = useState<any>('searchResults', () => {});
</script>

<template>
  <div id="content">
    <SortPane />

    <Card
      v-for="(location, i) in searchResults?.outlets.availability.results"
      :key="i"
      class="hover:shadow"
    >
      <div>
        <Property :location="location" />
      </div>
    </Card>
  </div>
</template>

<style scoped></style>
