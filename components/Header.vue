<script setup></script>

<template>
  <nav class="flex items-center bg-white-1 pl-32 pr-32">
    <img :alt="$t('alt.logo')" src="~/assets/img/logo.jpg" class="h-8 m-3" />

    <ul class="flex ml-auto gap-5">
      <li>
        <select>
          <option>{{ $t('local.lang') }}</option>
        </select>
      </li>

      <li>
        <select>
          <option>{{ $t('local.cur.usd') }}</option>
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
