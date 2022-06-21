<script lang="ts" setup></script>

<template>
  <div>
    <slot />

    <Card>
      <FilterPricePerNight />
    </Card>

    <Card>
      <FilterReview />
    </Card>

    <Card>
      <FilterStar />
    </Card>
  </div>
</template>

<style scoped></style>
