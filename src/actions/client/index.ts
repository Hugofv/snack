import {
  FETCH_CLIENT,
  FETCH_CLIENT_ERROR,
  FETCH_CLIENT_SUCCESS,
  SAVE_CLIENT_ERROR
} from './actionTypes';
import ClientModel from '../../models/ClientModel';
import db from '../index';
import { Dispatch } from 'redux';
import { addAlert } from '../alert';

export function createClient(client: ClientModel) {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: FETCH_CLIENT })
    db.firestore().collection('client')
      .add(client)
      .then(() => {
        dispatch(addAlert({ message: 'Cliente cadastrado com sucesso!', title: 'Sucesso', type: 'sucess' }))
        dispatch(fetchClient())
      })
      .catch(() => {
        dispatch(addAlert({ message: 'Houve um problema ao cadastrar o cliente!', title: 'Erro', type: 'error' }))
        dispatch({ type: SAVE_CLIENT_ERROR })
      })
  };
};

export const deleteClient = (id: string) => {
  return (dispatch: Dispatch<any>) => {
    db.firestore().collection('client').doc(id).delete()
      .then(() => {
        dispatch(addAlert({ message: 'Cliente excluído com sucesso!', title: 'Sucesso', type: 'sucess' }))
        dispatch(fetchClient())
      })
      .catch(() => {
        dispatch(addAlert({ message: 'Houve um problema ao excluir o cliente!', title: 'Erro', type: 'error' }))
      })
  };
};

export function fetchClient() {
  return (dispatch: any) => {
    var data: any[] = [];
    db.firestore().collection('client').get()
      .then(querySnapshot => {
        querySnapshot.forEach(function (doc) {
          data.push({ ...doc.data(), id: doc.id })
        });
        dispatch({
          type: FETCH_CLIENT_SUCCESS,
          clients: data
        });
      })
      .catch(() => {
        dispatch(addAlert({ message: 'Houve um problema ao buscar os clientes!', title: 'Erro', type: 'error' }))
        dispatch({
          type: FETCH_CLIENT_ERROR
        })
      })
  };
};
