<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="min-h-screen bg-white dark:bg-appromed-dark">
    <Disclosure as="nav" class="bg-white dark:bg-appromed-dark border-b border-appromed" v-slot="{ open }">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex-shrink-0 flex items-center">
            <svg class="h-8 w-auto fill-appromed dark:fill-white" xmlns="http://www.w3.org/2000/svg" id="Ebene_3"
              data-name="Ebene 3" viewBox="0 0 368.08 690.76">
              <path
                d="M356 23.28V59.2l-86.96 23.12-47.99-12.8-96.12 112.85v56.56l-47.98-56.56v-56.42l47.98-56.43 96.12-56.42L269.04.31 356 23.28zM269.04 464.76v56.42l-47.99 56.42-96.12 56.42-95.97 56.42 95.97-112.84 96.12-112.99v-56.42l47.99 56.57zM269.04 238.79v56.56l-47.99 56.42-96.12 56.42v56.57l-47.98-56.57v-56.42l47.98-56.42 96.12-56.42v-56.56l47.99 56.42z"
                class="cls-1" />
              <path d="M221.05 577.6v112.84h-96.12v-56.42l96.12-56.42z" class="cls-1" />
            </svg>
          </div>
          <div class="flex">
            <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <router-link v-for="item in navigation" :key="item.name" :to="item.href"
                :class="[item.current ? 'border-slate-500 text-appromed-dark dark:text-gray-100' : 'border-transparent text-appromed dark:text-white hover:border-appromed', 'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium']"
                :aria-current="item.current ? 'page' : undefined">
                {{ t(item.name) }}
              </router-link>
            </div>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:items-center">
            <!-- <button class="bg-white p-1 rounded-full text-gray-400 hover:text-appromed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500">
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button> -->

            <DarkToggle />

            <!-- Profile dropdown -->
            <Menu as="div" class="ml-3 relative">
              <div>
                <MenuButton
                  class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500">
                  <span class="sr-only">Open user menu</span>
                  <!--  <img class="h-8 w-8 rounded-full" :src="user.imageUrl" /> -->
                </MenuButton>
              </div>
              <transition enter-active-class="transition ease-out duration-200"
                enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95">
                <MenuItems
                  class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                  <router-link :to="item.href"
                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-appromed-dark']">
                    {{ item.name }}
                  </router-link>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
          <div class="-mr-2 flex items-center sm:hidden">

            <DisclosureButton
              class="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-appromed hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XCircleIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="sm:hidden">
        <div class="pt-2 pb-3 space-y-1">
          <router-link v-for="item in navigation" :key="item.name" :to="item.href"
            :class="[item.current ? 'bg-slate-50 border-slate-500 text-slate-700' : 'border-transparent text-appromed dark:text-white hover:border-appromed hover:text-appromed-dark', 'block pl-3 pr-4 py-2 border-l-4 text-base font-medium']"
            :aria-current="item.current ? 'page' : undefined">
            {{ t(item.name) }}
          </router-link>
        </div>
        <div class="pt-4 pb-3 border-t border-appromed">
          <div class="mt-3 space-y-1">
            <router-link v-for="item in userNavigation" :key="item.name" :to="item.href"
              class="block px-4 py-2 text-base font-medium text-appromed hover:text-appromed-dark hover:bg-gray-100">
              {{ item.name }}
            </router-link>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>

    <div class="py-10">
      <header>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold leading-tight text-appromed-dark dark:text-gray-100">
            {{ t(active_navigation) }}
          </h1>
        </div>
      </header>
      <main>
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <!-- <div class="px-4 py-8 sm:px-0">
            <div class="border-4 border-dashed border-appromed rounded-lg h-96" />
          </div> -->
          <RouterView v-slot="{ Component }">
            <template v-if="Component">
              <Transition>
                <KeepAlive>
                  <Suspense>
                    <!-- main content -->
                    <div>
                      <component :is="Component"></component>
                    </div>

                    <!-- loading state -->
                    <template #fallback>
                      Loading...
                    </template>
                  </Suspense>
                </KeepAlive>
              </Transition>
            </template>
          </RouterView>
          <!-- /End replace -->
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { t } from '~/i18n'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { BellIcon, Bars3Icon, XCircleIcon } from '@heroicons/vue/24/outline'
import { state } from '~/store/global'

/* load active locale if no data there */
import { setLocale } from "~/i18n"

onBeforeMount(async () => {
  await setLocale(state.active_locale)
})

const route = useRoute()
const open = ref(false)

const navigation = reactive([
  { name: '_29', href: '/admin/searches', current: computed(() => route.path === '/admin/searches') },
  { name: '_50', href: '/admin/vacancies', current: computed(() => route.path === '/admin/vacancies') },
  { name: '_48', href: '/admin/clinics', current: computed(() => route.path === '/admin/clinics') },
  { name: '_51', href: '/admin/docs', current: computed(() => route.path === '/admin/docs') },
])

const active_navigation = computed(() => navigation.find((x) => x.current === true)?.name)

const userNavigation = [
  /* { name: 'Your Profile', href: '#' }, */
  /*   { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' }, */
]
</script>