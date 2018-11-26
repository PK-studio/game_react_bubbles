import { UPDATE_ARRAY } from '../actions/types'

const initialState = {
  array: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_ARRAY:
      return {
        array: action.payload
      }
    default:
      return state
  }
}