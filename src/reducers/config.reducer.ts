import { Action } from 'actions/actions.interface'
import { LOAD_CONFIG_FAILED, LOAD_CONFIG_SUCCESS } from 'actions/config.actions'

export interface ConfigState {
  apiUrl: string
  error: boolean
  version: number
}

const initialState: ConfigState = {
  apiUrl: '',
  error: false,
  version: 0
}

export const configReducer = (state: ConfigState = initialState, action: Action) => {
  switch (action.type) {
    case LOAD_CONFIG_FAILED:
      return { ...initialState, error: true }
    case LOAD_CONFIG_SUCCESS:
      return { ...action.payload, error: false }
    default:
      return state
  }
}
