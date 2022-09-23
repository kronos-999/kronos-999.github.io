<template>
  <SwitchGroup as="div" class="flex items-center">
    <Switch v-model="enabled" :class="[enabled ? 'bg-gray-600' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500']">
      <span aria-hidden="true" :class="[enabled ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
    </Switch>
    <SwitchLabel as="span" class="ml-3">
      <span class="text-sm text-gray-500">Agree to our</span>
      <a href="" class="mx-2 text-sm text-gray-500 font-semibold">Terms & Conditions</a>
    </SwitchLabel>
  </SwitchGroup>
</template>

<script setup>
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
const enabled = ref(false)

const emit = defineEmits(['change'])

watch(enabled, (v) => emit('change', v));
</script>