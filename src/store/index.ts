import { defineStore } from 'pinia'
import { useStorageAsync } from '@vueuse/core'

export const useStore = defineStore('store', {
	state: () => ({
		activator: useStorageAsync('activator', false),
		//accounts
		user_doctor: useStorageAsync('user_doctor', undefined),
		user_hospital: useStorageAsync('user_hospital', undefined),
		// search results
		hospitals: useStorageAsync('hospitals', undefined),
		// search history
		past_searches: useStorageAsync('past_searches', []),
		// max_stars
		max_stars: useStorageAsync('max_stars', 5),
		// form inputs
		form_inputs: useStorageAsync('form_inputs', {
			first_name: '',
			last_name: '',
			email: '',
			phone: '',
			message: '',
		}),
		// location inputs
		location_inputs: {
			city: null,
			state: null,
			radius: null,
			specialization: null,
			position: null,
		},
		// search inputs
		user_inputs: {
			work_life: 0,
			career: 0,
			work_quality: 0,
		},
		// ADMIN STUFF
		slide_over: {
			open: false,
			search_data: undefined
		},
		notes: useStorageAsync('notes', []),
	}),
});
