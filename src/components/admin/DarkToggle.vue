<template>
  <div>
    <button class="mx-5 cursor-pointer focus:outline-none text-appromed-dark dark:text-white" @click="toggleDarkMode">
      <SunIcon class="w-6 h-6" v-if="!isDark" />
      <MoonIcon class="w-6 h-6" v-else />
    </button>
  </div>
</template>


<script setup>
import { t } from '~/i18n'
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline'

const preferedDark = usePreferredDark()
const isDark = useStorage('isDark', preferedDark.value)

const html = ref(null)

const toggleDarkMode = () => {
  if (!html.value) return
  html.value.classList.toggle('dark')
  isDark.value = !isDark.value
}


onMounted(async () => {
  await nextTick()

  html.value = document.querySelector('html')
  if (html.value) {
    if (isDark.value) html.value.classList.add('dark')
  }
})
</script>