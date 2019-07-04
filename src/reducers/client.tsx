import { FETCH_CLIENT_SUCCESS, FETCH_CLIENT } from '../actions/client/actionTypes';
import ClientModel from "../models/ClientModel";
import { Reducer } from "redux";

export interface IClientState {
  readonly clients: ClientModel[]
  readonly loading: boolean
  readonly error: boolean
}

const initialState: IClientState = {
  clients: [],
  error: false,
  loading: false
};

const client: Reducer<IClientState> = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLIENT:
      return { ...state, loading: true }

    case FETCH_CLIENT_SUCCESS:
      let { clients } = action;
      return { ...state, clients, loading: false }

    default:
      return state;
  }
};

export default client;
