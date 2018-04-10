import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Input } from 'core-components/lib/controls/Input';
import { Button } from 'core-components/lib/controls/Buttons/Button';
import { Loader } from 'core-components/lib/components/Loader';
import AC from '../actions';
import { ERSD } from '../reducers';
import { $l } from '../app-config';
import { INPUT_MAX_LENGTH } from '../constants/system';
import { checkMobile } from '../utils';

@connect(
  state => ({
    ersd: ERSD.getERSD(state),
  }),
  {
    getAllData: AC.getAllData,
    setEmail: AC.setEmail,
    setEmailValidity: AC.setEmailValidity,
    sendErsd: AC.sendErsd,
    setExternalError: AC.setExternalError,
    setPristine: AC.setPristine,
    setDeviceType: AC.setDeviceType,
  }
)
export default class Authentication extends React.Component {
  static propTypes = {
    ersd: PropTypes.object,
    getAllData: PropTypes.func,
    setEmail: PropTypes.func,
    setEmailValidity: PropTypes.func,
    sendErsd: PropTypes.func,
    setExternalError: PropTypes.func,
    setPristine: PropTypes.func,
    setDeviceType: PropTypes.func,
  };


  render() {
    console.log('render');
    return (
      <div className="doc-collab-workflow-settings doc-collab-workflow-settings--ersd">

      </div>
    );
  }
}
