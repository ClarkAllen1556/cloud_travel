<script lang="ts" setup></script>

<template>
  <div class="text-white-1">
    <div class="flex flex-col items-center justify-center pt-8 pb-8 bg-black-2">
      <ul class="flex gap-10">
        <li>
          <NuxtLink to="/faq"> {{ $t('footer.faq') }} </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/legal"> {{ $t('footer.tos') }} </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/privacy"> {{ $t('footer.privacy') }} </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact"> {{ $t('footer.contact') }} </NuxtLink>
        </li>
      </ul>
    </div>

    <div class="flex items-center justify-center pt-3 pb-3 bg-black-1">
      <p>{{ $t('footer.copy') }}</p>
    </div>
  </div>
</template>
