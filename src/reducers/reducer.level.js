import { CHANGE_LEVEL } from '../actions/types';

const initialState = {
  level: 1
}

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_LEVEL:
      return {
        level: action.payload
      }
    default:
      return state;
  }
}