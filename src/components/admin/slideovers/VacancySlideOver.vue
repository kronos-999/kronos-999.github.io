<template>
  <TransitionRoot as="template" :show="state.vacancy_slide_over.open == true && !!state.vacancy_slide_over.data">
    <Dialog as="div" static class="fixed inset-0 overflow-hidden" @close="state.vacancy_slide_over.open = false"
      :open="state.vacancy_slide_over.open == true">
      <div class="absolute inset-0 overflow-hidden">
        <DialogOverlay class="absolute inset-0" />

        <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
          <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700"
            enter-from="translate-x-full" enter-to="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0"
            leave-to="translate-x-full">
            <div class="w-screen max-w-2xl">
              <div class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                <div class="px-4 py-6 sm:px-6">
                  <div class="flex items-start justify-between">
                    <DialogTitle class="text-lg font-medium text-appromed">
                      Bearbeiten
                    </DialogTitle>
                    <div class="ml-3 h-7 flex items-center">
                      <button
                        class="bg-white rounded-md text-appromed-light hover:text-appromed focus:ring-2 focus:ring-appromed"
                        @click="state.vacancy_slide_over.open = false">
                        <span class="sr-only">Close panel</span>
                        <XCircleIcon class="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
                <!-- Main -->
                <div class="divide-y divide-appromed">
                  <div class="pb-6">
                    <div class="mt-4 flow-root px-4 sm:flex sm:items-end sm:px-6">
                      <div class="mt-4 sm:ml-6 sm:flex-1">

                        <div class="col-span-2 my-3">
                          <label for="data.name"
                            class="block text-sm font-medium text-appromed-dark dark:text-appromed">Titel</label>
                          <div class="mt-1">
                            <input v-model="state.vacancy_slide_over.data.title" required type="text" name="data.name"
                              id="data.name" autocomplete="data.name"
                              class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md" />
                          </div>
                        </div>

                        <div class="col-span-2 my-3 lg:col-span-full">
                          <div class="flex justify-between">
                            <label for="data.address"
                              class="block text-sm font-medium text-appromed-dark dark:text-appromed">Adresse</label>
                          </div>
                          <div class="mt-1">
                            <input v-model="state.vacancy_slide_over.data.address" required id="data.address"
                              name="data.address" type="text" autocomplete="data.address"
                              class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md" />
                          </div>
                        </div>

                        <div class="col-span-2 my-3">
                          <div class="flex justify-between">
                            <label for="data.leader"
                              class="block text-sm font-medium text-appromed-dark dark:text-appromed">Ansprechpartner</label>
                          </div>
                          <div class="mt-1">
                            <input v-model="state.vacancy_slide_over.data.leader" required name="data.leader"
                              id="data.leader" type="text"
                              class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md"
                              aria-describedby="phone-optional" />
                          </div>
                        </div>

                        <div class="col-span-2 my-3">
                          <div class="flex justify-between">
                            <label for="data.leader"
                              class="block text-sm font-medium text-appromed-dark dark:text-appromed">Klinik</label>
                          </div>
                          <div class="mt-1">
                            <select v-model="state.vacancy_slide_over.data['clinic']" required name="data.leader"
                              id="data.leader"
                              class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md"
                              aria-describedby="phone-optional">
                              <option v-for="clinic in state.verified_clinics" :value="clinic" :key="clinic.id">
                                {{ clinic.name }}</option>
                            </select>
                          </div>
                        </div>

                        <div class="col-span-2 my-3" v-if="!!state.vacancy_slide_over.data['clinic']">
                          <div class="flex justify-between">
                            <label for="data.leader"
                              class="block text-sm font-medium text-appromed-dark dark:text-appromed">Fachbereich
                              (Optional)</label>
                          </div>
                          <div class="mt-1">
                            <select v-model="state.vacancy_slide_over.data['specialization']" required name="data.leader"
                              id="data.leader"
                              class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md"
                              aria-describedby="phone-optional">
                              <option v-for="specialization in state.vacancy_slide_over.data['clinic'].specializations"
                                :value="specialization.name" :key="specialization.id">{{ specialization.name }}</option>
                            </select>
                          </div>
                        </div>

                        <button type="button" @click="delete_vacancy()"
                          class="w-full px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded mt-12">
                          Löschen
                        </button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { t } from '~/i18n'
import IcBaselineEdit from '~icons/ic/baseline-edit'
import { Dialog, DialogOverlay, DialogTitle, Menu, MenuButton, MenuItem, MenuItems, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XCircleIcon, PencilIcon, CheckIcon } from '@heroicons/vue/24/outline'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'

import { state } from '@/store/global';

const delete_vacancy = () => {
  state.vacancies.splice(state.vacancies.findIndex((x) => x === state.vacancy_slide_over.data), 1)
  state.vacancy_slide_over.open = false
  state.vacancy_slide_over.data = {}
}

</script>
