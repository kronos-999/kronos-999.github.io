<template>
	<div ref="ratingEl" class="vue-stars" :class="{ readonly: readonly, notouch: notouch }" :style="mapCssProps">
		<input :id="name + '0'" :checked="modelValue === 0" :name="name" type="radio" value="0" />
		<template v-for="x in max" :key="'i' + x">
			<label :for="name + x">
				<span class="active">
					<slot name="activeLabel">{{ getActiveLabel(x) }}</slot>
				</span>
				<span class="inactive">
					<slot name="inactiveLabel">{{ getInactiveLabel(x) }}</slot>
				</span>
			</label>
			<input :id="name + x" :checked="modelValue === x" :name="name" :disabled="readonly || stars_given === 5" :value="x" type="radio" @change="updateInput($event.target.value)" />
		</template>
	</div>
</template>
<script setup>
import { defineComponent } from "vue"
import { useStore } from '@/store/index'

const store = useStore()
const props = defineProps({
  max: { type: Number, required: false, default: 5 },
  modelValue: { type: Number, required: false, default: 0 },
  name: { type: String, required: false, default: "rating" },
  char: { type: String, required: false, default: "★" },
  inactiveChar: { type: String, required: false, default: 'o' },
  readonly: { type: Boolean, required: false, default: false },
  activeColor: { type: String, required: false, default: null },
  inactiveColor: { type: String, required: false, default: null },
  shadowColor: { type: String, required: false, default: null },
  hoverColor: { type: String, required: false, default: null },
})

const emit = defineEmits(['input']);

const stars_given = computed(() => Object.values(store.user_inputs).reduce((a,b)=>a+b), 0)

const ratingChars = computed(() => [...props.char])
const inactiveRatingChars = computed(() => !!props.inactiveChar ? [...props.inactiveChar] : props.ratingChars)
const notouch = computed(() => typeof document !== "undefined" && !("ontouchstart" in document.documentElement))
const mapCssProps = computed(() => {
  const result = {}
  if (props.activeColor) result["--active-color"] = props.activeColor
  if (props.inactiveColor) result["--inactive-color"] = props.inactiveColor
  if (props.shadowColor) result["--shadow-color"] = props.shadowColor
  if (props.hoverColor) result["--hover-color"] = props.hoverColor
  return result
})

const updateInput = (v) => {
  emit('input', parseInt(v, 10))
}
const getActiveLabel = (x) => {
  let s = ratingChars.value
  return s[Math.min(s.length - 1, x - 1)]
}
const getInactiveLabel = (x) => {
  let s = inactiveRatingChars.value
  return s[Math.min(s.length - 1, x - 1)]
}
</script>
<style scoped>
  .vue-stars {
    display: inline-flex;
    flex-flow: row nowrap;
    align-items: flex-start center;
    line-height: 1em;
    @apply text-4xl;
  }

  .vue-stars label {
    display: block;
    padding: 0.125em;
    width: 1.2em;
    text-align: center;
    color: var(--active-color, #fd0);
    text-shadow: 0 0 0.1em var(--shadow-color, #ff0);
  }

  .vue-stars input,
  .vue-stars label .inactive,
  .vue-stars input:checked ~ label .active,
  .vue-stars.notouch:not(.readonly):hover label .inactive,
  .vue-stars.notouch:not(.readonly) label:hover ~ label .active {
    display: none;
  }

  .vue-stars input:checked ~ label .inactive,
  .vue-stars.notouch:not(.readonly):hover label .active,
  .vue-stars.notouch:not(.readonly) label:hover ~ label .inactive {
    display: inline;
  }

  .vue-stars.notouch:not(.readonly):hover label {
    color: var(--hover-color, #dd0);
    text-shadow: 0 0 0.2em var(--shadow-color, #ff0);
  }

  .vue-stars input:checked ~ label,
  .vue-stars.notouch:not(.readonly) label:hover ~ label {
    color: var(--inactive-color, #999);
    text-shadow: none;
  }
</style>