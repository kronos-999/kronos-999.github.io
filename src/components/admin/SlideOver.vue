<template>
  <TransitionRoot as="template" :show="state.slide_over.open == true && !!state.slide_over.search_data">
    <Dialog as="div" static class="fixed inset-0 overflow-hidden" @close="state.slide_over.open = false" :open="state.slide_over.open == true">
      <div class="absolute inset-0 overflow-hidden">
        <DialogOverlay class="absolute inset-0" />

        <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
          <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
            <div class="w-screen max-w-2xl">
              <div class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                <div class="px-4 py-6 sm:px-6">
                  <div class="flex items-start justify-between">
                    <DialogTitle class="text-lg font-medium text-gray-900">
                      Profile
                    </DialogTitle>
                    <div class="ml-3 h-7 flex items-center">
                      <button class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500" @click="state.slide_over.open = false">
                        <span class="sr-only">Close panel</span>
                        <XIcon class="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
                <!-- Main -->
                <div class="divide-y divide-gray-200">
                  <div class="pb-6">
                    <div class="bg-indigo-700 h-24 sm:h-20 lg:h-28" />
                    <div class="-mt-12 flow-root px-4 sm:-mt-8 sm:flex sm:items-end sm:px-6 lg:-mt-15">
                      <div>
                        <div class="-m-1 flex">
                          <div class="inline-flex rounded-lg overflow-hidden border-4 border-white">
                            <img class="flex-shrink-0 h-24 w-24 sm:h-40 sm:w-40 lg:w-48 lg:h-48" src="https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80" alt="" />
                          </div>
                        </div>
                      </div>
                      <div class="mt-6 sm:ml-6 sm:flex-1">
                        <div>
                          <div class="flex items-center">
                            <h3 class="font-bold text-xl text-gray-900 sm:text-2xl">{{ state.slide_over.search_data?.form_inputs.first_name }} {{ state.slide_over.search_data?.form_inputs.last_name }}</h3>
                          </div>
                          <p class="text-sm text-gray-500">{{ state.slide_over.search_data?.form_inputs.email }} / +{{ state.slide_over.search_data?.form_inputs.phone }}</p>
                        </div>
                        <div class="mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3">
                          <a :href="'mailto:' + state.slide_over.search_data.form_inputs.email" class="flex-shrink-0 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:flex-1">
                            <MailIcon class="h-4 w-4" aria-hidden="true"/>
                          </a>
                          <a :href="'tel:+' + state.slide_over.search_data.form_inputs.phone" class="flex-1 w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <PhoneIcon class="h-4 w-4" aria-hidden="true"/>
                          </a>
                          <span class="ml-3 inline-flex sm:ml-0">
                            <Menu as="div" class="relative inline-block text-left">
                              <MenuButton v-if="!note.text.length" @click="note.open = !note.open" class="inline-flex items-center p-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-400 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span class="sr-only">Open Notes</span>
                                <PencilAltIcon v-if="note.open === false" class="h-5 w-5" aria-hidden="true" />
                                <XIcon v-else class="h-5 w-5" aria-hidden="true" />
                              </MenuButton>
                              <MenuButton v-else @click="add_note({ id: state.slide_over.search_data.id })" class="inline-flex items-center p-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-400 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span class="sr-only">Save Note</span>
                                <SaveIcon class="h-5 w-5" aria-hidden="true" />
                              </MenuButton>
                            </Menu>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="px-4 py-5 sm:px-0 sm:py-0">

                    <div class="mx-4 my-2" v-if="note.open === true">
                      <div class="flex justify-between">
                        <label for="message" class="block text-sm font-medium text-gray-900">New Note</label>
                      </div>
                      <div class="mt-2">
                        <textarea v-model="note.text" id="message" placeholder="..." name="message" rows="4" class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md" aria-describedby="message-max" />
                      </div>
                    </div>

                    <dl class="space-y-8 sm:divide-y sm:divide-gray-200 sm:space-y-0">
                      <div class="sm:flex sm:px-6 sm:py-5">
                        <dt class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                          Message
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2">
                          <p>
                            {{ state.slide_over.search_data?.form_inputs.message }}
                          </p>
                        </dd>
                      </div>
                      <div class="sm:flex sm:px-6 sm:py-5">
                        <dt class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                          Position
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2">
                          {{ state.slide_over.search_data?.location_inputs.position.name }}
                        </dd>
                      </div>
                      <div class="sm:flex sm:px-6 sm:py-5">
                        <dt class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                          Specialization
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2">
                          {{ state.slide_over.search_data?.location_inputs.specialization.name }}
                        </dd>
                      </div>
                      <div class="sm:flex sm:px-6 sm:py-5">
                        <dt class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                          City
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2">
                          <p>
                            {{ state.slide_over.search_data?.location_inputs.city }} ({{ state.slide_over.search_data?.location_inputs.radius.name }})
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
import { XIcon, PencilAltIcon, SaveIcon } from '@heroicons/vue/outline'
import { MailIcon, PhoneIcon } from '@heroicons/vue/solid'


import { state } from '@/store/index';


const note = reactive({
  text: '',
  done: false,
  open: false,
})

const add_note = ({ id }) => {
  state.notes.push(Object.assign({
    created_at: new Date(),
    id
  }, note))

  note.text = ''
  note.open = false
}
</script>