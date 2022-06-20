<script lang="ts" setup></script>

<template>
  <div class="h-full">
    <Header />

    <div class="w-full top-0 z-50 sticky">
      <SearchBar />
    </div>

    <div class="relative ml-28 mr-28 flex flex-row gap-2">
      <aside class="w-72 shrink-0 relative">
        <FilterPane class="sticky mt-4 top-20">
          <MapCard />
        </FilterPane>
      </aside>

      <main class="w-screen">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>
