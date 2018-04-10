import { post, fetch } from './index';
import { SETTING_OBJ } from '../constants/system';

export const getMultiInfo = obj => post(
  'projects/getMultiInfo', obj, {
    onSuccess: ({ projects }) => projects,
  });

export const getErsdOptions = id => fetch(`${SETTING_OBJ.app}/getErsdOptions/${id}`);

export const sendErsdEmail = (id, obj) => post(`${SETTING_OBJ.app}/sendErsdEmail/${id}`, obj);
