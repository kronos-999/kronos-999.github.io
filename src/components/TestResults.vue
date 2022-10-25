<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-md">
    <ul class="divide-y divide-gray-200" v-if="orgs_to_show.length">
      <li v-for="(org, i) in orgs_to_show" :key="org.address">
        <a :href="org.href" class="block hover:bg-gray-50" v-if="org.match.value > 0">
          <div class="flex items-center px-4 py-4 sm:px-6">
            <div class="min-w-0 flex-1 flex items-center">
              <div class="flex-shrink-0">
                <img class="h-12 w-12 rounded-full" :src="org.imageUrl" alt="" />
              </div>
              <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                <div>
                  <p class="text-sm font-medium text-slate-600 truncate">{{ org.name }}</p>
                  <p class="mt-2 flex items-center text-sm text-gray-500">
                    <LocationMarkerIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span class="truncate">{{ org.address }}</span>
                  </p>
                </div>
                <div class="hidden md:block">
                  <div>
                    <p class="text-sm text-gray-900">
                      Match: {{ org.match.value }}%
                    </p>
                    <p v-if="i === 0" class="mt-2 flex items-center text-sm text-gray-500">
                      <CheckCircleIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" aria-hidden="true" />
                      <span class="font-bold">TOP MATCH</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ChevronRightIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
          </div>
        </a>
      </li>
    </ul>
    <div class="flex w-full justify-center" v-else>
      <h3 class="font-semibold text-2xl">No matches yet</h3>
    </div>
  </div>
</template>

<script setup>
import { CheckCircleIcon, ChevronRightIcon } from '@heroicons/vue/solid'
import { LocationMarkerIcon } from '@heroicons/vue/outline'
import { useStore } from '@/store/index'

const store = useStore()

const user_inputs = store.user_inputs

const calc_work_quality = (inputs) => {
  const { no_of_services, no_of_nurses, kita_close, education_budget, no_of_beds } = inputs
  let work_quality_score = 0.00
  // kita is close - d
  if (kita_close === true) work_quality_score += 0.10
  // education budget - e
  if (education_budget >= 0 && education_budget <= 500)     work_quality_score += 0.02
  if (education_budget > 500 && education_budget <= 1000)   work_quality_score += 0.04
  if (education_budget > 1000 && education_budget <= 1500)  work_quality_score += 0.06
  if (education_budget > 1500 && education_budget <= 2000)  work_quality_score += 0.08
  if (education_budget > 2000 )                             work_quality_score += 0.10
  // no of nurses - c
  const ratio_bed_nurse = no_of_beds / no_of_nurses
  if (ratio_bed_nurse >= 0     && ratio_bed_nurse <= 3.00) work_quality_score += 0.10 * 2
  if (ratio_bed_nurse > 3.00   && ratio_bed_nurse <= 3.50) work_quality_score += 0.09 * 2
  if (ratio_bed_nurse > 3.50   && ratio_bed_nurse <= 4.00) work_quality_score += 0.08 * 2
  if (ratio_bed_nurse > 4.00   && ratio_bed_nurse <= 4.50) work_quality_score += 0.07 * 2
  if (ratio_bed_nurse > 4.50   && ratio_bed_nurse <= 5.00) work_quality_score += 0.06 * 2
  if (ratio_bed_nurse > 5.00   && ratio_bed_nurse <= 5.50) work_quality_score += 0.05 * 2
  if (ratio_bed_nurse > 5.50   && ratio_bed_nurse <= 6.00) work_quality_score += 0.04 * 2
  if (ratio_bed_nurse > 6.00   && ratio_bed_nurse <= 6.50) work_quality_score += 0.03 * 2
  if (ratio_bed_nurse > 6.50   && ratio_bed_nurse <= 7.00) work_quality_score += 0.02 * 2
  if (ratio_bed_nurse > 7.00   && ratio_bed_nurse <= 7.50) work_quality_score += 0.01 * 2
  if (ratio_bed_nurse > 7.50)                              work_quality_score += 0.00 * 2
  // workload - a
  const ratio_bed_service = no_of_beds / no_of_services
  if (ratio_bed_service >= 0     && ratio_bed_service <= 3.00) work_quality_score += 0.10 * 3
  if (ratio_bed_service > 3.00   && ratio_bed_service <= 3.20) work_quality_score += 0.09 * 3
  if (ratio_bed_service > 3.20   && ratio_bed_service <= 3.40) work_quality_score += 0.08 * 3
  if (ratio_bed_service > 3.40   && ratio_bed_service <= 3.60) work_quality_score += 0.07 * 3
  if (ratio_bed_service > 3.60   && ratio_bed_service <= 3.80) work_quality_score += 0.06 * 3
  if (ratio_bed_service > 3.80   && ratio_bed_service <= 4.00) work_quality_score += 0.05 * 3
  if (ratio_bed_service > 4.00   && ratio_bed_service <= 4.20) work_quality_score += 0.04 * 3
  if (ratio_bed_service > 4.20   && ratio_bed_service <= 4.40) work_quality_score += 0.03 * 3
  if (ratio_bed_service > 4.40   && ratio_bed_service <= 4.60) work_quality_score += 0.02 * 3
  if (ratio_bed_service > 4.60)                                work_quality_score += 0.00 * 3
  // number of services - b
  if (no_of_services >= 0 && no_of_services <= 3) work_quality_score += 0.10 * 3
  if (no_of_services === 4 )                      work_quality_score += 0.08 * 3
  if (no_of_services === 5 )                      work_quality_score += 0.06 * 3 
  if (no_of_services === 6 )                      work_quality_score += 0.04 * 3 
  if (no_of_services === 7 )                      work_quality_score += 0.02 * 3 
  if (no_of_services >= 8 )                       work_quality_score += 0.00 * 3

  return Number(work_quality_score)
}

