<template>
  <div class="contents">
    <section>
      <img src="/logo.svg" class="w-96 h-auto mx-auto mb-6">
      <IconInput v-model="searchInput" :icon="MagnifyingGlassIcon" placeholder="Fachbereich / Bundesland / Name des Facharztes / Klinik / ..." class="w-1/2 mx-auto"/>
    </section>
    <section class="mt-6">
      <DocsSearchFilters />
      <DocsSearchResults />
    </section>
  </div>
</template>

<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
const searchInput = ref('')
</script>


<route lang="yaml">
meta:
  layout: logged_in_users
</route>