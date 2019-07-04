import React, { Fragment } from 'react';

import Client from '../Client';
import Toast from '../Toast';
import { Global } from '@emotion/core';
import { globalCSS } from './styles';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from '../../library/AlertTemplate'

/**
 * Options do alert.
 */
const options = {
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE
}

/**
 * Component App.
 */
const App: React.FC = () => {
  return (
    <Fragment>
      <AlertProvider template={AlertTemplate} {...options}>
        <Global styles={globalCSS} />
        <Client />
        <Toast />
      </AlertProvider>
    </Fragment>
  );
}

export default App;
