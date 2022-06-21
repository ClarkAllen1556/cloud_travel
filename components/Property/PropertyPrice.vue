<script lang="ts" setup>
const { propertyPackage } = defineProps(['propertyPackage']);

const hasDiscount = computed((): boolean => {
  return (
    propertyPackage.displayRate.value >
    propertyPackage.adjustedDisplayRate.value
  );
});

const displayPrice = computed(() => {
  return hasDiscount.value
    ? propertyPackage.adjustedDisplayRate
    : propertyPackage.displayRate;
});

const discountAmount = computed((): number => {
  if (!hasDiscount) {
    return 0;
  }

  const discountAmount =
    propertyPackage.displayRate.value -
    propertyPackage.adjustedDisplayRate.value;
  const discountPercentage = discountAmount / propertyPackage.displayRate.value;

  return Math.floor(discountPercentage * 100);
});
</script>

<template>
  <div>
    <div class="float-right">
      <div
        v-if="hasDiscount"
        class="bg-blue-2 pl-1.5 pr-1.5 w-min whitespace-nowrap text-white-1 ml-auto"
      >
        {{ $t('package.price.save_discount', { p: discountAmount }) }}
      </div>

      <div class="_secondary-text">{{ $t('package.price.nightly') }}</div>

      <div class="flex items-end gap-1">
        <div class="_secondary-text line-through" v-if="hasDiscount">
          {{ propertyPackage.displayRate.value }}
        </div>

        <h2 class="">{{ displayPrice.currency }} {{ displayPrice.value }}</h2>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
