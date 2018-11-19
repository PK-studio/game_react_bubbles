import { CHANGE_SCREEN } from './types'

export const changeScreen = screenName => ({
  type: CHANGE_SCREEN,
  payload: screenName
})
