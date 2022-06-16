<script setup>
defineProps({
  label: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <button class="p-3 bg-blue-2 text-white-1 rounded">{{ label }}</button>
</template>
