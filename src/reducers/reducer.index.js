import { combineReducers } from 'redux';
import getActiveColor from './reducer.colors';
import getScreen from './reducer.screen';
import getLevel from './reducer.level';

export default combineReducers({
  screen: getScreen,
  score: getLevel,
  color: getActiveColor
});