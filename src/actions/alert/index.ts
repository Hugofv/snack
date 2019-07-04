import {
  ADD_ALERT, DELETE_ALERT
} from './actionTypes';
import AlertModel from '../../models/AlertModel';
import { Dispatch } from 'redux';

export function addAlert(alert: AlertModel) {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: ADD_ALERT, alert })
  };
};

export function deleteAlert() {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: DELETE_ALERT })
  };
};