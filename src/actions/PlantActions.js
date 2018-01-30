import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  PLANT_UPDATE,
  PLANT_CREATE,
  PLANT_FETCH_SUCCESS,
  PLANT_SAVE_SUCCESS
} from './types';

export const plantUpdate = ({ prop, value }) => {
  return {
    type: PLANT_UPDATE,
    payload: { prop, value }
  };
};

export const plantCreate = ({ type, name, variety_name, pot_size, amount, phone, day }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/plants`)
      .push({ type, name, variety_name, pot_size, amount, phone, day })
      .then(() => {
        dispatch({ type: PLANT_CREATE });
        Actions.pop();
      });
  };
};

export const plantFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/plants`)
      .on('value', snapshot => {
        dispatch({ type: PLANT_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const plantSave = ({ type, name, variety_name, pot_size, amount, phone, day, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/plants/${uid}`)
      .set({ type, name, variety_name, pot_size, amount, phone, day })
      .then(() => {
        dispatch({ type: PLANT_SAVE_SUCCESS });
        Actions.pop();
      });
  };
};

export const plantDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/plants/${uid}`)
    .remove()
    .then(() => {
      Actions.pop();
    });
  };
};
