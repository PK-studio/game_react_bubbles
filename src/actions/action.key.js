import { UPDATE_KEY } from './types'

export const updateKey = key => ({
  type: UPDATE_KEY,
  payload: key
})