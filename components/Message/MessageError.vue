<script lang="ts" setup></script>

<template>
  <div class="flex flex-col items-center justify-center gap-4">
    <div>
      <slot name="header">
        <img
          src="~/assets/img/error.svg"
          :alt="$t('alt.warn_icon')"
          class="w-5 h-5"
        />
      </slot>
    </div>

    <slot name="message">
      <h3 class="_secondary-text">
        {{ $t('action.search.error') }}
      </h3>
    </slot>

    <slot name="error" />
  </div>
</template>
