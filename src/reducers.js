import { combineReducers } from 'redux';
import type from './modules/screen/screenReducer';
import getActiveColor from './modules/controller/controllerReducer';
// import getSpamStatus from './reducer.spam'
// import getArray from './reducer.bubbles'
// import getKey from './reducer.key'

export default combineReducers({
  selectedScreen: type,
  activeColor: getActiveColor
  // spam: getSpamStatus,
  // bubbles: getArray,
  // bubbleKey: getKey
});