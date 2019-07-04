import * as client_actions from '../../actions/client';

import { Action, Dispatch, bindActionCreators } from 'redux'
import React, { useEffect } from 'react';

import { Flex } from '../../library/FlexBox';
import Form from './components/Form';
import List from './components/List';
import { connect } from 'react-redux';
import ClientModel from '../../models/ClientModel';

interface Props {
  readonly fetchClient: () => Action;
  readonly createClient: (client: ClientModel) => Action;
  readonly deleteClient: (id: string) => Action;
}

const Client: React.FC<Props> = ({ createClient, fetchClient, deleteClient, clients, loading }: any) => {

  useEffect(() => { fetchClient() }, [fetchClient])

  return (
    <Flex fd='column' h='100%' m='2em' data-testid='client'>
      <Form {...{ createClient }} {...{ loading }} />
      <List {...{ deleteClient }} {...{ clients }} />
    </Flex>
  )
}

const mapStateToProps = (state: any): any => ({
  clients: state.client.clients,
  loading: state.client.loading
});


const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  ...client_actions
}, dispatch);

export default connect<Props>(mapStateToProps, mapDispatchToProps)(Client);
