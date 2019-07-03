// import db from '../index';
// import ClientModel from '../../models/ClientModel';
// import { action } from 'typesafe-actions';
// import { Dispatch, AnyAction } from 'redux';

// export const createClient = (client: ClientModel) => (dispatch: any) => {
//   db.firestore().collection('client').add(client)
//     .then(() => {
//       dispatch(fetchClient)
//     })
// };


// export const fetchClient = (dispatch: Dispatch) => {
//   var data: any[] = [];
//   db.firestore().collection('client').get()
//     .then(querySnapshot => {
//       querySnapshot.forEach(function (doc) {
//         data.push({ ...doc.data(), id: doc.id })
//       });
//       // console.log(dispatch)
//       return {
//         type: 'FETCH_CLIENT',
//         clients: data
//       }

//     })
// }


import {
  DELETE_RECIPE,
  LOAD_RECIPES_SUCCESS,
  FETCH_RECIPE,
  FETCH_RECIPE_ERROR,
  FETCH_RECIPE_SUCCESS
} from './actionTypes';
import * as ActionTypes from './actionTypes';
import ClientModel from '../../models/ClientModel';
import db from '../index';
import { Dispatch } from 'redux';

export function fetchClient(client: ClientModel) {
  return async (dispatch: Dispatch<any>) => {
    dispatch(beginFetchClient());
    try {
      const savedRecipe = await db.firestore().collection('client').add(client);

      // dispatch(fetchClientSuccess(savedRecipe));
    } catch (e) {
      dispatch(fetchClientError(client));
    }
  };
};

const beginFetchClient = (): ActionTypes.SaveRecipe => ({
  type: FETCH_RECIPE
});

const fetchClientSuccess = (savedRecipe: ClientModel[]): ActionTypes.SaveRecipeSuccess => ({
  type: FETCH_RECIPE_SUCCESS,
  clients: savedRecipe
});

const fetchClientError = (unsavedRecipe: ClientModel): ActionTypes.SaveRecipeError => ({
  type: FETCH_RECIPE_ERROR
});

export const deleteRecipe = (id: number): ActionTypes.DeleteRecipe => ({
  type: DELETE_RECIPE,
  id
});

export function fetchClients(dispatch: any) {
  return async (dispatch: any) => {
    var data: any[] = [];
    db.firestore().collection('client').get()
      .then(querySnapshot => {
        querySnapshot.forEach(function (doc) {
          data.push({ ...doc.data(), id: doc.id })
        });
        dispatch(fetchClientsSuccess(data));
      })
  };
};

const fetchClientsSuccess = (clients: ClientModel[]): ActionTypes.fetchClientsSuccess => ({
  type: LOAD_RECIPES_SUCCESS,
  clients
});