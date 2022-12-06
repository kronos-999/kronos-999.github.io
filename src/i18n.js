import { state } from '~/store/index'

const is_no_ssr = import.meta.env.SSR == false

export const allLocales = Object.keys(import.meta.glob('../public/locales/*.{y(a)?ml,json}', {
  eager: true,
})).map((k) => k.split('.json')[0].split('/')[3])

// keep track of when locale was last loaded, update latest after 1 day, see below
let last_updated = allLocales.reduce((obj,key) => (obj[key] = undefined ,obj), {})

// TODO: check if next word to translate is loaded, otherwise reload new
// Set new locale.
export async function setLocale (locale) {
  state.loading = true
  // Load locale if not available yet.
  if (!Object.keys(state.locales).includes(locale) || !last_updated[locale] || last_updated[locale] - new Date() > 1000 * 60 * 60 * 24) {
    const messages = await loadLocale(locale);

    // fetch() error occurred.
    if (!messages) return;

    // Add locale.
    state.locales[locale] = messages
  }

  // Set locale.
  state.active_locale = locale;
  // set date of last update
  last_updated[locale] = new Date()
  // set loading to false to release other functions
  state.loading = false
}

// Fetch locale helper
async function loadLocale(locale) {
  return new Promise( async (resolve, reject) => {
    try {
      const response = await fetch(`/locales/${locale}.json`)
      if (!response.ok) reject('Response was not ok')
      
      const messages = await response.json();
      resolve(messages)
    } catch (error) {
        console.error(error)
        reject('An error occurred: ', error)
    }
  })
  /* return fetch(`/locales/${locale}.json`)
    .then(async (response) => {
      if (response.ok) {
        const messages = await response.json();
        return messages;
      }
      throw new Error("Something went wrong!");
    })
    .catch((error) => {
      console.error(error);
    }); */
}

export const t = (x) => (is_no_ssr == true && state.loading == false && state.locales[state.active_locale][x]) || ''