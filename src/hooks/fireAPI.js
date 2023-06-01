import { activateNotification } from '~/hooks/notifications/activateNotification'

export const fireAPI = async (url, payload = {}, parse_response_as_json = true) => {
  try {
    if (import.meta.env.SSR == true) return { response: ref(undefined), fullResponse: ref(undefined), error: { isError: false, message: 'SSR Response' } }
    const response = ref()

    const res = await fetch('https://api.passion-select.com' + url, {
      method: 'POST',
      /* mode: 'cors', */
      credentials: 'include',
      redirect: 'follow',
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      }
    })
    if (!res.ok || res.status !== 200) {
      activateNotification(false)
      return [null, { message: 'Something went wrong', code: 500 }]
    }

    // check for unauthorized or no ticket specified
    if ([401, 403].includes(res.status)) {
      activateNotification(false)
      return [null, { message: 'Log in again', code: 403 }]
    }

    // check for redirect
    // if (res.redirected || res.status === 303) return // router.push({ path: res.url })

    // sometimes need full response object, so return this as well
    const fullResponse = ref(res)
    // mostly use json so return it
    if (parse_response_as_json == true) response.value = await fullResponse.value.json()
    activateNotification(true)
    return [response, null, fullResponse]
  } catch (error) {
    console.error(error)
    activateNotification(false)
    return [null, error]
  }
}