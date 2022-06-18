<script lang='ts' setup></script>

<template>
  <div class="h-screen">
    <Header />
    <div class="w-full top-0 z-50 sticky">
      <SearchBar />
    </div>

    <div class="relative ml-28 mr-28">
      <NuxtPage />
    </div>
  </div>
</template>
