<template>
	<main class="w-full min-h-screen bg-blue-100 grid place-items-center">
		<router-view />
	</main>
</template>


<script setup>
import { state } from '~/store/index'

/* load active locale if no data there */
import { setLocale } from "~/i18n"

onBeforeMount(async () => {
  await setLocale(state.active_locale)
})
</script>