<template>
	<main class="w-full min-h-screen bg-blue-100 grid place-items-center">
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
	</main>
</template>


<script setup>
import { state } from '~/store/global'

/* load active locale if no data there */
import { setLocale } from "~/i18n"

onBeforeMount(async () => {
	await setLocale(state.active_locale)
})
</script>