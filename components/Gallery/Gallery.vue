<script lang="ts" setup>
// TODO make this into composable
type PropertyImage = {
  caption?: string;
  url: string;
};

type ImageCollection = {
  xs?: PropertyImage;
  s?: PropertyImage;
  m?: PropertyImage;
  l?: PropertyImage;
  xl?: PropertyImage;
};

type Gallery = ImageCollection[];

const { hero, gallery } = defineProps<{
  hero?: PropertyImage;
  gallery?: Gallery;
}>();

const propertySubImages = computed(() => {
  const subImageAmount = 4;
  enum SizeWeights {
    xs,
    s,
    m,
    l,
    xl,
  }

  return gallery.slice(0, subImageAmount).reduce((prev, cur) => {
    const sizes = Object.keys(cur);
    const sizeWeights = Object.values(SizeWeights);

    const sortedSizes = sizes.sort(
      (a, b) => sizeWeights.indexOf(b) - sizeWeights.indexOf(a)
    );

    return [cur[sortedSizes[0]], ...prev];
  }, []);
});
</script>

<template>
  <div class="">
    <img :src="hero.url" :alt="hero.caption" class="w-52 h-40" />

    <div class="flex">
      <template v-if="propertySubImages.length">
        <img
          v-for="(img, i) in propertySubImages"
          :src="img.url"
          :alt="img.alt"
          :key="i"
          class="w-12 h-12 m-0.5"
        />
      </template>
    </div>
  </div>
</template>
