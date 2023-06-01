<template>
  <div id="doc_form" class="bg-white dark:bg-appromed-dark">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">

      <div class="bg-white">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div class="text-center">
            <h2 class="mt-1 text-4xl font-medium text-appromed-dark sm:tracking-tight">Die <span class="font-semibold italic">erste</span> Plattform, <br/> auf der Ärzte und Kliniken zusammenfinden</h2>
            <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500 text-justify font-normal">
              Medching erlaubt es Ärzten, auf sie persönlich zugeschnittene Kliniken und Stellen zu finden, während Kliniken aus einem
              stetig wachsenden Pool interessierter Kandidaten wählen können. Unser speziell entwickelter Algorithmus
              findet Übereinstimmungen anhand von individuellen Präferenzen der Ärzte und Kliniken. Tragen Sie einfach
              Ihre Wünsche in die Maske ein und lassen Sie sich Ihre <span class="italic">Medches</span> anzeigen.
            </p>
          </div>
        </div>
      </div>

      <div class="relative bg-white dark:bg-appromed-dark">
        <h2 class="sr-only">{{ t('_19') }}</h2>
        <form class="grid grid-cols-1 lg:grid-cols-3" @submit.prevent="submit()">
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
            <h3 class="text-xl font-medium text-white">{{ t('_20') }}</h3>
            <p class="mt-6 text-base text-slate-50 max-w-3xl">{{ t('_21') }}</p>
            <dl class="mt-8 space-y-6">
              <dd class="flex text-base text-slate-50">
                <PhoneIcon class="flex-shrink-0 w-6 h-6 text-slate-200" aria-hidden="true" />
                <span class="ml-3">+49 (0) 33112 313 12</span>
              </dd>
              <dd class="flex text-base text-slate-50">
                <EnvelopeIcon class="flex-shrink-0 w-6 h-6 text-slate-200" aria-hidden="true" />
                <span class="ml-3">support@medching.com</span>
              </dd>
            </dl>
          </div>

          <!-- Contact form -->
          <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
            <h3 class="text-2xl font-medium text-appromed-dark dark:text-gray-100">Find your <span class="italic">Medch</span></h3>
            <div class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label for="first-name"
                  class="block text-sm font-medium text-appromed-dark dark:text-gray-100">{{ t('_05') }}</label>
                <div class="mt-1">
                  <input v-model="state.form_inputs.first_name" required type="text" name="first-name" id="first-name"
                    autocomplete="given-name"
                    class="py-3 px-4 block w-full shadow-sm text-gray-500 focus:ring-slate-500 focus:border-slate-500 border-appromed rounded-md" />
                </div>
              </div>
              <div>
                <label for="last-name"
                  class="block text-sm font-medium text-appromed-dark dark:text-gray-100">{{ t('_06') }}</label>
                <div class="mt-1">
                  <input v-model="state.form_inputs.last_name" required type="text" name="last-name" id="last-name"
                    autocomplete="family-name"
                    class="py-3 px-4 block w-full shadow-sm text-gray-500 focus:ring-slate-500 focus:border-slate-500 border-appromed rounded-md" />
                </div>
              </div>
              <div>
                <div class="flex justify-between">
                  <label for="email"
                    class="block text-sm font-medium text-appromed-dark dark:text-gray-100">{{ t('_07') }}</label>
                </div>
                <div class="mt-1">
                  <input v-model="state.form_inputs.email" required id="email" name="email" type="email"
                    autocomplete="email"
                    class="py-3 px-4 block w-full shadow-sm text-gray-500 focus:ring-slate-500 focus:border-slate-500 border-appromed rounded-md" />
                </div>
              </div>
              <div>
                <div class="flex justify-between">
                  <label for="phone"
                    class="block text-sm font-medium text-appromed-dark dark:text-gray-100">{{ t('_08') }}</label>
                </div>
                <div class="mt-1">
                  <input v-model="state.form_inputs.phone" required name="phone" id="phone" type="number"
                    class="py-3 px-4 block w-full shadow-sm text-gray-500 focus:ring-slate-500 focus:border-slate-500 border-appromed rounded-md"
                    aria-describedby="phone-optional" />
                </div>
              </div>

              <div class="col-span-full" v-if="state.form_inputs.email && state.form_inputs.phone">
                <div class="flex justify-between flex-col lg:flex-row">
                  <label for="password"
                    class="block text-sm font-medium text-appromed-dark dark:text-gray-100">{{ t('_09') }}</label>
                  <label for="password" class="block text-xs font-xs text-appromed-dark">Vergeben Sie ein Passwort, um
                    unbegrenzte Matches anzeigen zu lassen (Optional)</label>
                </div>
                <div class="mt-1">
                  <input v-model="password" name="password" id="password" type="password"
                    class="py-3 px-4 block w-full shadow-sm text-gray-500 focus:ring-slate-500 focus:border-slate-500 border-appromed rounded-md"
                    aria-describedby="password" />
                </div>
              </div>
              <div class="col-span-full" v-if="state.form_inputs.email && state.form_inputs.phone && password.length">
                <div class="flex justify-between">
                  <label for="password_repeat"
                    class="block text-sm font-medium text-appromed-dark dark:text-gray-100">{{ t('_10') }}</label>
                </div>
                <div class="mt-1">
                  <input v-model="password_repeat" name="password_repeat" id="password_repeat" type="password"
                    class="py-3 px-4 block w-full shadow-sm text-gray-500 focus:ring-slate-500 focus:border-slate-500 border-appromed rounded-md"
                    aria-describedby="password" />
                </div>
              </div>


              <div class="sm:col-span-2">
                <label class="block text-sm font-medium text-appromed-dark dark:text-gray-100">{{ t('_11') }}</label>
                <p v-if="state.location_inputs.city">
                  {{ state.location_inputs.city }}
                </p>
                <Combobox v-show="tracktable['city'] == true"
                  @change="({ name }) => set_location_input('city', name, 'position')" placeholder="Search City..."
                  :options="state.cities" />
              </div>
              <div class="sm:col-span-2">
                <label class="block text-sm font-medium text-appromed-dark dark:text-gray-100">{{ t('_12') }}</label>
                <p v-if="state.location_inputs.position">
                  {{ state.location_inputs.position.name }}
                </p>
                <Combobox v-show="tracktable['position'] == true"
                  @change="(v) => set_location_input('position', v, 'specialization')" placeholder="Search Position..."
                  :options="state.positions" />
              </div>
              <div class="sm:col-span-2">
                <label class="block text-sm font-medium text-appromed-dark dark:text-gray-100">{{ t('_13') }}</label>
                <p v-if="state.location_inputs.specialization">
                  {{ state.location_inputs.specialization.name }}
                </p>
                <Combobox v-show="tracktable['specialization'] == true"
                  @change="(v) => set_location_input('specialization', v, 'radius')" :show_3_suggestions="false"
                  :multiple="true" placeholder="Search Specializations..." :options="specializations" />
              </div>

              <div class="sm:col-span-2">
                <label class="block text-sm font-medium text-appromed-dark dark:text-gray-100">{{ t('_14') }}</label>
                <p v-if="state.location_inputs.radius">
                  {{ state.location_inputs.radius.name }}
                </p>
                <Combobox v-show="tracktable['radius'] == true" @change="(v) => set_location_input('radius', v)"
                  placeholder="Set Radius..." :options="radius_options" />
              </div>


              <div class="sm:col-span-2 flex flex-col">
                <label class="block text-sm font-medium text-appromed-dark dark:text-gray-100">{{ t('_15') }}</label>
                <Stars :readonly="true" name="xxx" :modelValue="max_stars - stars_given" :max="max_stars" />
                <button type="button" class="flex justify-center bg-appromed-dark text-white px-3 py-2 my-2 rounded"
                  @click="reset">{{ t('_22') }}</button>
              </div>
              <div class="sm:col-span-2" v-for="p in preferences">
                <span class="flex">
                  <label class="text-sm font-medium text-appromed-dark dark:text-gray-100">{{ p.name }}</label>
                </span>
                <span class="text-sm font-small text-appromed-dark dark:text-gray-100">({{ p.descr }})</span>
                <br />
                <Stars :name="p.name" :max="max_stars" :readonly="stars_given === max_stars"
                  @input="(v) => v + stars_given <= max_stars ? state.user_inputs[p.field] = v : state.user_inputs[p.field] = (max_stars - stars_given)"
                  :modelValue="state.user_inputs[p.field]" />
              </div>
              <div class="sm:col-span-2">
                <div class="flex justify-between">
                  <label for="message"
                    class="block text-sm font-medium text-appromed-dark dark:text-gray-100">{{ t('_16') }}</label>
                  <div class="flex gap-x-3">
                    <span id="message-max" class="text-sm text-appromed">{{ t('_17') }}</span>
                    <span id="message-max" class="text-sm text-appromed">{{ t('_18') }}</span>
                  </div>
                </div>
                <div class="mt-1">
                  <textarea v-model="state.form_inputs.message" id="message"
                    placeholder="Nennen Sie uns gerne Ihre weiteren Vorstellungen(biepsielsweise bezüglich des Gehalts, der Lage, Arbeitszeiten, Weiterbildungsmöglichkeiten usw.)"
                    name="message" rows="4"
                    class="py-3 px-4 block w-full shadow-sm text-gray-500 focus:ring-slate-500 focus:border-slate-500 border border-appromed rounded-md"
                    aria-describedby="message-max" />
                </div>
              </div>

              <div class="col-span-1 flex flex-col gap-y-1">
                <span class="text-sm">{{ t('_23') }}</span>
                <button type="submit" :disabled="need_more_input == true"
                  class="disabled:cursor-not-allowed disabled:bg-gray-800 disabled:opacity-20 mr-4 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-appromed hover:bg-appromed-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 sm:w-auto">
                  <svg class="h-4 w-auto fill-white" xmlns="http://www.w3.org/2000/svg" data-name="Ebene 1"
                    viewBox="0.5 321.34 367.08 48.09">
                    <path
                      d="M367.45 346.48c.09.85.13 1.66.13 2.48 0 11.1-7.61 20.47-20.7 20.47-12.39 0-22.11-9.49-22.11-21.98s9.6-21.98 21.96-21.98c7.76 0 14.24 3.68 18.24 9.69l-5.13 3.58c-3.52-4.72-7.49-7.01-13.11-7.01-8.78 0-15.07 6.6-15.07 15.72s6.42 15.73 15.22 15.73c8.21 0 12.87-4.94 13.72-10.73h-14.72v-5.97h21.57Zm-54.36-20.38v42.7h-6.67l-25.94-32.23v32.23h-6.61v-42.7h6.61l26 32.55V326.1h6.61zm-44.42-3.18v2.47l-5.98 1.59-3.3-.88-6.61 7.76v3.89l-3.3-3.89v-3.88l3.3-3.88 6.61-3.88 3.3-.88 5.98 1.58zm-5.98 30.36v3.88l-3.3 3.88-6.61 3.88-6.6 3.88 6.6-7.76 6.61-7.77v-3.88l3.3 3.89zm0-15.54v3.89l-3.3 3.88-6.61 3.88v3.89l-3.3-3.89v-3.88l3.3-3.88 6.61-3.88v-3.89l3.3 3.88z"
                      class="cls-1"></path>
                    <path
                      d="M259.39 361.04v7.76h-6.61v-3.88l6.61-3.88zM238.3 326.1v42.7h-6.61V350h-23.14v18.8h-6.61v-42.7h6.61v17.92h23.14V326.1h6.61zm-51.88 29.53 4.94 3.43c-4.03 6.54-10.95 10.37-18.78 10.37-12.39 0-22.11-9.49-22.11-21.98s9.6-21.98 21.95-21.98c7.77 0 14.66 3.8 18.78 10.41l-5.13 3.58c-3.43-5.15-8.02-7.73-13.65-7.73-8.77 0-15.03 6.6-15.03 15.72s6.39 15.73 15.19 15.73c5.66 0 10.5-2.65 13.84-7.55Zm-66.82-29.5c12.68 0 21.95 9.12 21.95 21.35s-9.27 21.32-21.95 21.32h-17.17v-42.67h17.17Zm15.04 21.35c0-8.61-6.04-15.44-15.13-15.44h-10.47v30.79h10.47c9.09 0 15.13-6.7 15.13-15.35ZM90.75 362.8v6h-30.6v-42.7h29.94v6.01H66.75v11.76h20.03v6H66.75v12.93h24zm-45.09-36.7v42.7h-6.67v-30.59l-13.55 27.58h-4.72L7.17 338.21v30.59H.5v-42.7h7.83l14.75 30.38 14.78-30.38h7.8z"
                      class="cls-1"></path>
                  </svg>
                </button>
              </div>
              <div class="col-span-1 flex items-end">
                <Switch v-model="agreed_to_terms" label="Einverstanden mit den AGBs" href_label="AGBs" href="" />
              </div>

            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { t } from '~/i18n'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'
