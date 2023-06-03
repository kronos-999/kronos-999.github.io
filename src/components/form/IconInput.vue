<template>
  <div>
    <!-- <label for="doc_search" class="block text-sm font-medium text-gray-700">Account number</label> -->
    <div class="relative mt-1 rounded-md shadow-sm">
      <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" name="doc_search" id="doc_search"
        class="block w-full rounded-md border-appromed p-3 pr-10 focus:border-appromed focus:ring-appromed sm:text-sm"
        :placeholder="placeholder" />
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <component :is="icon" class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineEmits(['update:modelValue'])
defineProps(['modelValue', 'icon', 'placeholder'])
</script>