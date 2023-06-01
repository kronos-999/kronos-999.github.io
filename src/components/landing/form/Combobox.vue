<template>
  <div class="w-full">
    <Combobox v-model="selected">
      <div class="relative mt-1">
        <div class="relative w-full cursor-default overflow-hidden bg-white text-left focus:outline-none sm:text-sm">
          <ComboboxInput class="w-full rounded-md py-2 pl-3 pr-10 text-sm leading-5 text-appromed-dark"
            :displayValue="(option) => option?.name" @change="query = $event.target.value" :placeholder="placeholder" />
          <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </ComboboxButton>
        </div>
        <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0"
          @after-leave="query = ''">
          <ComboboxOptions
            class="absolute mt-1 max-h-70 w-full overflow-auto bg-white py-1 text-base focus:outline-none sm:text-sm">
            <div v-if="search_results.length === 0 && query !== ''"
              class="relative cursor-default select-none py-2 px-4 text-appromed-dark">
              Nothing found.
            </div>

            <ComboboxOption v-for="option in search_results" as="template" :key="option.name" :value="option"
              v-slot="{ selected, active }">
              <li class="relative cursor-default select-none py-2 pl-10 pr-4 z-[100]" :class="{
                  'bg-appromed-dark text-white': active,
                  'bg-white text-appromed-dark': !active,
                }">
                <span class="block truncate" :class="{ 'font-medium': selected, 'font-normal': !selected }">
                  {{ option.name }}
                </span>
                <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3"
                  :class="{ 'text-white': active, 'text-slate-600': !active }">
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ComboboxOption>
          </ComboboxOptions>
        </TransitionRoot>
      </div>
    </Combobox>
  </div>
</template>

<script setup>
import { t } from '~/i18n'
import { Combobox, ComboboxInput, ComboboxButton, ComboboxOptions, ComboboxOption, TransitionRoot } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  options: { type: Array, required: true },
  multiple: { type: Boolean, default: false },
  show_3_suggestions: { type: Boolean, default: false },
  placeholder: { type: String, default: 'Search' },
})

let selected = ref(null)
let query = ref('')

const emit = defineEmits(['change'])

watch(selected, (v) => emit('change', v))

let search_results = computed(() =>
  query.value === ''
    ? props.options.slice(0, props.show_3_suggestions === true ? 3 : 17)
    : props.options.filter((option) =>
      option.name
        .toLowerCase()
        .replace(/\s+/g, '')
        .includes(query.value.toLowerCase().replace(/\s+/g, ''))
    ).slice(0, props.show_3_suggestions === true ? 3 : 17)
)
</script>
