
<template>
  <div class="flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="/logo.svg" />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="space-y-6">
        <div>
          <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
          <div class="mt-2">
            <input v-model="username" id="username" name="username" type="text" autocomplete="username" required=""
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-appromed sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div class="mt-2">
            <input v-model="password" id="password" name="password" type="password" autocomplete="password" required=""
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-appromed sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <button type="button" @click="submit"
            class="flex w-full justify-center rounded-md bg-appromed px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-appromed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-appromed">Sign
            in</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { fireAPI } from '@/hooks/fireAPI'
import { state } from '@/store/global'

const router = useRouter()

const username = ref('')
const password = ref('')

const submit = async () => {
  const [response, err] = await fireAPI('/api/v2/medching/admin/login', {
    username: username.value,
    password: password.value,
  }, true)

  if (err) {
    console.log(err)
    return alert('ERROR')
  }
  state.admin = response.value.admin
  router.push('/admin/docs')
}
</script>

<route lang="yaml">
meta:
  layout: empty
</route>
