import { CHANGE_LEVEL } from './types'

export const changeLevel = level => ({
  type: CHANGE_LEVEL,
  peyload: level
})