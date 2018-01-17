import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import PlantFormReducer from './PlantFormReducer';

export default combineReducers({
  auth: AuthReducer,
  plantForm: PlantFormReducer
});
