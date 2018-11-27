import { ACTIVATE_COLOR } from './controllerActions';

const initialState = {
  color: 'none'
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTIVATE_COLOR:
      return {
        color: action.payload
      }
    default:
      return state;
  }
}