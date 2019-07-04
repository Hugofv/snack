import * as client_actions from '../../actions/client';

import { Action, Dispatch, bindActionCreators } from 'redux'
import React, { useEffect } from 'react';

import { Flex } from '../../library/FlexBox';
import Form from './components/Form';
import List from './components/List';
import { connect } from 'react-redux';
import ClientModel from '../../models/ClientModel';

/**
 * Props do component
 */
interface Props {
  readonly fetchClient: () => Action;
  readonly createClient: (client: ClientModel) => Action;
  readonly deleteClient: (id: string) => Action;
}

/**
 * Component Client.
 */
const Client: React.FC<Props> = ({ createClient, fetchClient, deleteClient, clients, loading }: any) => {

  useEffect(() => { fetchClient() }, [fetchClient])

  return (
    <Flex fd='column' h='100%' m='2em' data-testid='client'>
      <Form {...{ createClient }} {...{ loading }} />
      <List {...{ deleteClient }} {...{ clients }} />
    </Flex>
  )
}

/**
 * Método responsável por injetar dados da store no component Client.
 * 
 * @param state 
 */
const mapStateToProps = (state: any): any => ({
  clients: state.client.clients,
  loading: state.client.loading
});

/**
 * Método responsável por injetar actions no component Client.
 * @param dispatch 
 */
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  ...client_actions
}, dispatch);

/**
 * Connect da store com o connect.
 */
export default connect<Props>(mapStateToProps, mapDispatchToProps)(Client);
