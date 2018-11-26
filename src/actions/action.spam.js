import { SPAM_BUBBLES, BUBBLES_SPAMMED } from './types'

export const spamBubbles = () => ({
  type: SPAM_BUBBLES
})

export const bubbleSpammed = () => ({
  type: BUBBLES_SPAMMED
})