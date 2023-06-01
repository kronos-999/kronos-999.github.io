<template>
  <TransitionRoot as="template" :show="state.verified_slide_over.open == true && !!state.verified_slide_over.clinic_form">
    <Dialog as="div" static class="fixed inset-0 overflow-hidden" @close="state.verified_slide_over.open = false"
      :open="state.verified_slide_over.open == true">
      <div class="absolute inset-0 overflow-hidden">
        <DialogOverlay class="absolute inset-0" />

        <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
          <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700"
            enter-from="translate-x-full" enter-to="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0"
            leave-to="translate-x-full">
            <div class="w-screen max-w-2xl">
              <div class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                <div class="px-4 py-6 sm:px-6">
                  <div class="flex items-start justify-between">
                    <DialogTitle class="text-lg font-medium text-appromed">
                      Bearbeiten
                    </DialogTitle>
                    <div class="ml-3 h-7 flex items-center">
                      <button
                        class="bg-white rounded-md text-appromed-light hover:text-appromed focus:ring-2 focus:ring-appromed"
                        @click="state.verified_slide_over.open = false">
                        <span class="sr-only">Close panel</span>
                        <XCircleIcon class="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
                <!-- Main -->
                <div class="divide-y divide-appromed">
                  <div class="pb-6">
                    <div class="mt-12 flow-root px-4 sm:-mt-8 sm:flex sm:items-end sm:px-6 lg:-mt-15">
                      <div class="mt-12 sm:ml-6 sm:flex-1">
                        <div>
                          <div class="flex items-center">
                            <h3 class="font-bold text-xl text-appromed sm:text-2xl">
                              {{ state.verified_slide_over.clinic_form.name }}</h3>
                          </div>
                          <p class="text-sm text-appromed">{{ state.verified_slide_over.clinic_form.email }} /
                            +{{ state.verified_slide_over.clinic_form.phone }}</p>
                        </div>
                        <div class="mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3">
                          <router-link :to="'mailto:' + state.verified_slide_over.clinic_form.email"
                            class="flex-shrink-0 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-appromed hover:bg-appromed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-appromed sm:flex-1">
                            <EnvelopeIcon class="h-4 w-4" aria-hidden="true" />
                          </router-link>
                          <router-link :to="'tel:+' + state.verified_slide_over.clinic_form.phone"
                            class="flex-1 w-full inline-flex items-center justify-center px-4 py-2 border border-appromed rounded-md shadow-sm text-sm font-medium text-appromed-dark bg-white hover:ring-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-appromed-dark">
                            <PhoneIcon class="h-4 w-4" aria-hidden="true" />
                          </router-link>
                        </div>

                        <div class="col-span-2 my-3">
                          <label for="clinic_form.name"
                            class="block text-sm font-medium text-appromed-dark dark:text-appromed">{{ t('_31') }}</label>
                          <div class="mt-1">
                            <input v-model="state.verified_slide_over.clinic_form.name" required type="text"
                              name="clinic_form.name" id="clinic_form.name" autocomplete="clinic_form.name"
                              class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md" />
                          </div>
                        </div>

                        <div class="col-span-2 my-3">
                          <label for="clinic_form.partnership"
                            class="block text-sm font-medium text-appromed-dark dark:text-appromed">{{ t('_32') }}</label>
                          <div class="mt-1">
                            <input v-model="state.verified_slide_over.clinic_form.partnership" required type="text"
                              name="clinic_form.partnership" id="clinic_form.partnership" autocomplete="family-name"
                              class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md" />
                          </div>
                        </div>

                        <div class="col-span-2 my-3 lg:col-span-full">
                          <div class="flex justify-between">
                            <label for="clinic_form.address"
                              class="block text-sm font-medium text-appromed-dark dark:text-appromed">{{ t('_33') }}</label>
                          </div>
                          <div class="mt-1">
                            <input v-model="state.verified_slide_over.clinic_form.address" required
                              id="clinic_form.address" name="clinic_form.address" type="text"
                              autocomplete="clinic_form.address"
                              class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md" />
                          </div>
                        </div>

                        <div class="col-span-2 my-3 lg:col-span-1">
                          <div class="flex justify-between">
                            <label for="clinic_form.beds"
                              class="block text-sm font-medium text-appromed-dark dark:text-appromed">{{ t('_40') }}</label>
                          </div>
                          <div class="mt-1">
                            <input v-model="state.verified_slide_over.clinic_form.beds" required id="clinic_form.beds"
                              name="clinic_form.beds" type="number" autocomplete="clinic_form.beds"
                              class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md" />
                          </div>
                        </div>

                        <div class="col-span-2 my-3 lg:col-span-1">
                          <div class="flex justify-between">
                            <label for="clinic_form.patients"
                              class="block text-sm font-medium text-appromed-dark dark:text-appromed">{{ t('_41') }}</label>
                          </div>
                          <div class="mt-1">
                            <input v-model="state.verified_slide_over.clinic_form.patients" required
                              id="clinic_form.patients" name="clinic_form.patients" type="number"
                              autocomplete="clinic_form.beds"
                              class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md" />
                          </div>
                        </div>

                        <div class="col-span-2 my-3 lg:col-span-1">
                          <div class="flex justify-between">
                            <label for="clinic_form.employees"
                              class="block text-sm font-medium text-appromed-dark dark:text-appromed">{{ t('_42') }}</label>
                          </div>
                          <div class="mt-1">
                            <input v-model="state.verified_slide_over.clinic_form.employees" required
                              id="clinic_form.employees" name="clinic_form.employees" type="number"
                              autocomplete="clinic_form.beds"
                              class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md" />
                          </div>
                        </div>

                        <div class="col-span-2 my-3 lg:col-span-1">
                          <div class="flex justify-between">
                            <label for="clinic_form.education"
                              class="block text-sm font-medium text-appromed-dark dark:text-appromed">Weiterbildungsermächtigung</label>
                          </div>
                          <div class="mt-1">
                            <input v-model="state.verified_slide_over.clinic_form.education" required
                              id="clinic_form.education" name="clinic_form.education" type="text"
                              autocomplete="clinic_form.education"
                              class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md" />
                          </div>
                        </div>

                        <div class="col-span-2 my-3">
                          <div class="flex justify-between">
                            <label for="clinic_form.leader"
                              class="block text-sm font-medium text-appromed-dark dark:text-appromed">{{ t('_35') }}</label>
                          </div>
                          <div class="mt-1">
                            <input v-model="state.verified_slide_over.clinic_form.leader" required
                              name="clinic_form.leader" id="clinic_form.leader" type="text"
                              class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md"
                              aria-describedby="phone-optional" />
                          </div>
                        </div>

                        <div class="col-span-2 my-3">
                          <div class="flex justify-between">
                            <label for="clinic_form.email"
                              class="block text-sm font-medium text-appromed-dark dark:text-appromed">{{ t('_39') }}</label>
                          </div>
                          <div class="mt-1">
                            <input v-model="state.verified_slide_over.clinic_form.email" required name="clinic_form.email"
                              id="clinic_form.email" type="email"
                              class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md"
                              aria-describedby="phone-optional" />
                          </div>
                        </div>

                        <div class="col-span-2 my-3">
                          <div class="flex justify-between">
                            <label for="clinic_form.website"
                              class="block text-sm font-medium text-appromed-dark dark:text-appromed">{{ t('_37') }}</label>
                          </div>
                          <div class="mt-1">
                            <input v-model="state.verified_slide_over.clinic_form.website" required
                              name="clinic_form.website" id="clinic_form.website" type="text"
                              class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md"
                              aria-describedby="phone-optional" />
                          </div>
                        </div>

                        <div class="col-span-2 my-3">
                          <div class="flex justify-between">
                            <label for="clinic_form.phone"
                              class="block text-sm font-medium text-appromed-dark dark:text-appromed">{{ t('_38') }}</label>
                          </div>
                          <div class="mt-1">
                            <input v-model="state.verified_slide_over.clinic_form.phone" required name="clinic_form.phone"
                              id="clinic_form.phone" type="number"
                              class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md"
                              aria-describedby="phone-optional" />
                          </div>
                        </div>

                        <div class="col-span-full my-3">
                          <div class="flex justify-between">
                            <label for="clinic_form.about"
                              class="block text-sm font-medium text-appromed-dark dark:text-appromed">{{ t('_44') }}</label>
                          </div>
                          <div class="mt-1">
                            <textarea v-model="state.verified_slide_over.clinic_form.about" id="about"
                              placeholder="Infos zur Lage (Standort, Region), Betriebskita/ Kindergarten in der Nähe, Verkehrsanbindung, Kurzbeschreibung der Klinik, Firmenphilosophie etc."
                              name="message" rows="4"
                              class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-appromed focus:border-appromed border border-appromed rounded-md"
                              aria-describedby="message-max" />
                          </div>
                        </div>


                        <div class="my-3 max-w-1/2">
                          <label
                            class="block text-sm font-medium text-appromed-dark dark:text-appromed">{{ t('_13') }}</label>
                          <Combobox @change="(v) => state.verified_slide_over.clinic_form.specializations.push(v)"
                            :show_3_suggestions="false" :multiple="true" placeholder="Search Specializations..."
                            :options="specializations" />
                          <EditableTable :rows="state.verified_slide_over.clinic_form.specializations" :fields="['name']"
                            :headers="['Name']" />
                        </div>


                        <div class="col-span-full" v-for="p in preferences">
                          <span class="flex gap-4">
                            <label class="text-sm font-medium text-appromed-dark dark:text-appromed">{{ p.name }}</label>
                            <span class="text-sm font-small text-appromed-dark dark:text-appromed">
                              {{}}
                            </span>
                          </span>
                          <Stars :name="p.name" :max="max_stars"
                            :modelValue="state.verified_slide_over.clinic_form[p.field]" />
                        </div>

                        <div class="col-span-2 my-3">
                          <div class="flex justify-between">
                            <label for="clinic_form.username"
                              class="block text-sm font-medium text-appromed-dark dark:text-appromed">
                              Username
                            </label>
                          </div>
                          <div class="mt-1">
                            <input v-model="state.verified_slide_over.clinic_form['username']" required
                              name="clinic_form.username" id="clinic_form.username" type="text"
                              class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md"
                              aria-describedby="phone-optional" />
                          </div>
                        </div>


                        <div class="col-span-2 my-3">
                          <div class="flex justify-between">
                            <label for="clinic_form.password"
                              class="block text-sm font-medium text-appromed-dark dark:text-appromed">
                              Passwort
                            </label>
                          </div>
                          <div class="mt-1">
                            <input v-model="state.verified_slide_over.clinic_form['password']" required
                              name="clinic_form.password" id="clinic_form.password" type="text"
                              class="py-3 px-4 block w-full shadow-sm text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md"
                              aria-describedby="phone-optional" />
                          </div>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { t } from '~/i18n'
import IcBaselineEdit from '~icons/ic/baseline-edit'
import { Dialog, DialogOverlay, DialogTitle, Menu, MenuButton, MenuItem, MenuItems, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XCircleIcon, PencilIcon, CheckIcon } from '@heroicons/vue/24/outline'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'

import { state } from '@/store/global';

const active_combobox = ref(undefined)
const max_stars = ref(5)
const stars_given = computed(() => Object.values(state.user_inputs).reduce((a, b) => a + b), 0)

const emit = defineEmits(['verified'])


const positions = [
  { id: 1, name: 'Berufserlaubnis' },
  { id: 2, name: 'Assistenzarzt' },
  { id: 3, name: 'Facharzt' },
  { id: 4, name: 'Oberarzt' },
  { id: 5, name: 'Ltd. Oberarzt' },
  { id: 6, name: 'Chefarzt' }]
const preferences = [
  { field: 'work_life', name: "Work-Life-Balance", descr: '' },
  { field: 'career', name: "Karrieremöglichkeiten", descr: '' },
  { field: 'work_quality', name: "Arbeitsqualität", descr: '' }]
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