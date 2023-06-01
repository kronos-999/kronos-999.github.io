<template>
  <div class="min-h-screen bg-white flex">
    <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <img class="h-28 w-auto mx-auto" src="/logo.svg" />
          <h2 class="mt-6 text-3xl font-extrabold text-appromed-dark">
            Melden Sie sich an
          </h2>
          <p class="mt-2 text-sm text-appromed-dark">
            und
            {{ ' ' }}
            <router-link to="#" class="font-medium text-slate-600 hover:text-slate-500">
              finden Sie Ihren Match
            </router-link>
          </p>
        </div>

        <div class="mt-8">
          <div>
            <div>
              <div class="mt-2 relative">
                <div class="absolute inset-0 flex items-center" aria-hidden="true">
                  <div class="w-full border-t border-appromed" />
                </div>
                <div class="relative flex justify-center text-sm">
                  <span class="px-2 bg-white text-appromed">
                    Arzt / Krankenhaus
                  </span>
                </div>
              </div>

              <div class="mt-1">
                <RadioGroup class="flex w-full justify-between overflow-x-hidden">
                  <RadioGroupOption class="flex w-full min-w-min m-3 whitespace-nowrap" v-for="option in doc_n_staff"
                    :key="option.id" as="template" @click="active_setting_1 = option.id">
                    <div
                      :class="[option.id == active_setting_1 ? 'bg-appromed text-white' : '', 'text-appromed flex justify-center relative border border-appromed rounded-lg p-3 cursor-pointer focus:outline-none']">
                      <RadioGroupLabel as="p"
                        class="text-base font-medium flex w-full justify-center gap-x-3 items-center">
                        <component :is="option.icon" class="h-5 w-5" aria-hidden="true"></component>
                        <span class="text-xs dark:text-white"> {{ option.label }} </span>
                      </RadioGroupLabel>
                    </div>
                  </RadioGroupOption>
                </RadioGroup>
              </div>
            </div>

            <div class="mt-2 relative" v-if="active_setting_1">
              <div class="absolute inset-0 flex items-center" aria-hidden="true">
                <div class="w-full border-t border-appromed" />
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-white text-appromed">
                  Login / Registrierung
                </span>
              </div>
            </div>

            <RadioGroup class="flex w-full justify-between overflow-x-hidden" v-if="active_setting_1">
              <RadioGroupOption class="flex w-full min-w-min m-3 whitespace-nowrap" v-for="option in sign_n_register"
                :key="option.id" as="template" @click="active_setting_2 = option.id">
                <div
                  :class="[option.id == active_setting_2 ? 'bg-appromed text-white' : '', 'text-appromed flex justify-center relative border border-appromed rounded-lg p-3 cursor-pointer focus:outline-none']">
                  <RadioGroupLabel as="p" class="text-base font-medium flex w-full justify-center gap-x-3 items-center">
                    <component :is="option.icon" class="h-5 w-5" aria-hidden="true"></component>
                    <span class="text-xs dark:text-white"> {{ option.label }} </span>
                  </RadioGroupLabel>
                </div>
              </RadioGroupOption>
            </RadioGroup>
          </div>

          <LoginFormDocs       v-if="active_setting_1 == 1 && active_setting_2 == 1" />
          <RegisterFormDocs    v-if="active_setting_1 == 1 && active_setting_2 == 2" />
          <LoginFormClinics    v-if="active_setting_1 == 2 && active_setting_2 == 1" />
          <RegisterFormClinics v-if="active_setting_1 == 2 && active_setting_2 == 2" />
        </div>
      </div>
    </div>
    <div class=" hidden lg:block relative w-0 flex-1">
      <img class="absolute inset-0 h-full w-full object-cover object-left" src="/banner_blurred.png" />
    </div>
  </div>
</template>


<script setup>
import { RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption, Dialog, DialogOverlay, Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems, Popover, PopoverButton, PopoverGroup, PopoverPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { BuildingOffice2Icon, UserCircleIcon, ArrowRightOnRectangleIcon, PencilIcon } from '@heroicons/vue/24/outline'

const router = useRouter()

const doc_n_staff = ref([
  { id: 1, label: 'Arzt', icon: UserCircleIcon },
  { id: 2, label: 'Krankenhaus', icon: BuildingOffice2Icon },
])

const sign_n_register = ref([
  { id: 1, label: 'Login', icon: ArrowRightOnRectangleIcon },
  { id: 2, label: 'Registrierung', icon: PencilIcon },
])

const active_setting_1 = ref(undefined)
const active_setting_2 = ref(undefined)

</script>

<route lang="yaml">
meta:
  layout: empty
</route>