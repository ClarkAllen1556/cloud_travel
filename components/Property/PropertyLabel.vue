<script lang="ts" setup>

defineProps<{
  foodCode: FoodCode
}>()

</script>

<script lang='ts'>
type FoodCode = {
  RoomOnly: {
    code: 1,
    label: 'ROOM_ONLY'
  },
  Breakfast: {
    code: 2,
    label: 'BREAK_FAST'
  },
  Lunch: {
    code: 3,
    label: 'LUNCH'
  },
  Dinner: {
    code: 4
    label: 'DINNER'
  },
  Half: {
    code: 5
    label: 'HALF'
  },
  Full: {
    code: 6
    label: 'FULL'
  },
  All: {
    code: 7
    label: 'ALL'
  }
}
</script>

<template>
  <div>
  </div>
</template>

<style scoped></style>
