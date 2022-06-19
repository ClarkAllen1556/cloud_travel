<script lang="ts" setup>
const isLoading = useState<boolean>('isLoading', () => false);
const currentCity = useState('currentCity', () => {});
const searchResults = useState('searchResults', () => {});
</script>

<template>
  <div id="content" class="flex flex-row gap-4">
    <aside class="w-72 shrink-0">
      <MapCard />

      <Card>
        <p>filters</p>
        <Button label="Click me!" />
      </Card>
    </aside>
    <main class="w-screen">
      <SortPane />

      <Card
          v-for='(location, i) in searchResults?.outlets.availability.results'
          :key='i'
          class='hover:shadow hover:cursor-pointer'
      >
        <div>
          <Property :location='location' />
        </div>
      </Card>
    </main>
  </div>
</template>

<style scoped></style>
