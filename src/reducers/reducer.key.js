import { UPDATE_KEY } from '../actions/types'

const initialState = {
  key: 0
}

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_KEY:
      return {
        key: action.payload
      }
    default:
      return state;
  }
}