import {
  PLANT_UPDATE,
  PLANT_CREATE
} from '../actions/types';

const INITIAL_STATE = {
  type: '',
  variety_name: '',
  phone: '',
  shift: 'Monday'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLANT_UPDATE:
      // action.payload === { prop: 'name', value: 'jane' }
      return { ...state, [action.payload.prop]: action.payload.value };
    case PLANT_CREATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
