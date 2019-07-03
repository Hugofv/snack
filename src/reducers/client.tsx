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

export interface FetchClient {
  type: 'FETCH_RECIPE_SUCCESS';
  clients: ClientModel[];
}

const client: Reducer<IClientState, FetchClient> = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_RECIPE_SUCCESS':
      let { clients } = action;
      return { ...state, clients }

    default:
      return state;
  }
};

export default client;
