import { ACTIVATE_COLOR } from '../actions/types';

const initialState = {
  activeColor: 'none'
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTIVATE_COLOR:
      return {
        activeColor: action.payload
      }
    default:
      return state;
  }
}