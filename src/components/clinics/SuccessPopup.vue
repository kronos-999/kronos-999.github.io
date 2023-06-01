<template>
  <TransitionRoot as="template" :show="!!state.clinic_form.submitted">
    <Dialog as="div" class="relative z-10" @close="state.clinic_form.submitted = null">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
        leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-appromed bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div
                    class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <CheckCircleIcon class="h-6 w-6 text-green-600" aria-hidden="true" />
                  </div>
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle as="h3" class="text-lg font-medium leading-6 text-appromed-dark">Vielen Dank für Ihre
                      Vorstellung!</DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-appromed">Unser Mitarbeiter für die Verifizierung wird sich zeitnah bei Ihnen
                        melden.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-white px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="button"
                  class="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                  @click="back_to_index">Zurück zur Startseite</button>
                <!-- <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-appromed bg-white px-4 py-2 text-base font-medium text-appromed-dark shadow-sm hover:bg-appromed-light focus:outline-none focus:ring-2 focus:ring-appromed focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="state.clinic_form.submitted = null" ref="cancelButtonRef">Cancel</button> -->
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { state } from '~/store/global'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { CheckCircleIcon } from '@heroicons/vue/24/outline'

const router = useRouter()

const back_to_index = () => router.push({ path: '/' })
</script>