<script setup></script>

<template>
  <div class="flex">
    <img :alt="$t('alt.logo')" src="~/assets/img/logo.jpg" class="h-8 m-3" />

    <div class="flex ml-auto gap-5">
      <select>
        <option>{{ $t('local.lang') }}</option>
      </select>

      <select>
        <option>{{ $t('local.cur.usd') }}</option>
      </select>

      <button>{{ $t('nav.account') }}</button>
      <button>{{ $t('nav.logout') }}</button>
    </div>
  </div>
</template>
