import React, { useEffect } from 'react';
import { Swipe } from "react-swipe-component"
import List from './components/List';
import Form from './components/Form';
import { Flex } from '../../library/FlexBox';
import * as client_actions from '../../actions/client';
import { bindActionCreators, Dispatch, Action } from 'redux'
import { connect } from 'react-redux';

interface Props {
  readonly fetchClient: () => Action;
  readonly createClient: () => Action;
}

const Client: React.FC<Props> = ({ createClient, fetchClient, clients }: any) => {

  useEffect(() => { fetchClient() }, [])

  return (
    <Flex fd='column' h='100%' m='2em'>
      <Form createClient={createClient} />
      <Swipe
        nodeName="div"
        className="test"
        onSwipedDown={() => fetchClient()}
      >
        <List {...{ clients }} />
      </Swipe>
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
