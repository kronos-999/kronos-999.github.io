<template>
  <div class="bg-white min-h-screen" id="faqs">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto divide-y divide-appromed">
        <h2 class="text-center text-3xl font-extrabold text-appromed sm:text-4xl">
          FAQs
        </h2>
        <dl class="mt-6 space-y-6 divide-y divide-appromed">
          <Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="pt-6" v-slot="{ open }">
            <dt class="text-lg">
              <DisclosureButton class="text-left w-full flex justify-between items-start text-appromed">
                <span class="font-medium text-appromed">
                  {{ faq.question }}
                </span>
                <span class="ml-6 h-7 flex items-center">
                  <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <component :is="faq?.bullet_points == true ? 'li' : 'p'" v-for="(answer, i) in faq.answers" :key="i"
                :class="[faq?.bullet_points !== true ? 'my-3 ' : '', 'text-base text-appromed']">
                {{ answer }}
              </component>
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
const open = ref(false)

const props = defineProps({
  faqs: { type: Array, required: true }
})

</script>