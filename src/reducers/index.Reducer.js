import { combineReducers } from 'redux';
import changeScreen from './changeScreen.Reducer';

export default combineReducers({
  displayScreen: changeScreen
});