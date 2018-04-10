import { createReducer } from 'core-components/lib/utils/reducers/creators';
import { createSelector } from 'fe-redux-core/lib/utils/selectors';
import { singleHandler } from 'fe-redux-core/lib/utils/reducers';
import * as AT from '../actions/types';

const initialState = {
  documentInfo: null,
  email: null,
  emailIsValid: null,
  owner: null,
  ownerEmail: null,
  isLoading: false,
  docId: null,
  inputIsPristine: true,
  externalError: null,
  brandingOn: true,
  logo: null,
  isMobile: false,
};

const ersd = createReducer(initialState, {
  [AT.UPDATE_ERSD_STATE]: singleHandler,
});

export default ersd;

// Selectors
export const pathSelector = createSelector(state => state.ersd);
export const getERSD = pathSelector;
