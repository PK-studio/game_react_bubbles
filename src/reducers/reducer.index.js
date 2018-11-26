import { combineReducers } from 'redux';
import getActiveColor from './reducer.colors';
import getScreen from './reducer.screen';
import getLevel from './reducer.level';
import getSpamStatus from './reducer.spam'
import getArray from './reducer.bubbles'
import getKey from './reducer.key'

export default combineReducers({
  screen: getScreen,
  score: getLevel,
  color: getActiveColor,
  spam: getSpamStatus,
  bubbles: getArray,
  bubbleKey: getKey
});