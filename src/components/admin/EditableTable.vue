<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex flex-col">
    <div class="my-2 sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-appromed sm:rounded-lg">
          <table class="min-w-full divide-y divide-appromed">
            <thead class="bg-white">
              <tr>
                <th v-for="(h, i) in headers" :key="i" scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-appromed uppercase tracking-wider">
                  {{ h }}
                </th>
              </tr>
            </thead>

            <Disclosure as="div" v-for="(r, i) in rows" :key="i" class="" v-slot="{ open }">
              <dt class="p-6 flex">
                <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400">
                  <span class="font-medium text-appromed-dark">
                    {{ r.name }}
                  </span>
                  <button type="button" class="h-7 block items-center" @click="rows.splice(i, 1)">
                    <XCircleIcon class="h-6 w-6 text-red-500" aria-hidden="true" />
                  </button>
                  <span class="ml-6 h-7 flex items-center">
                    <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']"
                      aria-hidden="true" />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="div" class="p-6">

                <div class="col-span-2 my-3 lg:col-span-full">
                  <div class="flex justify-between">
                    <label for="clinic_form.address"
                      class="block text-sm font-medium text-appromed-dark dark:text-appromed">{{ t('_33') }}</label>
                  </div>
                  <div class="mt-1">
                    <input v-model="r['address']" id="clinic_form.address" name="clinic_form.address" type="text"
                      autocomplete="clinic_form.address"
                      class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md" />
                  </div>
                </div>

                <div class="col-span-2 my-3 lg:col-span-1">
                  <div class="flex justify-between">
                    <label for="clinic_form.beds"
                      class="block text-sm font-medium text-appromed-dark dark:text-appromed">{{ t('_40') }}</label>
                  </div>
                  <div class="mt-1">
                    <input v-model="r['beds']" id="clinic_form.beds" name="clinic_form.beds" type="number"
                      autocomplete="clinic_form.beds"
                      class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md" />
                  </div>
                </div>

                <div class="col-span-2 my-3 lg:col-span-1">
                  <div class="flex justify-between">
                    <label for="clinic_form.patients"
                      class="block text-sm font-medium text-appromed-dark dark:text-appromed">{{ t('_41') }}</label>
                  </div>
                  <div class="mt-1">
                    <input v-model="r['patients']" id="clinic_form.patients" name="clinic_form.patients" type="number"
                      autocomplete="clinic_form.beds"
                      class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md" />
                  </div>
                </div>

                <div class="col-span-2 my-3 lg:col-span-1">
                  <div class="flex justify-between">
                    <label for="clinic_form.employees"
                      class="block text-sm font-medium text-appromed-dark dark:text-appromed">{{ t('_42') }}</label>
                  </div>
                  <div class="mt-1">
                    <input v-model="r['employees']" id="clinic_form.employees" name="clinic_form.employees" type="number"
                      autocomplete="clinic_form.beds"
                      class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md" />
                  </div>
                </div>

                <div class="col-span-2 my-3 lg:col-span-1">
                  <div class="flex justify-between">
                    <label for="clinic_form.education"
                      class="block text-sm font-medium text-appromed-dark dark:text-appromed">Weiterbildungsermächtigung</label>
                  </div>
                  <div class="mt-1">
                    <input v-model="r['education']" id="clinic_form.education" name="clinic_form.education" type="text"
                      autocomplete="clinic_form.education"
                      class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md" />
                  </div>
                </div>

                <div class="col-span-2 my-3">
                  <div class="flex justify-between">
                    <label for="clinic_form.leader"
                      class="block text-sm font-medium text-appromed-dark dark:text-appromed">{{ t('_35') }}</label>
                  </div>
                  <div class="mt-1">
                    <input v-model="r['leader']" name="clinic_form.leader" id="clinic_form.leader" type="text"
                      class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md"
                      aria-describedby="phone-optional" />
                  </div>
                </div>

                <div class="col-span-2 my-3">
                  <div class="flex justify-between">
                    <label for="clinic_form.email"
                      class="block text-sm font-medium text-appromed-dark dark:text-appromed">{{ t('_39') }}</label>
                  </div>
                  <div class="mt-1">
                    <input v-model="r['email']" name="clinic_form.email" id="clinic_form.email" type="email"
                      class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md"
                      aria-describedby="phone-optional" />
                  </div>
                </div>

                <div class="col-span-2 my-3">
                  <div class="flex justify-between">
                    <label for="clinic_form.website"
                      class="block text-sm font-medium text-appromed-dark dark:text-appromed">{{ t('_37') }}</label>
                  </div>
                  <div class="mt-1">
                    <input v-model="r['website']" name="clinic_form.website" id="clinic_form.website" type="text"
                      class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md"
                      aria-describedby="phone-optional" />
                  </div>
                </div>

                <div class="col-span-2 my-3">
                  <div class="flex justify-between">
                    <label for="clinic_form.phone"
                      class="block text-sm font-medium text-appromed-dark dark:text-appromed">{{ t('_38') }}</label>
                  </div>
                  <div class="mt-1">
                    <input v-model="r['phone']" name="clinic_form.phone" id="clinic_form.phone" type="number"
                      class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md"
                      aria-describedby="phone-optional" />
                  </div>
                </div>

                <div class="col-span-full my-3">
                  <div class="flex justify-between">
                    <label for="clinic_form.about"
                      class="block text-sm font-medium text-appromed-dark dark:text-appromed">{{ t('_44') }}</label>
                  </div>
                  <div class="mt-1">
                    <textarea v-model="r['about']" id="about"
                      placeholder="Infos zur Lage (Standort, Region), Betriebskita/ Kindergarten in der Nähe, Verkehrsanbindung, Kurzbeschreibung der Klinik, Firmenphilosophie etc."
                      name="message" rows="4"
                      class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-appromed focus:border-appromed border border-appromed rounded-md"
                      aria-describedby="message-max" />
                  </div>
                </div>

              </DisclosurePanel>
            </Disclosure>

            <!-- <tbody class="bg-white divide-y divide-appromed">

              <tr v-for="(r, i) in rows" :key="i">
                <td v-for="(f, i) in fields" :key="i" class="px-6 py-4 text-sm font-medium text-appromed-dark">
                  {{ r[f] }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button type="button" class="text-appromed hover:text-appromed-dark">
                    <IcBaselineEdit class="h-6 w-6" @click="table_row_to_edit = r"/>
                  </button>
                </td>
              </tr>
            </tbody> -->

          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IcBaselineEdit from '~icons/ic/baseline-edit'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronDownIcon, XCircleIcon } from '@heroicons/vue/24/outline'

import { state } from '@/store/global'
import { t } from '@/i18n'

const open = ref(false)
const table_row_to_edit = ref(undefined)
const props = defineProps({
  headers: Array,
  rows: Array,
  fields: Array,
});
</script>