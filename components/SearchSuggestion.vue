<script lang='ts' setup>
defineProps<{
  cityName: string
}>();
</script>

<template>
  <div class='flex gap-2 p-2.5 items-center city-entry hover:bg-grey-1 hover:cursor-pointer'>
    <img src='~/assets/img/location-pin.svg' />

    <p>
      {{ cityName }}
    </p>
  </div>
</template>

<style scoped>
</style>