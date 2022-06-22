<script lang="ts" setup>
const { city } = defineProps<{
  city: {
    label: string;
    cityCode: string;
  };
}>();

const emit = defineEmits<{
  (event: 'item-clicked', cityCode: string): void;
}>();
</script>

<template>
  <div
    @click="emit('item-clicked', city.cityCode)"
    class="flex gap-2 p-2.5 items-center city-entry hover:bg-grey-1 hover:cursor-pointer"
  >
    <img src="~/assets/img/location-pin.svg" :alt="$t('alt.location_pin')" />

    <p>{{ city.label }}</p>
  </div>
</template>

<style scoped></style>
