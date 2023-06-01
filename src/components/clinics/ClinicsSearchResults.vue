<template>
  <div>
    <section role="list" class="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
      <a v-for="clinic in clinics" :key="clinic.name" href="#" class="col-span-1 flex rounded-md border-appromed hover:ring-2 hover:ring-appromed">
        <img src="https://images.pexels.com/photos/1692693/pexels-photo-1692693.jpeg?auto=compress&cs=tinysrgb&w=600" :class="['flex-shrink-0 flex items-center justify-center aspect-sqaure w-1/3 text-white text-sm font-medium rounded-l-md']" />
        <div class="flex flex-1 items-start justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
          <div class="flex-1 h-full truncate px-4 py-2 text-sm">
            <h2 :href="clinic.href" class="font-semibold text-xl text-gray-900 hover:text-gray-600">
              {{ clinic.name }}
            </h2>
            <span class="flex items-center my-1 gap-2">
              <MapPinIcon class="w-4 h-4 text-appromed" aria-hidden="true" />
              <p class="text-gray-500">{{ 'In der Nähe' }}</p>
            </span>
            <div class="flex flex-wrap mt-auto gap-2">
              <Badge v-for="benefit in clinic.benefits" :label="benefit" />
            </div>
          </div>

          <div class="">
            <p class="p-3 text-xl">{{ Math.round(Math.random() * (100 - 0) + 0) }}%</p>
          </div>
        </div>
      </a>
    </section>
  </div>
</template>

<script setup>
import { MapPinIcon } from '@heroicons/vue/24/outline'



const clinics = [
  { name: 'Klinikum A', benefits: ['Kleines Krankenhaus'] },
  { name: 'Klinikum B', benefits: ['Kleines Krankenhaus'] },
  { name: 'Klinikum C', benefits: ['Weiterbildungsmöglochkeiten'] },
  { name: 'Klinikum D', benefits: ['Weiterbildungsmöglochkeiten'] },
]
</script>