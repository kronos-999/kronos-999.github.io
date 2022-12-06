<template>
  <div>
    <select id="language" :value="state.active_locale" @change="(e) => setLocale(e.target.value)" class="py-1 outline-none rounded bg-gray-900 text-white dark:text-gray-900 dark:bg-white">
      <option v-for="locale in allLocales" :key="locale" :value="locale">
        {{ locale }}
      </option>
    </select>
  </div>
</template>


<script setup>
import { state } from '@/store/index'
import { allLocales, setLocale } from '@/i18n';
</script>