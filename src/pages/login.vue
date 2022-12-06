<template>
  <div class="min-h-screen bg-white flex">
    <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <img class="h-28 w-auto mx-auto" src="/medching_logo.png" />
          <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p class="mt-2 text-sm text-gray-600">
            And
            {{ ' ' }}
            <a href="#" class="font-medium text-slate-600 hover:text-slate-500">
              take your future into your own hands
            </a>
          </p>
        </div>

        <div class="mt-8">
          <div>
            <div>
              <div class="mt-2 relative">
                <div class="absolute inset-0 flex items-center" aria-hidden="true">
                  <div class="w-full border-t border-gray-300" />
                </div>
                <div class="relative flex justify-center text-sm">
                  <span class="px-2 bg-white text-gray-500">
                    Doctor / Staff
                  </span>
                </div>
              </div>

              <div class="mt-1">
                <RadioGroup class="flex w-full justify-between overflow-x-scroll">
                  <RadioGroupOption class="flex w-full min-w-min m-3 whitespace-nowrap" v-for="option in doc_n_staff" :key="option.id" as="template" @click="activate({ array: doc_n_staff, id: option.id })">
                    <div :class="[option.checked === true ? 'border-gray-500 text-white ' : '', 'flex justify-center relative border border-gray-300 rounded-lg p-3 cursor-pointer focus:outline-none']">
                      <RadioGroupLabel as="p" class="text-base font-medium text-gray-900 flex w-full justify-center gap-x-3 items-center">
                        <component :is="option.icon" class="h-5 w-5 text-gray-300" aria-hidden="true"></component>
                        <span class="text-xs dark:text-white"> {{ option.label }} </span>
                      </RadioGroupLabel>
                    </div>
                  </RadioGroupOption>
                </RadioGroup>
              </div>
            </div>

            <div class="mt-2 relative">
              <div class="absolute inset-0 flex items-center" aria-hidden="true">
                <div class="w-full border-t border-gray-300" />
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-white text-gray-500">
                  Sign In / Registration
                </span>
              </div>
            </div>

            <RadioGroup class="flex w-full justify-between overflow-x-scroll">
              <RadioGroupOption class="flex w-full min-w-min m-3 whitespace-nowrap" v-for="option in sign_n_register" :key="option.id" as="template" @click="activate({ array: sign_n_register, id: option.id })">
                <div :class="[option.checked === true ? 'border-gray-500 text-white ' : '', 'flex justify-center relative border border-gray-300 rounded-lg p-3 cursor-pointer focus:outline-none']">
                  <RadioGroupLabel as="p" class="text-base font-medium text-gray-900 flex w-full justify-center gap-x-3 items-center">
                    <component :is="option.icon" class="h-5 w-5 text-gray-300" aria-hidden="true"></component>
                    <span class="text-xs dark:text-white"> {{ option.label }} </span>
                  </RadioGroupLabel>
                </div>
              </RadioGroupOption>
            </RadioGroup>
            
          </div>

          <div class="mt-6">
            <!-- Here comes SignInForm or RegisterForm depending on user settings above -->
            <SignInForm v-if="active_setting_2 === 1" />
          </div>
        </div>
      </div>
    </div>
    <div class="hidden lg:block relative w-0 flex-1">
      <img class="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80" alt="" />
    </div>
  </div>
</template>


<script setup>
import { RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption, Dialog, DialogOverlay, Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems, Popover, PopoverButton, PopoverGroup, PopoverPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { OfficeBuildingIcon, UserCircleIcon, LoginIcon, PencilAltIcon } from '@heroicons/vue/solid'

const doc_n_staff = ref([
  { id: 1, label: 'Doctor', checked: false, icon: UserCircleIcon },
  { id: 2, label: 'Hospital Staff', checked: false, icon: OfficeBuildingIcon },
])

const sign_n_register = ref([
  { id: 1, label: 'Sign In', checked: false, icon: LoginIcon },
  { id: 2, label: 'Register', checked: false, icon: PencilAltIcon },
])

const active_setting_1 = computed(() => doc_n_staff.value.find((x) => x.checked === true)?.id)
const active_setting_2 = computed(() => sign_n_register.value.find((x) => x.checked === true)?.id)

const activate = ({ array, id }) => {
  array.forEach(o => {
    if (o.id !== id) o.checked = false
    else o.checked = true
  })
}
</script>

<route lang="yaml">
meta:
  layout: empty
</route>