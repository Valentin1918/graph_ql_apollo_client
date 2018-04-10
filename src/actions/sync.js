import * as AT from './types';

export const handleDropdown = dropDownOpen => (
  { type: AT.UPDATE_ERSD_STATE, payload: { dropDownOpen } }
);

