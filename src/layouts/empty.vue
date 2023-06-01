<template>
  <div class="contents">
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <Transition>
          <KeepAlive>
            <Suspense>
              <!-- main content -->
              <div>
                <component :is="Component"></component>
              </div>

              <!-- loading state -->
              <template #fallback>
                Loading...
              </template>
            </Suspense>
          </KeepAlive>
        </Transition>
      </template>
    </RouterView>
  </div>
</template>


<script setup>
import { state } from '~/store/global'

/* load active locale if no data there */
import { setLocale } from "~/i18n"

onBeforeMount(async () => {
  await setLocale(state.active_locale)
})
</script>