import { state } from '@/store/global';


const active_combobox = ref(undefined)
const max_stars = ref(5)
const stars_given = computed(() => Object.values(state.user_inputs).reduce((a, b) => a + b), 0)
const agreed_to_terms = ref(false)
const need_more_input = computed(() => agreed_to_terms.value == false || !state.form_inputs.first_name.length || !state.form_inputs.last_name.length || !state.form_inputs.email.length);

const password = ref('')
const password_repeat = ref('')

const router = useRouter()

const tracktable = reactive({
  'city': true,
  'position': false,
  'specialization': false,
  'radius': false,
})

const set_location_input = (field, value, next) => {
  state.location_inputs[field] = value // set data in store of field we just updated
  tracktable[field] = false // deactivate the field we just updated
  if (next) tracktable[next] = true // activated next field if available
}

const reset = () => {

  // deactivate all fields
  Object.keys(tracktable).forEach(key => {
    tracktable[key] = false
  })

  tracktable['city'] = true // only activate first one
  // reset values
  state.location_inputs = {
    city: null,
    state: null,
    radius: null,
    specialization: null,
    position: null,
  }

  state.user_inputs = {
    work_life: 0,
    career: 0,
    work_quality: 0,
  }
}

const submit = () => {
  state.past_searches.push({
    'id': Math.floor(Math.random() * 5000),
    'form_inputs': state.form_inputs,
    'location_inputs': state.location_inputs,
    'user_inputs': state.user_inputs,
  })
  if (state.form_inputs.email.length && password.value.length && password_repeat.value.length && (password.value === password_repeat.value)) {
    const email_exists = state.docs.find((x) => x.email === state.form_inputs.email)
    if (!email_exists) {
      state.docs.push({
        id: state.docs.length,
        firstname: state.form_inputs.first_name,
        lastname: state.form_inputs.last_name,
        email: state.form_inputs.email,
        password: password.value,
        important: false, // TODO: SAVE IN DB AS DEFAULT FALSE
      })
      return router.push('/auth')
    } else {
      alert('Email exists!')
    }
  }
  state.activator = !state.activator
}


