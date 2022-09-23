import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useStore = defineStore('store', {
	state: () => ({
		showResults: false,
		//accounts
		user_doctor: useStorage('user_doctor', undefined),
		user_hospital: useStorage('user_hospital', undefined),
		// search results
		hopsitals: useStorage('hospitals', undefined),
		// search history
		past_searches: useStorage('past_searches', undefined),
		// max_stars
		max_stars: useStorage('max_stars', 5),
		// form inputs
		form_inputs: useStorage('form_inputs', {
			first_name: '',
			last_name: '',
			email: '',
			phone: '',
		}),
		// location inputs
		location_inputs: useStorage('location_inputs', {
			city: '',
			state: '',
			specialization: 0,
			position: 0,
		}),
		// search inputs
		user_inputs: useStorage('user_inputs', {
			work_life: 0,
			career: 0,
			work_quality: 0,
		}),
	}),
});
