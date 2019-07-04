import { ADD_ALERT, DELETE_ALERT } from '../actions/alert/actionTypes';
import { Reducer } from "redux";

export interface IAlertState {
  readonly message: string
  readonly title: string
  readonly type: string
}

const initialState: IAlertState = {
  message: '',
  title: '',
  type: ''
};

const client: Reducer<IAlertState> = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALERT:
      const { alert } = action;
      return { ...state, ...alert }

    case DELETE_ALERT:
      return initialState;

    default:
      return state;
  }
};

export default client;
