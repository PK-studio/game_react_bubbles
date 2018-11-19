import { combineReducers } from 'redux';
import getSetting from './reducer.setting';
import getScreen from './reducer.screen';
import getLevel from './reducer.level';

export default combineReducers({
  screen: getScreen,
  score: getLevel,
  setting: getSetting
});