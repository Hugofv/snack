import AlertModel from "../../models/AlertModel";

export const ADD_ALERT: 'ADD_ALERT' = 'ADD_ALERT';
export const DELETE_ALERT: 'DELETE_ALERT' = 'DELETE_ALERT';

export interface addAlert {
  type: typeof ADD_ALERT
  alert: typeof AlertModel
}

export interface deleteAlert {
  type: typeof DELETE_ALERT
}


export type AlertActions = addAlert | deleteAlert