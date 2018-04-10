import { safe as $ } from 'safe-monada';
import AC from './index';
import { getErsdOptions } from '../api/end-points';

export const getAllData = () => async (dispatch) => {
  $(true).$to(AC.handleLoading).$do(dispatch);
  const ersdOptions = await getErsdOptions(urlId);

};
