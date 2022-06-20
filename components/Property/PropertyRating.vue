<script lang="ts" setup>
const { rating } = defineProps<{ rating: number}>();

const ratingFloor = computed(() => {
  return Math.floor(rating);
});
</script>

<template>
  <div class="flex items-center" :title="`${rating} ${$t('rating.out_of')}`">
    <img
      v-for="i in ratingFloor"
      :key="i"
      src="~/assets/img/star.svg"
      :alt="$t('alt.star')"
    />
  </div>
</template>

<style scoped></style>
