import { ACTIVATE_COLOR } from './types'

export const activateColor = color => ({
  type: ACTIVATE_COLOR,
  payload: color
})