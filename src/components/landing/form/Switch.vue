<template>
  <SwitchGroup as="div" class="flex items-center">
    <Switch :value="modelValue" @click="$emit('update:modelValue', !modelValue)"
      :class="[modelValue == true ? 'bg-appromed' : 'bg-gray-700 opacity-20', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-appromed']">
      <span aria-hidden="true"
        :class="[modelValue == true ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
    </Switch>
    <SwitchLabel as="span" :class="`ml-3 ${modelValue == true ? 'text-appromed' : 'text-gray-700 opacity-20'}`">
      <span class="text-sm">{{ label }}</span>
      <!-- <router-link v-if="href" :to="href" class="mx-1 text-sm text-appromed italic">{{ href_label }}</router-link> -->
    </SwitchLabel>
  </SwitchGroup>
</template>

<script setup>
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'

defineEmits(['update:modelValue'])
defineProps(['modelValue', 'label'])

</script>