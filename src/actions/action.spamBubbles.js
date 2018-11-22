import { SPAM_BUBBLES } from './types'

export const spamBubbles = value => ({
  type: SPAM_BUBBLES,
  payload: value
})