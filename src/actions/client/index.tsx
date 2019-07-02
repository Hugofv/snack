import db from '../index';
import Client from '../../models/Client';

export const createClient = (client: Client) => (dispatch: any) => {
  db.firestore().collection('client').add(client)
    .then(() => {
      dispatch(fetchClient)
    })
};

export const fetchClient = (dispatch: any) => {
  db.firestore().collection('client').get()
    .then(data => {
      dispatch({
        type: 'FETCH_CLIENT',
        client: data
      })
    })
}