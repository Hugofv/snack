import * as client_actions from '../../actions/client';

import { Action, Dispatch, bindActionCreators } from 'redux'
import React, { useEffect } from 'react';

import { Flex } from '../../library/FlexBox';
import Form from './components/Form';
import List from './components/List';
import { Swipeable }  from 'react-swipeable';
import { connect } from 'react-redux';

interface Props {
  readonly fetchClient: () => Action;
  readonly createClient: () => Action;
}

const Client: React.FC<Props> = ({ createClient, fetchClient, clients }: any) => {

  useEffect(() => { fetchClient() }, [])

  return (
    <Flex fd='column' h='100%' m='2em' data-testid='client'>
      <Form createClient={createClient} />
      <Swipeable
        nodeName="div"
        className="test"
        onSwipedDown={() => console.log('sfdsd')}
      >
      <List {...{ clients }} />
      </Swipeable >
    </Flex>
  )
}

const mapStateToProps = (state: any): any => ({
  clients: state.client.clients
});


const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  ...client_actions
}, dispatch);

export default connect<Props>(mapStateToProps, mapDispatchToProps)(Client);
