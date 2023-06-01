<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        class="inline-flex w-full justify-center rounded-md border border-appromed bg-white px-4 py-2 text-sm font-medium text-appromed-dark shadow-sm hover:bg-appromed-light focus:outline-none focus:ring-2 focus:ring-appromed focus:ring-offset-2 focus:ring-offset-gray-100">
        {{ props.active?.title || props.title }}
        <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
      </MenuButton>
    </div>

    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems
        class="absolute w-full right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div class="py-1">
          <MenuItem v-for="o in props.options" v-slot="{ active }">
          <button type="button" @click="emit('change', { id: o.id })"
            :class="[active ? 'bg-gray-100 text-appromed-dark' : 'text-appromed-dark', ' w-full block px-4 py-2 text-sm']">{{ o.title }}
          </button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  title: { type: String, required: true },
  options: { type: Array, required: true },
  active: { type: Object, default: null },
})

const emit = defineEmits(['change'])
</script>