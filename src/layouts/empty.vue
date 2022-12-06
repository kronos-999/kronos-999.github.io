<template>
  <div class="contents">
    <router-view />
  </div>
</template>


<script setup>
import { state } from '~/store/index'

/* load active locale if no data there */
import { setLocale } from "~/i18n"

onBeforeMount(async () => {
  await setLocale(state.active_locale)
})
</script>