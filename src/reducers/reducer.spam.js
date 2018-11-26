import { SPAM_BUBBLES, BUBBLES_SPAMMED } from '../actions/types'

const initialState = {
  spamStatus: true
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SPAM_BUBBLES:
      return {
        spamStatus: true
      }
    case BUBBLES_SPAMMED:
      return {
        spamStatus: false
      }
    default:
      return state;
  }
}