const radius_options = [
  { id: 1, name: '<50km' },
  { id: 2, name: '<100km' },
  { id: 3, name: '<200km' },
  { id: 4, name: 'Deutschlandweit' }]

const preferences = [
  { field: 'work_life', name: "Work-Life-Balance", descr: 'Vereinbarkeit von Arbeits- und Privatleben' },
  { field: 'career', name: "Karrieremöglichkeiten", descr: 'Aufstiegschancen und Attraktivität der finanziellen Aspekte' },
  { field: 'work_quality', name: "Arbeitsqualität", descr: 'Qualität der Arbeitsbedingungen' }]
const specializations = [
  { id: 1, name: 'Allgemeine Chirurgie ' },
  { id: 2, name: 'Allgemeine Chirurgie  - Intensivmedizin ' },
  { id: 3, name: 'Allgemeine Chirurgie  - Schwerpunkt Abdominal- und Gefäßchirurgie ' },
  { id: 4, name: 'Allgemeine Chirurgie - Gefäßchirurgie' },
  { id: 5, name: 'Allgemeine Chirurgie - Handchirurgie' },
  { id: 6, name: 'Allgemeine Chirurgie - Kinderchirurgie' },
  { id: 7, name: 'Allgemeine Chirurgie - Plastische Chirurgie' },
  { id: 8, name: 'Allgemeine Chirurgie - Thoraxchirurgie' },
  { id: 9, name: 'Allgemeine Chirurgie - Unfallchirurgie' },
  { id: 10, name: 'Allgemeine Psychiatrie' },
  { id: 11, name: 'Allgemeine Psychiatrie - Nachtklinik ' },
  { id: 12, name: 'Allgemeine Psychiatrie - Forensische Behandlung' },
  { id: 13, name: 'Allgemeine Psychiatrie - Gerontopsychiatrie' },
  { id: 14, name: 'Allgemeine Psychiatrie - Gerontopsychiatrie, Tagesklinik' },
  { id: 15, name: 'Allgemeine Psychiatrie Kinder- und Jugendpsychiatrie' },
  { id: 16, name: 'Allgemeine Psychiatrie - Neurologie' },
  { id: 17, name: 'Allgemeine Psychiatrie - Psychosomatik/Psychotherapie' },
  { id: 18, name: 'Allgemeine Psychiatrie - Schwerpunkt Suchtbehandlung ' },
  { id: 19, name: 'Allgemeine Psychiatrie - Schwerpunkt Suchtbehandlung, Tagesklinik ' },
  { id: 20, name: 'Allgemeine Psychiatrie, Tagesklinik ' },
  { id: 21, name: 'Angiologie' },
  { id: 22, name: 'Augenheilkunde ' },
  { id: 23, name: 'Chirurgie - Orthopädie ' },
  { id: 24, name: 'Dermatologie' },
  { id: 25, name: 'Dermatologie - Tagesklinik ' },
  { id: 26, name: 'Endokriminologie' },
  { id: 27, name: 'Frauennheilkunde und Geburtshilfe' },
  { id: 28, name: 'Frauenheilkunde - Endokriminologie ' },
  { id: 29, name: 'Frauenheilkunde - Hämatologie und internistische Onkologie ' },
  { id: 30, name: 'Gastroenterologie ' },
  { id: 31, name: 'Gastroenterologie - Pädiatrie ' },
  { id: 32, name: 'Gefäßchirurgie ' },
  { id: 34, name: 'Geriatrie' },
  { id: 35, name: 'Geriatrie, Nachtklinik ' },
  { id: 36, name: 'Geriatrie, Tagesklinik ' },
  { id: 37, name: 'Hals-Nasen-Ohrenheilkunde ' },
  { id: 38, name: 'Hämatologie und internistische Onkologie - Pädiatrie ' },
  { id: 39, name: 'Hämatologie und internistische Onkologie - Strahlenheilkunde ' },
  { id: 40, name: 'Heiltherapeutische Abteilung ' },
  { id: 41, name: 'Herzchirurgie - Intensivmedizin ' },
  { id: 42, name: 'Herzchirurgie und internistische Onkologie ' },
  { id: 43, name: 'Innere Medizin' },
  { id: 44, name: 'Innere Medizin - Coloproktologie' },
  { id: 45, name: 'Innere Medizin - Diabetes' },
  { id: 46, name: 'Innere Medizin - Endokrinologie ' },
  { id: 47, name: 'Innere Medizin - Gastroenterologie ' },
  { id: 48, name: 'Innere Medizin - Geriatrie' },
  { id: 49, name: 'Innere Medizin - Hämatologie und internistische Onkologie ' },
  { id: 50, name: 'Innere Medizin - Infektionskrankheiten ' },
  { id: 51, name: 'Innere Medzin - Kardiologie ' },
  { id: 52, name: 'Innere Medzin - Lungen- und Brochialheilkunde' },
  { id: 53, name: 'Innere Medizin - Naturheilkunde ' },
  { id: 54, name: 'Innere Medizin - Nephrologie' },
  { id: 55, name: 'Innere Medzin - Pneumologie ' },
  { id: 56, name: 'Innere Medizin - Rheumatologie ' },
  { id: 57, name: 'Innere Medizin - Schlaganfallpatienten ' },
  { id: 58, name: 'Innere Medizin - Tumorforschung ' },
  { id: 59, name: 'Intensivmedizin, Anästhesie' },
  { id: 60, name: 'Intensivmedizin Orthopädie - Reumatologie ' },
  { id: 61, name: 'Intensivmedizin - Chirurgie ' },
  { id: 62, name: 'Intensivmedizin - Herzchirurgie ' },
  { id: 63, name: 'Intensivmedizin - Innere Medizin ' },
  { id: 64, name: 'Intensivmedizin - Neurochirurgie ' },
  { id: 65, name: 'Intensivmedizin - Neurologie ' },
  { id: 66, name: 'Intensivmedizin - Pädiatrie' },
  { id: 67, name: 'Intensivmedizin - Urologie' },
  { id: 68, name: 'Kardiologie' },
  { id: 69, name: 'Kinder- und Jugendpsychiatrie' },
  { id: 70, name: 'Kinder- und Jugendpsychiatrie, Nachtklinik' },
  { id: 71, name: 'Kinder- und Jugendpsychiatrie, Tagesklinik ' },
  { id: 72, name: 'Kinderchirurgie ' },
  { id: 73, name: 'Kinderkardiologie ' },
  { id: 74, name: 'Kinderkardiologie - Intensivmedizin ' },
  { id: 75, name: 'Langzeitbereich Kinder ' },
  { id: 76, name: 'Lungen- und Brochialheilkunde ' },
  { id: 77, name: 'Neonatologie - Früh- und Neugeborenmedizin' },
  { id: 78, name: 'Nephrologie' },
  { id: 79, name: 'Neurochirurgie' },
  { id: 80, name: 'Neurologie' },
  { id: 81, name: 'Neurologie - Pädiatrie' },
  { id: 82, name: 'Neurologie - Schlaganfallpatienten ' },
  { id: 83, name: 'Nuklearmedizin ' },
  { id: 84, name: 'Nuklearmedizin - Strahlenheilkunde ' },
  { id: 85, name: 'Operative Intensivmedzin - Chirurgie ' },
  { id: 86, name: 'Orthopädie - Chirurgie ' },
  { id: 87, name: 'Senologie und Brustzentrum' },
  { id: 88, name: 'Palliativmedizin ' },
  { id: 89, name: 'Pädiatrie - Endokrinologie ' },
  { id: 90, name: 'Pädiatrie - Gastroenterologie' },
  { id: 91, name: 'Pädiatrie - Hämatologie und internistische Onkologie ' },
  { id: 92, name: 'Pädiatrie - Kinderkardiologie' },
  { id: 93, name: 'Pädiatrie - Kinderneurologie ' },
  { id: 94, name: 'Pädiatrie - Lungen- und Bronchialheilkunde ' },
  { id: 95, name: 'Pädiatrie - Neonatologie' },
  { id: 96, name: 'Pädiatrie - Nephrologie' },
  { id: 97, name: 'Pädiatrie - Rheumatologie' },
  { id: 98, name: 'Plastische Chirurgie' },
  { id: 99, name: 'Pneumologie' },
  { id: 100, name: 'Psychosomatik - Psychotherapie' },
  { id: 101, name: 'Psychosomatik - Psychotherapie, Nachtklinik' },
  { id: 102, name: 'Psychosomatik - Psychotherapie, Tagesklinik' },
  { id: 103, name: 'Psychosotamik - Kinder- und Jugendpsychosomatik' },
  { id: 104, name: 'Pädiatrie' },
  { id: 105, name: 'Radiologie' },
  { id: 106, name: 'Pheumatologie' },
  { id: 107, name: 'Schmerztherapie' },
  { id: 108, name: 'Sonstige Fachabteilung ' },
  { id: 109, name: 'Strahlenheilkunde' },
  { id: 110, name: 'Strahlenheilkunde - Hämatologie und internistische Onkologie' },
  { id: 111, name: 'Strahlenheilkunde - Radiologie ' },
  { id: 112, name: 'Suchtmedizin ' },
  { id: 113, name: 'Thoraxchirurgie ' },
  { id: 114, name: 'Thoraxchirurgie - Intensivmedizin ' },
  { id: 115, name: 'Thoraxchirurgie - Herzchirurgie ' },
  { id: 116, name: 'Unfallchirurgie' },
  { id: 117, name: 'Urologie' },
  { id: 118, name: 'Viszeralchirurgie' },
  { id: 119, name: 'Wirbelsäulenchirurgie' },
  { id: 120, name: 'Zahn- und Kieferheilkunde - Mund- und Kieferchirurgie ' },
  { id: 121, name: 'Physiotherapie, Ergotherapie ' },
  { id: 122, name: 'Rehabilitätion' },
  { id: 123, name: 'Kopf- und Halschirurgie' },
  { id: 124, name: 'Koloproktologie' },
  { id: 125, name: 'Kinder- und Jugendmedizin' },
  { id: 126, name: 'Allergologie' }]

</script>
