import ClientModel from '../../models/ClientModel';

export const FETCH_CLIENT: 'FETCH_CLIENT' = 'FETCH_CLIENT';
export const FETCH_CLIENT_SUCCESS: 'FETCH_CLIENT_SUCCESS' = 'FETCH_CLIENT_SUCCESS';
export const FETCH_CLIENT_ERROR: 'FETCH_CLIENT_ERROR' = 'FETCH_CLIENT_ERROR';
export const DELETE_CLIENT: 'DELETE_CLIENT' = 'DELETE_CLIENT';
export const SAVE_CLIENT_ERROR: 'SAVE_CLIENT_ERROR' = 'SAVE_CLIENT_ERROR';
export const LOAD_CLIENTS_SUCCESS: 'FETCH_CLIENT_SUCCESS' = 'FETCH_CLIENT_SUCCESS';

export interface SaveClient {
  type: typeof FETCH_CLIENT
}

export interface SaveClientSuccess {
  type: typeof FETCH_CLIENT_SUCCESS
  clients: ClientModel[]
}

export interface SaveClientError {
  type: typeof SAVE_CLIENT_ERROR,
}

export interface DeleteClient {
  type: typeof DELETE_CLIENT
  id: number;
}

export interface fetchClientsSuccess {
  type: typeof LOAD_CLIENTS_SUCCESS
  clients: ClientModel[]
}

export type ClientActions = SaveClient | SaveClientSuccess | DeleteClient | fetchClientsSuccess;