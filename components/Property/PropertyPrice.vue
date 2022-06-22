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

  return discountPercentage;
});

const currencyLocale = computed(() => {
  switch (propertyPackage.displayRate.currency) {
    case 'JPY':
      return 'ja-JP';
    case 'USD':
      return 'en-US';
  }
});
</script>

<template>
  <div>
    <div class="float-right">
      <div
        v-if="hasDiscount"
        class="bg-blue-2 pl-1.5 pr-1.5 w-min whitespace-nowrap text-white-1 ml-auto"
      >
        {{
          $t('package.price.save_discount', {
            p: $n(discountAmount, 'percent'),
          })
        }}
      </div>

      <div class="_secondary-text">{{ $t('package.price.nightly') }}</div>

      <div class="flex items-end gap-1">
        <div class="_secondary-text line-through" v-if="hasDiscount">
          {{
            $n(propertyPackage.displayRate.value, 'currency', currencyLocale)
          }}
        </div>

        <h2 class="">
          {{ $n(displayPrice.value, 'currency', currencyLocale) }}
        </h2>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
