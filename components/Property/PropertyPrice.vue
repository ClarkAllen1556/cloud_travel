<script lang="ts" setup>
const { propertyPackage } = defineProps(['propertyPackage']);

const hasDiscount = computed((): boolean => {
  return (
    propertyPackage.displayRate.value >
    propertyPackage.adjustedDisplayRate.value
  );
});

const displayPrice = computed((): number => {
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
    <div
      v-if="hasDiscount"
      class="bg-blue-2 pl-1.5 pr-1.5 w-min whitespace-nowrap text-white-1"
    >
      {{ $t('package.price.save_discount', { p: discountAmount }) }}
    </div>

    <div>
      <p>{{ $t('package.price.nightly') }}</p>

      <div>
        <div v-if="hasDiscount" class="line-through">
          {{ propertyPackage.displayRate.value }}
        </div>
        <h2>
          {{ displayPrice.value }}
        </h2>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
