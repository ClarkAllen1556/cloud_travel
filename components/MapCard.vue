<script lang="ts" setup>
const isLoading = useState('isLoading');
const searchResults = useState('searchResults')

const map = reactive({
  url: '/assets/img/map-bg.jpg',
});

const classes = computed(() => {
  return [isLoading && !searchResults.value ? 'bg-none' : `bg-[url('${map.url}')]`];
});
</script>

<template>
  <Card :class="['bg-cover', ...classes]">
    <div class="flex items-center justify-center">
      <Button
        :label="$t('action.map.view')"
        class="bg-blue-1"
        :isDisabled="true"
      />
    </div>
  </Card>
</template>

<style scoped>
</style>
