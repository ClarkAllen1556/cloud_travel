<script lang="ts" setup>
const { isDisabled, label } = defineProps<{
  isDisabled?: boolean;
  label?: string;
}>();
</script>

<template>
  <button
    @click="$emit('btn-click')"
    class="p-3 bg-blue-2 text-white-1 rounded"
    :disabled="isDisabled"
  >
    <h4>
      {{ label }}
    </h4>
  </button>
</template>
