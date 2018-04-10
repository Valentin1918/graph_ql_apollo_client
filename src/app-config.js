import config from 'config';
import isolatedLocale from 'core-components/lib/utils/Locale/isolated';
import 'core-components/lib/utils/Locale/template';
import { SETTING_OBJ } from './constants/system';

const { prefix, defLocale } = SETTING_OBJ;

const restParams = {
  lang: config.api.lang,
  appKey: config.api.appKey,
  baseUrl: config.api.baseUrl,
  userId: window.user.userId,
  token: window.user.token,
};
const userConfig = global.user;

const Locale = isolatedLocale.setLocale(prefix, global.allConstants, defLocale);

const $l = Locale.get;

export default {
  config, userConfig, restParams, $l,
};
export {
  config, userConfig, restParams, $l,
};
