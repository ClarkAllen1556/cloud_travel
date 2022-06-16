<script setup></script>

<template>
  <div class="flex bg-blue-1 p-3 pl-32 pr-32">
    <div class="flex border border-grey-3 rounded w-96 bg-white-1">
      <img src="~/assets/img/search.svg" class="w-4 h-4 m-3" />
      <input class="w-full outline-none" />
    </div>

    <div class="ml-auto">
      <Button :label="$t('action.search')" />
    </div>
  </div>
</template>
