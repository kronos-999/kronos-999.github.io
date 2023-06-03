<template>
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
</template>
