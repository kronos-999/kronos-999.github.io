<template>
  <TransitionRoot as="template" :show="state.docs_slide_over.open == true && !!state.docs_slide_over.data">
    <Dialog as="div" static class="fixed inset-0 overflow-hidden" @close="state.docs_slide_over.open = false"
      :open="state.docs_slide_over.open == true">
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
                      Ärzte Bearbeiten
                    </DialogTitle>
                    <div class="ml-3 h-7 flex items-center">
                      <button
                        class="bg-white rounded-md text-appromed-light hover:text-appromed focus:ring-2 focus:ring-appromed"
                        @click="state.docs_slide_over.open = false">
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
                          <Switch label="Priority I" v-model="state.docs_slide_over.data['important']" />
                        </div>
                        <div class="col-span-2 my-3">
                          <label for="data.name"
                            class="block text-sm font-medium text-appromed-dark dark:text-appromed">Vorname</label>
                          <div class="mt-1">
                            <input v-model="state.docs_slide_over.data.firstname" required type="text" name="data.name"
                              id="data.name" autocomplete="data.name"
                              class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md" />
                          </div>
                        </div>

                        <div class="col-span-2 my-3 lg:col-span-full">
                          <div class="flex justify-between">
                            <label for="data.address"
                              class="block text-sm font-medium text-appromed-dark dark:text-appromed">Nachname</label>
                          </div>
                          <div class="mt-1">
                            <input v-model="state.docs_slide_over.data.lastname" required id="data.address"
                              name="data.address" type="text" autocomplete="data.address"
                              class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md" />
                          </div>
                        </div>

                        <div class="col-span-2 my-3 lg:col-span-full">
                            <div class="flex justify-between">
                              <label for="data.notes"
                                class="block text-sm font-medium text-appromed-dark dark:text-appromed">Notes</label>
                            </div>
                            <div class="mt-1">
                              <textarea rows="3" v-model="state.docs_slide_over.data.notes" required id="data.notes"
                                name="data.notes" type="text" autocomplete="data.notes"
                                class="py-3 px- block w-full shadow-sm text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md"></textarea>
                            </div>
                          </div>

                        <div class="col-span-2 my-3 lg:col-span-full">
                          <div class="flex justify-between">
                            <label for="data.specialty"
                              class="block text-sm font-medium text-appromed-dark dark:text-appromed">Spezialisierung</label>
                          </div>
                          <div class="mt-1">
                            <input v-model="state.docs_slide_over.data.specialty" required id="data.specialty"
                              name="data.specialty" type="text" autocomplete="data.specialty"
                              class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md" />
                          </div>
                        </div>

                        <div class="col-span-2 my-3 lg:col-span-full">
                          <div class="flex justify-between">
                            <label for="data.position"
                              class="block text-sm font-medium text-appromed-dark dark:text-appromed">Position</label>
                          </div>
                          <div class="mt-1">
                            <input v-model="state.docs_slide_over.data.position" required id="data.position"
                              name="data.position" type="text" autocomplete="data.position"
                              class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md" />
                          </div>
                        </div>

                        <div class="col-span-2 my-3 lg:col-span-full">
                          <div class="flex justify-between">
                            <label for="data.address"
                              class="block text-sm font-medium text-appromed-dark dark:text-appromed">Email</label>
                          </div>
                          <div class="mt-1">
                            <input v-model="state.docs_slide_over.data.email" required id="data.address"
                              name="data.address" type="text" autocomplete="data.address"
                              class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md" />
                          </div>
                        </div>

                        <div class="col-span-2 my-3 lg:col-span-full">
                          <div class="flex justify-between">
                            <label for="data.phone"
                              class="block text-sm font-medium text-appromed-dark dark:text-appromed">Phone</label>
                          </div>
                          <div class="mt-1">
                            <input v-model="state.docs_slide_over.data.phone" required id="data.phone" name="data.phone"
                              type="text" autocomplete="data.phone"
                              class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md" />
                          </div>
                        </div>


                        <div class="col-span-2 my-3 lg:col-span-full">
                          <div class="flex justify-between">
                            <label for="data.address"
                              class="block text-sm font-medium text-appromed-dark dark:text-appromed">Passwort</label>
                          </div>
                          <div class="mt-1">
                            <input v-model="state.docs_slide_over.data.password" required id="data.address"
                              name="data.address" type="text" autocomplete="data.address"
                              class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md" />
                          </div>
                        </div>

                        <button type="button" @click="save"
                            class="w-full px-3 py-2 bg-appromed hover:bg-appromed-dark text-white rounded mt-12">
                            Speichern
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

import { state } from '@/store/global'
import { fireAPI } from '@/hooks/fireAPI'

const save = async () => {
  const [_, err] = await fireAPI('/api/v2/medching/admin/docs/update', state.docs_slide_over.data, false)

  if (err) {
    console.log(err)
    alert('ERROR')
    if (err.code == 403) return router.push('/admin/login')
  }
}
</script>
