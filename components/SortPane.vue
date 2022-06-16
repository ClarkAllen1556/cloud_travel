<script lang="ts" setup>
const isLoading = useState('isLoading');
const selected = ref<string | null>();
const sortingOptions = ref<string[]>([
  'action.sort.pop',
  'action.sort.price',
  'action.sort.review',
  'action.sort.discount',
]);

function setSelected(selectedItem: string) {
  if (isLoading.value) {
    return;
  }

  selected.value = selectedItem;
}
</script>

<template>
  <ul class="flex justify-between items-center mt-4">
    <li
      v-for="(op, i) in sortingOptions"
      :class="[op === selected && 'selected']"
      @click="() => setSelected(op)"
    >
      <h4 :key="i">{{ $t(op) }}</h4>
    </li>
  </ul>
</template>

<style scoped>
ul {
  @apply bg-white-1 border border-grey-3 rounded-l-md rounded-r-md;
}

ul > li {
  @apply grow text-center pt-4 pb-4 hover:cursor-pointer;
}

ul > li:not(:last-of-type) {
  @apply border-r border-grey-3;
}

ul > li > h4 {
  @apply inline-block;
}

.selected {
  @apply bg-blue-1 text-white-1;
}

.selected:last-of-type {
  @apply rounded-r-md;
}

.selected:first-of-type {
  @apply rounded-l-md;
}
</style>
