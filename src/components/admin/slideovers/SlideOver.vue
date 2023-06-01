<template>
  <TransitionRoot as="template" :show="state.slide_over.open == true && !!state.slide_over.search_data">
    <Dialog as="div" static class="fixed inset-0 overflow-hidden" @close="state.slide_over.open = false"
      :open="state.slide_over.open == true">
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
                    <DialogTitle class="text-lg font-medium text-appromed-dark">
                      Anfrage ansehen
                    </DialogTitle>
                    <div class="ml-3 h-7 flex items-center">
                      <button
                        class="bg-white rounded-md text-gray-400 hover:text-appromed focus:ring-2 focus:ring-appromed"
                        @click="state.slide_over.open = false">
                        <span class="sr-only">Close panel</span>
                        <XCircleIcon class="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
                <!-- Main -->
                <div class="divide-y divide-appromed">
                  <div class="pb-6">
                    <div class="bg-appromed h-24 sm:h-20 lg:h-28" />
                    <div class="-mt-12 flow-root px-4 sm:-mt-8 sm:flex sm:items-end sm:px-6 lg:-mt-15">
                      <div>
                        <div class="-m-1 flex">
                          <div class="inline-flex rounded-lg overflow-hidden border-4 border-white">
                            <img class="flex-shrink-0 h-24 w-24 sm:h-40 sm:w-40 lg:w-48 lg:h-48 bg-white"
                              src="/serpent.svg" />
                          </div>
                        </div>
                      </div>
                      <div class="mt-6 sm:ml-6 sm:flex-1">
                        <div>
                          <div class="flex items-center">
                            <h3 class="font-bold text-xl text-appromed-dark sm:text-2xl">
                              {{ state.slide_over.search_data?.form_inputs.first_name }}
                              {{ state.slide_over.search_data?.form_inputs.last_name }}</h3>
                          </div>
                          <p class="text-sm text-appromed">{{ state.slide_over.search_data?.form_inputs.email }} /
                            +{{ state.slide_over.search_data?.form_inputs.phone }}</p>
                        </div>
                        <div class="mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3">
                          <router-link :to="'mailto:' + state.slide_over.search_data.form_inputs.email"
                            class="flex-shrink-0 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-appromed hover:bg-appromed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-appromed sm:flex-1">
                            <EnvelopeIcon class="h-4 w-4" aria-hidden="true" />
                          </router-link>
                          <router-link :to="'tel:+' + state.slide_over.search_data.form_inputs.phone"
                            class="flex-1 w-full inline-flex items-center justify-center px-4 py-2 border border-appromed rounded-md shadow-sm text-sm font-medium text-appromed-dark bg-white hover:bg-appromed-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-appromed">
                            <PhoneIcon class="h-4 w-4" aria-hidden="true" />
                          </router-link>
                          <span class="ml-3 inline-flex sm:ml-0">
                            <Menu as="div" class="relative inline-block text-left">
                              <MenuButton v-if="state.slide_over.search_data.note.open === true"
                                @click="state.slide_over.search_data.note.open = false"
                                class="inline-flex items-center p-2 border border-appromed rounded-md shadow-sm text-sm font-medium text-appromed bg-white hover:bg-appromed hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-appromed">
                                <span class="sr-only">Open Note</span>
                                <XCircleIcon class="h-5 w-5" aria-hidden="true" />
                              </MenuButton>
                              <MenuButton v-if="state.slide_over.search_data.note.open === false"
                                @click="state.slide_over.search_data.note.open = true"
                                class="inline-flex items-center p-2 border border-appromed rounded-md shadow-sm text-sm font-medium text-appromed bg-white hover:bg-appromed hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-appromed">
                                <span class="sr-only">Close Note</span>
                                <PencilIcon class="h-5 w-5" aria-hidden="true" />
                              </MenuButton>
                            </Menu>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="px-4 py-5 sm:px-0 sm:py-0">

                    <div class="mx-4 my-2" v-if="state.slide_over.search_data.note.open === true">
                      <div class="flex justify-between">
                        <label for="message" class="block text-sm font-medium text-appromed-dark">Notiz</label>
                      </div>
                      <div class="mt-2">
                        <textarea v-model="state.slide_over.search_data.note.text" id="message" placeholder="..."
                          name="message" rows="4"
                          class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-appromed focus:border-appromed border border-appromed rounded-md"
                          aria-describedby="message-max" />
                      </div>
                    </div>

                    <dl class="space-y-8 sm:divide-y sm:divide-appromed sm:space-y-0">
                      <div class="sm:flex sm:px-6 sm:py-5">
                        <dt class="text-sm font-medium text-appromed sm:w-40 sm:flex-shrink-0 lg:w-48">
                          Kommentar
                        </dt>
                        <dd class="mt-1 text-sm text-appromed-dark sm:mt-0 sm:ml-6 sm:col-span-2">
                          <p>
                            {{ state.slide_over.search_data?.form_inputs.message }}
                          </p>
                        </dd>
                      </div>
                      <div class="sm:flex sm:px-6 sm:py-5">
                        <dt class="text-sm font-medium text-appromed sm:w-40 sm:flex-shrink-0 lg:w-48">
                          Position
                        </dt>
                        <dd class="mt-1 text-sm text-appromed-dark sm:mt-0 sm:ml-6 sm:col-span-2">
                          {{ state.slide_over.search_data?.location_inputs.position.name }}
                        </dd>
                      </div>
                      <div class="sm:flex sm:px-6 sm:py-5">
                        <dt class="text-sm font-medium text-appromed sm:w-40 sm:flex-shrink-0 lg:w-48">
                          Spezialisierung
                        </dt>
                        <dd class="mt-1 text-sm text-appromed-dark sm:mt-0 sm:ml-6 sm:col-span-2">
                          {{ state.slide_over.search_data?.location_inputs.specialization.name }}
                        </dd>
                      </div>
                      <div class="sm:flex sm:px-6 sm:py-5">
                        <dt class="text-sm font-medium text-appromed sm:w-40 sm:flex-shrink-0 lg:w-48">
                          Stadt (Radius)
                        </dt>
                        <dd class="mt-1 text-sm text-appromed-dark sm:mt-0 sm:ml-6 sm:col-span-2">
                          <p>
                            {{ state.slide_over.search_data?.location_inputs.city }}
                            ({{ state.slide_over.search_data?.location_inputs.radius.name }})
                          </p>
                        </dd>
                      </div>
                    </dl>
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
import { Dialog, DialogOverlay, DialogTitle, Menu, MenuButton, MenuItem, MenuItems, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XCircleIcon, PencilIcon } from '@heroicons/vue/24/outline'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'


import { state } from '@/store/global'
</script>