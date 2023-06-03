<template>
  <div>
    <select id="language" :value="state.active_locale" @change="(e) => setLocale(e.target.value)" class="py-1 outline-none rounded bg-appromed-dark text-white dark:text-appromed-dark dark:bg-white">
      <option v-for="locale in allLocales" :key="locale" :value="locale">
        {{ locale }}
      </option>
    </select>
  </div>
</template>


<script setup>
import { state } from '@/store/global'
import { allLocales, setLocale } from '@/i18n';
</script>