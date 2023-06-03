<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex flex-col my-4">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="border-b border-appromed sm:rounded-lg">

          <ButtonInput v-model="query" @click="search()" :icon="MagnifyingGlassIcon" class="my-3" />

          <table class="min-w-full divide-y divide-appromed">
            <thead class="bg-white">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-appromed uppercase tracking-wider">
                  Vorname
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-appromed uppercase tracking-wider">
                  Nachname
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-appromed uppercase tracking-wider">
                  Email
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <button type="button" class="flex items-center justify-center gap-2 bg-appromed rounded py-1.5 px-3 ml-auto" @click="add_doc()">
                    <PlusIcon class="text-white group-hover:text-gray-200 w-6 h-6" />
                    <span class="text-white group-hover:text-gray-200 font-normal">Hinzufügen</span>
                  </button>
                </th>
              </tr>
            </thead>
            <!-- PRIORITY 1 USERS SHOWN HERE -->
            <tbody class="bg-white divide-y divide-appromed">
              <tr v-for="(r, i) in state.docs.filter((x) => x?.important == true)" :key="i">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-appromed-dark">
                  {{ r.firstname }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-appromed">
                  {{ r.lastname }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-appromed">
                  {{ r.email }}
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex gap-x-2 justify-end items-center">
                  <ExclamationCircleIcon class="text-appromed w-6 h-6" v-if="r?.important == true" />
                  <button type="button" @click="edit_user(r)"
                    class="text-appromed hover:text-appromed">Bearbeiten</button>
                </td>
              </tr>
            </tbody>
            <!-- ALL USERS -->
            <tbody class="bg-white divide-y divide-appromed">
              <tr v-for="(r, i) in state.docs.filter((x) => x?.important !== true)" :key="i">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-appromed-dark">
                  {{ r.firstname }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-appromed">
                  {{ r.lastname }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-appromed">
                  {{ r.email }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button type="button" @click="edit_user(r)"
                    class="text-appromed hover:text-appromed">Bearbeiten</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <DocsSlideOver />
</template>

<script setup>
import { ExclamationCircleIcon, MagnifyingGlassIcon, PlusIcon } from '@heroicons/vue/24/outline'
import { t } from '~/i18n'
import { state } from '@/store/global'
import { fireAPI } from '@/hooks/fireAPI'

const router = useRouter()

const query = ref('')
const search = async () => {
  if (!query.value.length) return
  const [docs, err] = await fireAPI('/api/v2/medching/admin/docs/search', {
    query: query.value
  })

  if (err) {
    console.log(err)
    alert('ERROR')
    if (err.code == 403) return router.push('/admin/login')
  }

  if (!docs?.value?.length) return

  state.docs = docs.value
}

const add_doc = async () => {
  const [doc, err] = await fireAPI('/api/v2/medching/admin/docs/add', {
    firstname: 'DR',
    lastname: 'MEDCHING',
    added_by: state.admin.username
  }, true)

  if (err) {
    console.log(err)
    alert('ERROR')
    if (err.code == 403) return router.push('/admin/login')
  }

  doc.value['important'] = true
  state.docs.push(doc.value)
}

const edit_user = (s) => {
  state.docs_slide_over.data = s
  state.docs_slide_over.open = true
}
</script>

<route lang="yaml">
meta:
  layout: admin
</route>
