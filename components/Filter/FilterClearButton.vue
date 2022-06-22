<script lang="ts" setup>
const emit = defineEmits<{
  (event: 'btn-clicked'): void;
}>();
</script>

<template>
  <button @click="emit('btn-clicked')" class="m-0 p-0 text-blue-1">
    {{ $t('action.filter.clear') }}
  </button>
</template>
