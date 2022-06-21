<script setup></script>

<template>
  <nav class="flex items-center bg-white-1 pl-32 pr-32">
    <NuxtLink to="/">
      <img :alt="$t('alt.logo')" src="~/assets/img/logo.jpg" class="h-8 m-3" />
    </NuxtLink>

    <ul class="flex ml-auto gap-5">
      <li>
        <select>
          <option>{{ $t('local.lang') }}</option>
        </select>
      </li>

      <li>
        <select>
          <option>{{ $t('local.cur.yen') }}</option>
        </select>
      </li>
      <li>
        <button>{{ $t('nav.account') }}</button>
      </li>
      <li>
        <button>{{ $t('nav.logout') }}</button>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
