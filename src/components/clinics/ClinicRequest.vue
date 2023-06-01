<template>
  <div id="clinic_form" class="bg-white dark:bg-appromed-dark">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="relative bg-white dark:bg-appromed-dark">
        <h2 class="sr-only">Beantragen Sie hier Ihre Verifizierung</h2>

        <div class="grid grid-cols-1 lg:grid-cols-3">
          <!-- Contact information -->
          <div class="relative overflow-hidden py-10 px-6 bg-appromed opacity-80 sm:px-10 xl:p-12">
            <div class="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
              <svg class="absolute inset-0 w-full h-full" width="343" height="388" viewBox="0 0 343 388" fill="none"
                preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <path d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z" fill="url(#linear1)"
                  fill-opacity=".1" />
                <defs>
                  <linearGradient id="linear1" x1="254.553" y1="107.554" x2="961.66" y2="814.66"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#fff" />
                    <stop offset="1" stop-color="#fff" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
              aria-hidden="true">
              <svg class="absolute inset-0 w-full h-full" width="359" height="339" viewBox="0 0 359 339" fill="none"
                preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <path d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z" fill="url(#linear2)"
                  fill-opacity=".1" />
                <defs>
                  <linearGradient id="linear2" x1="192.553" y1="28.553" x2="899.66" y2="735.66"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#fff" />
                    <stop offset="1" stop-color="#fff" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block" aria-hidden="true">
              <svg class="absolute inset-0 w-full h-full" width="160" height="678" viewBox="0 0 160 678" fill="none"
                preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <path d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z" fill="url(#linear3)"
                  fill-opacity=".1" />
                <defs>
                  <linearGradient id="linear3" x1="192.553" y1="325.553" x2="899.66" y2="1032.66"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#fff" />
                    <stop offset="1" stop-color="#fff" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3 class="text-xl font-medium text-white">Bei Fragen oder Anmerkungen stehen wir Ihnen zur Verfügung.</h3>
            <dl class="mt-8 space-y-6">
              <dd class="flex text-base text-slate-50">
                <PhoneIcon class="flex-shrink-0 w-6 h-6 text-slate-200" aria-hidden="true" />
                <span class="ml-3">+49 (0) 33112 313 12</span>
              </dd>
              <dd class="flex text-base text-slate-50">
                <EnvelopeIcon class="flex-shrink-0 w-6 h-6 text-slate-200" aria-hidden="true" />
                <span class="ml-3">support@medching.com</span>
              </dd>
              <dd class="flex text-base text-slate-50">
                <ChatBubbleBottomCenterTextIcon class="flex-shrink-0 w-6 h-6 text-slate-200" aria-hidden="true" />
                <span class="ml-3">Chat (Mo.-Fr. 10:00-17:00) </span>
              </dd>
            </dl>
          </div>

          <!-- Contact form -->
          <form class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12" @submit.prevent="request_verification">
            <h3 class="text-2xl font-medium text-appromed-dark dark:text-gray-100">Beantragen Sie hier Ihre Verifizierung
            </h3>
            <div class="w-full flex gap-2">
              <h2 class="text-xs font-light text-appromed-dark dark:text-gray-100">Bereits registriert? <a href="/auth"
                  class="font-bold">Hier geht es zum Log In</a></h2>
            </div>
            <div class="mt-6 grid grid-cols-1 gap-y-6 lg:grid-cols-4 sm:gap-x-8">

              <div class="col-span-full">
                <label for="clinic_form.name"
                  class="block text-sm font-medium text-appromed-dark dark:text-gray-100">{{ t('_31') }}</label>
                <div class="mt-1">
                  <input v-model="state.clinic_form.name" required type="text" name="clinic_form.name"
                    id="clinic_form.name" autocomplete="clinic_form.name"
                    class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-slate-500 focus:border-slate-500 border-appromed rounded-md" />
                </div>
              </div>

              <div class="col-span-2 lg:col-span-full">
                <div class="flex justify-between">
                  <label for="clinic_form.address"
                    class="block text-sm font-medium text-appromed-dark dark:text-gray-100">{{ t('_33') }}</label>
                </div>
                <div class="mt-1">
                  <input v-model="state.clinic_form.address" required id="clinic_form.address" name="clinic_form.address"
                    type="text" autocomplete="clinic_form.address"
                    class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-slate-500 focus:border-slate-500 border-appromed rounded-md" />
                </div>
              </div>


              <div class="col-span-2">
                <div class="flex justify-between">
                  <label for="clinic_form.leader"
                    class="block text-sm font-medium text-appromed-dark dark:text-gray-100">Ansprechpartner</label>
                </div>
                <div class="mt-1">
                  <input v-model="state.clinic_form.leader" required name="clinic_form.leader" id="clinic_form.leader"
                    type="text"
                    class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-slate-500 focus:border-slate-500 border-appromed rounded-md"
                    aria-describedby="phone-optional" />
                </div>
              </div>

              <div class="col-span-2">
                <div class="flex justify-between">
                  <label for="clinic_form.email"
                    class="block text-sm font-medium text-appromed-dark dark:text-gray-100">Email</label>
                </div>
                <div class="mt-1">
                  <input v-model="state.clinic_form.email" required name="clinic_form.email" id="clinic_form.email"
                    type="email"
                    class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-slate-500 focus:border-slate-500 border-appromed rounded-md"
                    aria-describedby="phone-optional" />
                </div>
              </div>

              <div class="col-span-2">
                <div class="flex justify-between">
                  <label for="clinic_form.phone"
                    class="block text-sm font-medium text-appromed-dark dark:text-gray-100">Telefon</label>
                </div>
                <div class="mt-1">
                  <input v-model="state.clinic_form.phone" required name="clinic_form.phone" id="clinic_form.phone"
                    type="number"
                    class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-slate-500 focus:border-slate-500 border-appromed rounded-md"
                    aria-describedby="phone-optional" />
                </div>
              </div>

              <div class="col-span-2">
                <div class="flex justify-between">
                  <label for="clinic_form.department"
                    class="block text-sm font-medium text-appromed-dark dark:text-gray-100">Abteilung</label>
                  <label for="clinic_form.department"
                    class="block text-sm font-medium text-appromed dark:text-gray-100">Optional</label>
                </div>
                <div class="mt-1">
                  <input v-model="state.clinic_form.department" name="clinic_form.department" id="clinic_form.department"
                    type="text"
                    class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-slate-500 focus:border-slate-500 border-appromed rounded-md"
                    aria-describedby="phone-optional" />
                </div>
              </div>

              <div class="col-span-full flex">
                <button v-if="!sent" @click="submit" :disabled="agreed_to_terms == false"
                  class="disabled:cursor-not-allowed disabled:bg-gray-700 disabled:opacity-20 mr-4 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-appromed-dark hover:bg-appromed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 sm:w-auto"
                  type="submit">
                  Verifizierung beantragen
                </button>
                <Switch v-model="agreed_to_terms" label="Einverstanden mit den" href_label="AGBs" href="" />
              </div>
            </div>
          </form>
        </div>
        <SuccessPopup />
      </div>
    </div>
  </div>
</template>

<script setup>
import { t } from '~/i18n'
import { EnvelopeIcon, PhoneIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/vue/24/outline'
import { state } from '@/store/global'
import { fireAPI } from '@/hooks/fireAPI'

const router = useRouter()

const agreed_to_terms = ref(false)
const sent = ref(false)
const request_verification = async () => {
  const [_, err] = await fireAPI('/api/v2/medching/clinics/request', state.clinic_form, false)

  if (err) {
    console.log(err)
    alert('ERROR')
    if (err.code == 403) return router.push('/')
  }
  sent.value = true
  state.clinic_form.submitted = true
}
</script>
