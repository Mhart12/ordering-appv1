import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  PLANT_UPDATE,
  PLANT_CREATE,
  PLANT_FETCH_SUCCESS
} from './types';

export const plantUpdate = ({ prop, value }) => {
  return {
    type: PLANT_UPDATE,
    payload: { prop, value }
  };
};

export const plantCreate = ({ type, variety_name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/plants`)
      .push({ type, variety_name, phone, shift })
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
