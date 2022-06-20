<script lang="ts" setup>
// todo abstract this into a composable
enum FoodCode {
  roomOnly,
  breakfast,
  lunch,
  dinner,
  half,
  full,
  all
}

const { foodCode }= defineProps<{
  foodCode?: number
}>()

</script>

<template>
  <div class='border border-blue-2 text-blue-2 w-min pl-1.5 pr-1.5 whitespace-nowrap'>
    <div v-if='foodCode'>
      {{ $t(`food.package.${FoodCode[foodCode]}`) }}
    </div>
  </div>
</template>

<style scoped></style>
