<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="contents">
    <Hero />
		<DocForm />
    <TestResults />
		<Footer />
  </div>
</template>

<script setup>
import { t } from '~/i18n'

</script>

<route lang="yaml">
meta:
  layout: empty
</route>