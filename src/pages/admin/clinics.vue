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
                  Name
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-appromed uppercase tracking-wider">
                  Adresse
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-appromed uppercase tracking-wider">
                  Ansprechpartner
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">View</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-appromed">
              <tr v-for="(r, i) in state.clinics" :key="i">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-appromed-dark">
                  {{ r.name }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-appromed">
                  {{ r.address }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-appromed">
                  {{ r.leader }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button type="button" @click="edit_clinic(r)"
                    class="text-appromed hover:text-appromed">Bearbeiten</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <ClinicsSlideOver />
</template>

<script setup>
import { t } from '~/i18n'

import { state } from '@/store/global'


const edit_clinic = (s) => {
  state.clinics_slide_over.clinic_form = s
  state.clinics_slide_over.open = true
}
</script>

<route lang="yaml">
meta:
  layout: admin
</route>
