import { SPAM_BUBBLES } from '../actions/types'

const initialState = {
  spam: false
}

export default function (state = initialState, action) {
  if (action.type === SPAM_BUBBLES) {
    return spam = action.payload
  }
  return state
}