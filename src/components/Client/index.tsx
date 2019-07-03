import React, { useEffect } from 'react';
import { Swipe } from "react-swipe-component"
import List from './components/List';
import Form from './components/Form';
import { Flex } from '../../library/FlexBox';
import { fetchClients } from '../../actions/client';
import { bindActionCreators, Dispatch, Action } from 'redux'
import { connect } from 'react-redux';

interface Props {
  readonly fetchClients: () => Action;
}

const Client: React.FC<Props> = ({ createClient, fetchClients, clients }: any) => {

  useEffect(() => fetchClients(), [])

  return (
    <Flex fd='column' h='100%' m='2em'>
      <Form createClient={createClient} />
      <Swipe
        nodeName="div"
        className="test"
        onSwipedDown={() => fetchClients()}
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
  fetchClients
}, dispatch);

export default connect<Props>(mapStateToProps, mapDispatchToProps)(Client);
