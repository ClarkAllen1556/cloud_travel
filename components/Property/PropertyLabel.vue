<script lang="ts" setup>
// todo abstract this into a composable
enum FoodCode {
  roomOnly,
  breakfast,
  lunch,
  dinner,
  half,
  full,
  all,
}

const { foodCode, refundable, payLater, payAtHotel } = defineProps<{
  foodCode?: number;
  refundable?: boolean;
  payLater?: boolean;
  payAtHotel?: boolean;
}>();
</script>

<template>
  <div
    class="border border-blue-2 text-blue-2 w-min pl-1.5 pr-1.5 whitespace-nowrap"
  >
    <div v-if="foodCode">
      {{ $t(`package.food.${FoodCode[foodCode]}`) }}
    </div>
    <div v-else-if="refundable">
      {{ $t(`package.refundable`) }}
    </div>
    <div v-else-if="payLater">
      {{ $t(`package.pay_later`) }}
    </div>
    <div v-else-if="payAtHotel">
      {{ $t(`package.pay_at_hotel`) }}
    </div>
  </div>
</template>

<style scoped></style>
