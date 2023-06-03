<template>
  <div>
    <form class="space-y-6" @submit.prevent="submit">
      <div>
        <label for="email" class="block text-sm font-medium text-appromed-dark">
          E-Mail
        </label>
        <div class="mt-1">
          <input v-model="username" id="email" name="email" type="email" autocomplete="email" required=""
            class="appearance-none block w-full px-3 py-2 border border-appromed rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm" />
        </div>
      </div>

      <div class="space-y-1">
        <label for="password" class="block text-sm font-medium text-appromed-dark">
          Passwort
        </label>
        <div class="mt-1">
          <input v-model="password" id="password" name="password" type="password" autocomplete="current-password"
            required=""
            class="appearance-none block w-full px-3 py-2 border border-appromed rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm" />
        </div>
      </div>

      <div class="space-y-1" v-if="is_login == false && is_doc == true">
        <label for="repeat_password" class="block text-sm font-medium text-appromed-dark">
          Repeat Passwort
        </label>
        <div class="mt-1">
          <input v-model="repeat_password" id="repeat_password" name="repeat_password" type="password"
            autocomplete="current-password" required=""
            class="appearance-none block w-full px-3 py-2 border border-appromed rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm" />
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="text-sm">
          <router-link to="#" class="font-medium text-slate-600 hover:text-slate-500">
            Passwort vergessen?
          </router-link>
        </div>
      </div>

      <div>
        <button type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-appromed-dark hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500">
          Sign In
        </button>
      </div>
    </form>
  </div>
</template>


<script setup>
import { state } from '@/store/global'

const router = useRouter()

const username = ref('')
const password = ref('')

const submit = async () => {
  if (props.is_doc === false) {
    const clinic = state.verified_clinics.find((x) => x.username === username.value && x.password === password.value)
    if (!!clinic) {
      console.log(clinic)
      state.user_clinic = Object.assign({}, clinic)
      return router.push('/clinics')
    }
  } else {
    const doc = state.docs.find((x) => x.email === username.value && x.password === password.value)
    if (!!doc) {
      console.log(doc)
      state.user_doctor = Object.assign({}, doc)
      return router.push('/docs')
    }
  }
}
</script>