<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex flex-col my-4">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-appromed sm:rounded-lg">
          <table class="min-w-full divide-y divide-appromed">
            <thead class="bg-white">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-appromed uppercase tracking-wider">
                  {{ t('_26') }}
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-appromed uppercase tracking-wider">
                  {{ t('_27') }}
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-appromed uppercase tracking-wider">
                  {{ t('_28') }}
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Ansehen</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-appromed">
              <tr v-for="(search, i) in state.past_searches" :key="i">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-appromed-dark">
                  {{ search.form_inputs.first_name }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-appromed">
                  {{ search.form_inputs.email }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-appromed">
                  {{ search.form_inputs.phone }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button type="button" @click="show_search(search)" class="text-appromed hover:text-appromed">Ansehen</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <SlideOver />
</template>

<script setup>
import { t } from '~/i18n'

import { state } from '@/store/global'


const show_search = (s) => {
  state.slide_over.search_data = s
  state.slide_over.search_data['note'] = state.slide_over.search_data['note'] || {
    text: '',
    open: false,
    done: false,
  }
  state.slide_over.open = true
}
</script>

<route lang="yaml">
meta:
  layout: admin
</route>
