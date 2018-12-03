import { NEW_BUBBLES_LIST, RESTART_BUBBLES } from './boardActions'

const initialState = [0, 1, 2, 3, 4]

export default function (state = initialState, action) {
  switch (action.type) {
    case NEW_BUBBLES_LIST:
      return action.payload
    case RESTART_BUBBLES:
      return [0, 1, 2, 3, 4]
    default:
      return state
  }
}