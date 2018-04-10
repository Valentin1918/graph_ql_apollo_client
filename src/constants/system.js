import defLocale from './defaultLocale';

const PROCESS_TAG_SETTING_OBJ = {
  2: { app: 'linktofill', prefix: 'ERSD_', defLocale, },
};
const PROCESS_TAG = global.processTag || 2;
export const SETTING_OBJ = PROCESS_TAG_SETTING_OBJ[PROCESS_TAG];
