<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full">
    <body class="h-full">
    ```
  -->
  <div class="min-h-full">
    <Disclosure as="nav" class="border-b border-gray-200 bg-white" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 justify-between">
          <div class="flex">
            <div class="flex flex-shrink-0 items-center">
              <img class="block h-8 w-auto lg:hidden" src="/serpent.svg" />
              <img class="hidden h-8 w-auto lg:block" src="/serpent.svg" />
            </div>
            <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <a v-for="item in navigation" :key="item.name" :href="item.href"
                :class="[item.current ? 'border-appromed text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium']"
                :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
            </div>
          </div>
          <div class="-mr-2 flex items-center sm:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-appromed focus:ring-offset-2">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 pt-2 pb-3">
          <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
            :class="[item.current ? 'bg-appromed border-appromed text-appromed' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800', 'block pl-3 pr-4 py-2 border-l-4 text-base font-medium']"
            :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
        </div>
        <div class="border-t border-gray-200 pt-4 pb-3">
          <!-- <div class="flex items-center px-4">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium text-gray-800">{{ user.name }}</div>
              <div class="text-sm font-medium text-gray-500">{{ user.email }}</div>
            </div>
            <button type="button"
              class="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-appromed focus:ring-offset-2">
              <span class="sr-only">View notifications</span>
              <FunnelIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div> -->
          <div class="mt-3 space-y-1">
            <DisclosureButton v-for="item in userNavigation" :key="item.name" as="a" :href="item.href"
              class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800">
              {{ item.name }}</DisclosureButton>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>

    <div class="py-10">
      <header>
        <!-- <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900">Dashboard</h1>
        </div> -->
      </header>
      <main>
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <div class="px-4 py-8 sm:px-0">
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
            <!-- <div class="h-96 rounded-lg border-4 border-dashed border-gray-200" /> -->
          </div>
          <!-- /End replace -->
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const route = useRoute()

const navigation = [
  { name: 'Dashboard', href: '/docs/dashboard', current: route.path == '/docs/dashboard' },
  { name: 'Settings', href: '/docs/settings', current: route.path == '/docs/settings' },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]
</script>