<script lang="ts" setup>
const { propertyName, propertyStarRating } = defineProps<{
  propertyName: string;
  propertyStarRating: number;
}>();
</script>

<template>
  <div class="flex gap-1.5 items-center">
    <h3>{{ propertyName }}</h3>

    <PropertyRating :rating="propertyStarRating" />
  </div>
</template>
