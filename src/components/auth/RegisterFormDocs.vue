<template>
  <div>
    <form class="space-y-6" @submit.prevent="submit">
      <div>
        <label for="email" class="block text-sm font-medium text-appromed-dark">
          E-Mail
        </label>
        <div class="mt-1">
          <input v-model="email" id="email" name="email" type="email" autocomplete="email" required
            class="appearance-none block w-full px-3 py-2 border border-appromed rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm" />
        </div>
      </div>

      <div class="space-y-1">
        <label for="password" class="block text-sm font-medium text-appromed-dark">
          Passwort
        </label>
        <div class="mt-1">
          <input v-model="password" id="password" name="password" type="password" autocomplete="current-password" required
            class="appearance-none block w-full px-3 py-2 border border-appromed rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm" />
        </div>
      </div>

      <div class="space-y-1">
        <label for="repeat_password" class="block text-sm font-medium text-appromed-dark">
          Repeat Passwort
        </label>
        <div class="mt-1">
          <input v-model="repeat_password" id="repeat_password" name="repeat_password" type="password"
            autocomplete="current-password" required
            class="appearance-none block w-full px-3 py-2 border border-appromed rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm" />
        </div>
      </div>

      <div>
        <button type="submit" :disabled="cannot_submit"
          class="w-full flex disabled:bg-gray-100 justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-appromed-dark hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500">
          Registrieren
        </button>
      </div>
    </form>
  </div>
</template>


<script setup>
import { state } from '@/store/global'

const router = useRouter()

const email = ref('')
const password = ref('')
const repeat_password = ref('')

const cannot_submit = computed(() => password.value !== repeat_password.value)

const submit = async () => {
  if (email.value.length && password.value.length) {
    state.docs.push({
      email: email.value,
      password: password.value,
      important: false, // TODO: SAVE IN DB AS DEFAULT FALSE
    })

    state.user_doctor = {
      email: email.value,
      password: password.value,
    }

    return router.push('/docs/settings')
  }
}
</script>