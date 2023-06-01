<template>
  <div class="contents">
    <span class="inline-flex items-center rounded bg-appromed px-2 py-0.5 text-xs text-white">
      <component :is="icon" class="mr-1.5 h-2 w-2 text-appromed" />
      {{ label }}
    </span>
  </div>
</template>

<script setup>
defineProps(['label', 'icon'])
</script>