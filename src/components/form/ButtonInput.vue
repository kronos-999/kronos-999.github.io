<!--
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <div>
    <!-- <label for="email" class="block text-sm font-medium text-gray-700">Search candidates</label> -->
    <div class="mt-1 flex rounded-md shadow-sm">
      <div class="relative flex flex-grow items-stretch focus-within:z-10">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <component :is="icon" class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input type="text" name="text" id="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
          class="block w-full rounded-none rounded-l-md border-gray-300 pl-10 focus:border-appromed focus:ring-appromed sm:text-sm"
          placeholder="Nach Spezialisierung, Position, Vor- oder Nachname suchen" />
      </div>
      <button type="button" @click="$emit('click')"
        class="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-appromed focus:outline-none focus:ring-1 focus:ring-appromed">
        <component :is="icon" class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>

<script setup>
defineEmits(['update:modelValue', 'click'])
defineProps(['modelValue', 'icon', 'placeholder'])
</script>