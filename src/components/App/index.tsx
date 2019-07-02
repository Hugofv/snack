import React, { Fragment } from 'react';
import { globalCSS } from './styles';
import { Global } from '@emotion/core';
import Client from '../Client';

const App: React.FC = () => {
  return (
    <Fragment>
      <Global styles={globalCSS} />
      <Client />
    </Fragment>
  );
}

export default App;