<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="contents">
    <div class="w-full">
      <div class="h-full flex flex-col bg-white overflow-y-scroll w-full">
        <div class="px-4 py-6 sm:px-6">

        </div>
        <!-- Main -->
        <div class="divide-y divide-appromed">
          <div class="pb-6">
            <div class="mt-12 flow-root px-4 sm:-mt-8 sm:flex sm:items-end sm:px-6 lg:-mt-15">
              <div class="mt-12 sm:ml-6 sm:flex-1">
                <div>
                  <div class="flex items-center">
                    <h3 class="font-bold text-xl text-appromed sm:text-2xl">{{ state.user_doctor['username'] }}</h3>
                  </div>
                </div>


                <div class="col-span-full my-3">
                  <div class="flex justify-between">
                    <label for="clinic_form.about"
                      class="block text-sm font-medium text-appromed-dark dark:text-appromed">Aktuelle Position</label>
                  </div>
                  <div class="mt-1">
                    <Combobox v-show="true" @change="(v) => state.user_doctor['position'] = v.id"
                      placeholder="Aktuelle Position" :options="state.positions" />
                  </div>
                </div>


                <div class="col-span-full my-3">
                  <div class="flex justify-between">
                    <label for="clinic_form.about"
                      class="block text-sm font-medium text-appromed-dark dark:text-appromed">Aktuelle Fachbereich</label>
                  </div>
                  <div class="mt-1">
                    <Combobox v-show="true" @change="(v) => state.user_doctor['specialization'] = v.id"
                      placeholder="Aktuelle Fachbereich" :options="state.specializations" />
                  </div>
                </div>

                <div class="col-span-full my-3">
                  <div class="flex justify-between">
                    <label for="clinic_form.about"
                      class="block text-sm font-medium text-appromed-dark dark:text-appromed">Arzt in
                      Weiterbildung?</label>
                  </div>
                  <div class="mt-1">
                    <Switch v-model="state.user_doctor['is_learning']" label="Arzt in Weiterbildung?"
                      href_label="Ja/Nein" href="" />
                  </div>
                </div>



                <div class="col-span-full my-3">
                  <div class="flex justify-between">
                    <label for="clinic_form.about"
                      class="block text-sm font-medium text-appromed-dark dark:text-appromed">Zusätzliche
                      Weiterbildungen</label>
                  </div>
                  <div class="mt-1">
                    <Combobox v-show="true" :multiple="true"
                      @change="(v) => state.user_doctor['additional_specializations'] = v.id"
                      placeholder="Zusätzliche Weiterbildungen" :options="state.additional_specializations" />
                  </div>
                </div>


                <div class="col-span-full my-3">
                  <div class="flex justify-between">
                    <label for="clinic_form.about"
                      class="block text-sm font-medium text-appromed-dark dark:text-appromed">Erfahrung in Jahren</label>
                  </div>
                  <div class="mt-1">
                    <Combobox v-show="true" @change="(v) => state.user_doctor['experience'] = v.id"
                      placeholder="Erfahrung in Jahren" :options="[
                        { id: 1, name: '<1' },
                        { id: 2, name: '2' },
                        { id: 3, name: '3' },
                        { id: 4, name: '4' },
                        { id: 5, name: '5' },
                        { id: 6, name: '6' },
                        { id: 7, name: '7' },
                        { id: 8, name: '8' },
                        { id: 9, name: '9' },
                        { id: 10, name: '10+' },
                      ]" />
                  </div>
                </div>


                <div class="col-span-full my-3">
                  <div class="flex justify-between">
                    <label for="clinic_form.about"
                      class="block text-sm font-medium text-appromed-dark dark:text-appromed">Verfügbar ab</label>
                  </div>
                  <div class="mt-1">
                    <Combobox v-show="true" @change="(v) => state.user_doctor['experience'] = v.id"
                      placeholder="Verfügbar ab" :options="[
                        { id: 1, name: 'Sofort' },
                        { id: 2, name: 'Demnächst' },
                        { id: 3, name: 'Offen für Angebote' },
                        { id: 4, name: 'Inkognito' },
                      ]" />
                  </div>
                </div>


                <div class="col-span-full my-3">
                  <div class="flex justify-between">
                    <label for="clinic"
                      class="block text-sm font-medium text-appromed-dark dark:text-appromed">Aktuelle Klinik</label>
                  </div>
                  <div class="mt-1">
                    <input v-model="state.user_doctor['clinic']" name="clinic" id="clinic" type="text" class="py-2 px-3 block w-full text-sm text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md" aria-describedby="clinic" />
                  </div>
                </div>


                <div class="col-span-full my-3">
                  <div class="flex justify-between">
                    <label for="clinic_form.about"
                      class="block text-sm font-medium text-appromed-dark dark:text-appromed">Aktueller Wohnort</label>
                  </div>
                  <div class="mt-1">
                    <Combobox v-show="true" @change="(v) => state.user_doctor['city'] = v.id"
                      placeholder="Aktueller Wohnort" :options="state.cities" />
                  </div>
                </div>


                <div class="col-span-full my-3">
                  <div class="flex justify-between">
                    <label for="clinic_form.about"
                      class="block text-sm font-medium text-appromed-dark dark:text-appromed">Umkreis/Radius</label>
                  </div>
                  <div class="mt-1">
                    <Combobox v-show="true" @change="(v) => state.user_doctor['position'] = v.id"
                      placeholder="Umkreis/Radius" :options="[
                        { id: 1, name: '<50km' },
                        { id: 2, name: '<100km' },
                        { id: 3, name: '<200km' },
                        { id: 4, name: 'Deutschlandweit' }]" />
                  </div>
                </div>


                <div class="col-span-full my-3">
                  <div class="flex justify-between">
                    <label for="clinic_form.about"
                      class="block text-sm font-medium text-appromed-dark dark:text-appromed">Zusätzliche
                      Informationen</label>
                  </div>
                  <div class="mt-1">
                    <textarea v-model="state.user_doctor['about']" id="about"
                      placeholder="Angaben zur Wunschklinik, Gehalt, Arbeitserfahrung, Zusatz zur aktuellen Position, bspw. Funktionsoberarzt o. Sektionsleitung, Zusatzqualifikationen, Kurse etc."
                      name="message" rows="4"
                      class="py-3 px-4 block w-full text-appromed-dark focus:ring-appromed focus:border-appromed border border-appromed rounded-md"
                      aria-describedby="message-max" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { state } from '@/store/global'
import { t } from '@/i18n'

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

<route lang="yaml">
meta:
  layout: logged_in_users
</route>