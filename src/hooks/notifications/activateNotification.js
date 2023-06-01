import { state } from '~/store/global'
import { t }     from '~/i18n'

export const activateNotification = (success = false) => {
  state.notification = {
    open   : true,
    success: success,
    title  : success == true ? t('_294') : t('_292'),
    text   : success == true ? t('_295') : t('_293')
  }
}