const calc_match = (org) => {
  let match = ((
    org.inputs.work_life       * (user_inputs.work_life       / 5 )
    +
    org.inputs.career          * (user_inputs.career          / 5 )
    +
    org.inputs.work_quality    * (user_inputs.work_quality    / 5 )
  ) * 100).toFixed(2)

  // if (!org.specializations_available.includes(store.location_inputs.specialization) || !org.positions_available.includes(store.location_inputs.position)) match = 0
  // set value of org
  org.match.value = parseFloat(match)
}

let orgs = ref([
  { 
  match: reactive({ value: 0 }),
  name: 'Evangelisches Krankenhaus Wesel',
  address: 'Schermbecker Landstraße 88, 46485 Wesel',
  imageUrl: 'https://picsum.photos/200/' + Math.ceil(Math.random() * 100),
  specializations_available: [1,7,23,27,29,37,43,47,49,51,54,80,81,82,86,87,88,98,118],
  positions_available: [1, 2, 3, 4, 5],
  inputs: {
    work_life: 1,
    career: 1,
    work_quality: calc_work_quality({
      no_of_services: 1,
      no_of_nurses: 95,
      kita_close: true,
      education_budget: 3000,
      no_of_beds: 356
    })
  }
  },
  { 
    match: reactive({ value: 0 }),
    name: 'Johanniter Krankenhaus Oberhausen ',
    address: 'Steinbrinkstraße 96, 46145 Oberhausen',
    imageUrl: 'https://picsum.photos/200/' + Math.ceil(Math.random() * 100),
    specializations_available: [10,16,17,20,54,59,67,78,80,94,100,105,117,120],
    positions_available: [1, 2, 3, 4, 5],
    inputs: {
      work_life: 1,
      career: 1,
      work_quality: calc_work_quality({
        no_of_services: 1,
        no_of_nurses: 64,
        kita_close: true,
        education_budget: 3000,
        no_of_beds: 357
      })
    }
  },
  { 
    match: reactive({ value: 0 }),
    name: 'St. Barbara-Hospital Gladbeck',
    address: 'Barbarastraße 1, 45964 Gladbeck',
    imageUrl: 'https://picsum.photos/200/' + Math.ceil(Math.random() * 100),
    specializations_available: [1,2,4,23,27,32,37,43,59,80,86,93,107,117,118],
    positions_available: [1, 2, 3, 4, 5],
    inputs: {
      work_life: 1,
      career: 1,
      work_quality: calc_work_quality({
        no_of_services: 1,
        no_of_nurses: 83,
        kita_close: true,
        education_budget: 3000,
        no_of_beds: 343
      })
    }
  },
  { 
    match: reactive({ value: 0 }),
    name: 'Agaplesion Evangelisches Krankenhaus Holzminden',
    address: 'Forster Weg 34, 37603 Holzminden',
    imageUrl: 'https://picsum.photos/200/' + Math.ceil(Math.random() * 100),
    specializations_available: [1,3,9,22,27,37,48,59,86,105,117,118,121],
    positions_available: [1, 2, 3, 4, 5],
    inputs: {
      work_life: 1,
      career: 1,
      work_quality: calc_work_quality({
        no_of_services: 1,
        no_of_nurses: 53,
        kita_close: true,
        education_budget: 3000,
        no_of_beds: 183
      })
    }
  },
  { 
    match: reactive({ value: 0 }),
    name: 'Stiftsklinikum PROSELIS, Prosper-Hospital Reckinghausen ',
    address: 'Mühlenstraße 27, 45659 Recklinghausen',
    imageUrl: 'https://picsum.photos/200/' + Math.ceil(Math.random() * 100),
    specializations_available: [1,4,5,8,9,27,29,30,34,37,47,49,51,54,55,59,61,67,68,78,83,85,86,87,99,105,116,117,118,122,123,124],
    positions_available: [1, 2, 3, 4, 5],
    inputs: {
      work_life: 1,
      career: 1,
      work_quality: calc_work_quality({
        no_of_services: 1,
        no_of_nurses: 153,
        kita_close: true,
        education_budget: 3000,
        no_of_beds: 773
      })
    }
  },
  { 
    match: reactive({ value: 0 }),
    name: 'Helios Klinikum Niederberg',
    address: 'Robert-Koch-Straße 2, 42549 Velbert',
    imageUrl: 'https://picsum.photos/200/' + Math.ceil(Math.random() * 100),
    specializations_available: [1,4,10,17,21,23,27,30,34,43,48,51,54,55,59,67,88,86,88,75,99,100,107,117,118,119,122,125],
    positions_available: [1, 2, 3, 4, 5],
    inputs: {
      work_life: 1,
      career: 1,
      work_quality: calc_work_quality({
        no_of_services: 1,
        no_of_nurses: 141,
        kita_close: true,
        education_budget: 3000,
        no_of_beds: 519
      })
    }
  },
  { 
    match: reactive({ value: 0 }),
    name: 'Evangelisches Krankenhaus Düsseldorf ',
    address: 'Kirchfeldstraße 40, 40217 Düsseldorf',
    imageUrl: 'https://picsum.photos/200/' + Math.ceil(Math.random() * 100),
    specializations_available: [1,4,23,24,27,29,37,43,47,49,51,54,55,59,60,68,77,85,86,87,105,107,118,125],
    positions_available: [1, 2, 3, 4, 5],
    inputs: {
      work_life: 1,
      career: 1,
      work_quality: calc_work_quality({
        no_of_services: 1,
        no_of_nurses: 168,
        kita_close: true,
        education_budget: 3000,
        no_of_beds: 513
      })
    }
  },
  { 
    match: reactive({ value: 0 }),
    name: 'Paracelsus-Klinik Marl, Knappschaftsklinikum ',
    address: 'Lipper Weg 11, 45770 Marl',
    imageUrl: 'https://picsum.photos/200/' + Math.ceil(Math.random() * 100),
    specializations_available: [1,9,23,27,29,30,34,48,49,55,59,65,68,80,86,87,99,107,116,122],
    positions_available: [1, 2, 3, 4, 5],
    inputs: {
      work_life: 1,
      career: 1,
      work_quality: calc_work_quality({
        no_of_services: 1,
        no_of_nurses: 195,
        kita_close: true,
        education_budget: 3000,
        no_of_beds: 483
      })
    }
  },
  { 
    match: reactive({ value: 0 }),
    name: 'Knappschaftskrankenhaus Recklinghausen, Klinikum Vest',
    address: 'Dorstener Str. 151, 45657 Recklinghausen',
    imageUrl: 'https://picsum.photos/200/' + Math.ceil(Math.random() * 100),
    specializations_available: [1,4,5,7,9,24,29,30,32,39,43,47,49,51,59,64,65,68,79,80,83,84,88,98,105,107,109,110,111,116,118,126],
    positions_available: [1, 2, 3, 4, 5],
    inputs: {
      work_life: 1,
      career: 1,
      work_quality: calc_work_quality({
        no_of_services: 1,
        no_of_nurses: 68,
        kita_close: true,
        education_budget: 3000,
        no_of_beds: 230
      })
    }
  },
  { 
    match: reactive({ value: 0 }),
    name: 'REGIOMED Klinikum Hildburghausen ',
    address: ' Schleusinger Str. 17, 98646 Hildburghausen',
    imageUrl: 'https://picsum.photos/200/' + Math.ceil(Math.random() * 100),
    specializations_available: [1,9,23,30,34,43,48,49,51,55,59,86,116,118],
    positions_available: [1, 2, 3, 4, 5],
    inputs: {
      work_life: 1,
      career: 1,
      work_quality: calc_work_quality({
        no_of_services: 1,
        no_of_nurses: 41,
        kita_close: true,
        education_budget: 3000,
        no_of_beds: 283
      })
    }
  },
])

const activator = computed(() => store.activator)
const orgs_to_show = ref([])
watch(activator, (b) => {
  console.log('go')
  orgs.value.forEach(org => calc_match(org))
  orgs_to_show.value = orgs.value.filter((x) => x.match.value > 0).sort((a,b) => parseFloat(a.match.value) >= parseFloat(b.match.value) ? -1 : 1)
  console.log(orgs_to_show.value)
});
</script>