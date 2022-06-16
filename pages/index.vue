<script lang="ts" setup>
const isLoading = useState<boolean>('isLoading', () => {
  return true;
});

// const toggleLoading = () => {
//   isLoading.value ? (isLoading.value = false) : (isLoading.value = true);
// };
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
      <Card>
        <p>main results</p>
        <Button label="Click me!" />
      </Card>
      <!-- <Card>
        <Button @btn-click="toggleLoading" label="Toggle Loading" />
      </Card> -->
    </main>
  </div>
</template>

<style scoped></style>
