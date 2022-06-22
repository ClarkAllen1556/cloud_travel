<script lang="ts" setup></script>

<template>
  <div>
    <slot />

    <Card>
      <FilterReview />
    </Card>

    <Card>
      <FilterStar />
    </Card>

    <Card>
      <FilterName />
    </Card>
  </div>
</template>

<style scoped></style>
