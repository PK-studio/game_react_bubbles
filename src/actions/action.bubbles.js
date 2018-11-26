import { UPDATE_ARRAY } from './types'

export const updateArray = array => ({
  type: UPDATE_ARRAY,
  payload: array
})