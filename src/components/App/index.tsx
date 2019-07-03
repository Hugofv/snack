import React, { Fragment } from 'react';

import Client from '../Client';
import { Global } from '@emotion/core';
import { globalCSS } from './styles';

const App: React.FC = () => {
  return (
    <Fragment>
      <Global styles={globalCSS} />
      <Client />
    </Fragment>
  );
}

export default App;