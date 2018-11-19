import { CHANGE_SCREEN } from '../actions/types';

const initialState = {
  status: 'menu'
}

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_SCREEN:
      return {
        status: action.payload
      }
    default:
      return state;
  }
}