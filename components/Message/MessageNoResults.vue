<script lang="ts" setup></script>

<template>
  <div class="flex flex-col items-center justify-center gap-4">
    <div>
      <slot name="header">
        <img
          src="~/assets/img/search.svg"
          :alt="$t('alt.search_icon')"
          class="w-5 h-5"
        />
      </slot>
    </div>

    <h3 class="_secondary-text">
      <slot name="message">
        {{ $t('action.search.no_items') }}
      </slot>
    </h3>
  </div>
</template>
