<script lang="ts" setup>
const { propertyAddress, propertyCode } = defineProps<{
  propertyAddress: string;
  propertyCode: string;
}>();
</script>

<template>
  <div class="flex gap-1">
    <p>
      {{ propertyAddress }}
    </p>

    <span>
      <NuxtLink :to="`/map/${propertyCode}`">
        ({{ $t('actions.map.view') }})
      </NuxtLink>
    </span>
  </div>
</template>
