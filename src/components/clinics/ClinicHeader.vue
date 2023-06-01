<template>
  <div class="isolate bg-white">
    <div class="absolute inset-x-0 -z-10 overflow-hidden">
      <img src="/banner_blurred.png" class="invisible md:visible md:w-screen md:h-screen aspect-video object-cover">
    </div>
    <div class="px-6 pt-6 lg:px-8">
      <nav class="flex items-center justify-between" aria-label="Global">
        <div class="flex lg:flex-1">
          <router-link to="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8" src="/logo_colored.svg" />
          </router-link>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-appromed"
            @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars2Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-4">
          <router-link v-for="item in navigation" :key="item.name" :to="item.href"
            class="rounded-lg py-2 px-3 text-base bg-appromed leading-7 text-white hover:bg-appromed-dark">{{ item.name }}</router-link>
        </div>
        <!-- <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <router-link to="#" class="text-sm  leading-6 text-black">Log in <span aria-hidden="true">&rarr;</span></router-link>
        </div> -->
      </nav>
      <Dialog as="div" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <DialogPanel focus="true" class="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
          <div class="flex items-center justify-between">
            <router-link to="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8" src="/logo.svg" />
            </router-link>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-appromed" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XCircleIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-appromed/10">
              <div class="space-y-2 py-6">
                <router-link v-for="item in navigation" :key="item.name" :to="item.href"
                  class="-mx-3 block rounded-lg py-2 px-3 text-base bg-appromed leading-7 text-white hover:bg-appromed-dark">{{ item.name }}</router-link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
    <main>
      <div class="relative px-6 lg:px-8">
        <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div class="hidden sm:mb-8 sm:flex sm:justify-center">
            <!-- <div class="relative rounded-full py-1 px-3 text-sm leading-6 text-appromed-dark ring-1 ring-appromed-dark/10 hover:ring-appromed-dark/20">
              Announcing our next round of funding. <router-link to="#" class=" text-appromed"><span class="absolute inset-0" aria-hidden="true" />Read more <span aria-hidden="true">&rarr;</span></router-link>
            </div> -->
          </div>
          <div class="text-center">
            <h1 class="text-5xl font-bold tracking-tight text-black md:text-5xl">
              Find your
              <img src="/logo.svg" class="h-24 w-auto">
            </h1>
            <p class="mt-6 text-lg leading-8 text-black">
              Die Plattform, auf der Ärzte und Kliniken zusammenkommen
            </p>
            <div class="mt-20 flex flex-col items-center justify-center">
              <a href="#clinic_form" class="contents">
                <ChevronDoubleDownIcon class="h-12 w-12 text-black animate-bounce" aria-hidden="true" />
                <p>SCROLL</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { Dialog, DialogPanel } from '@headlessui/vue'
import { XCircleIcon, ChevronDoubleDownIcon, Bars2Icon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Start', href: '#' },
  { name: 'Log In / Sign Up', href: '/auth' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Kontakt', href: '/contact' },
]

const mobileMenuOpen = ref(false)
</script>