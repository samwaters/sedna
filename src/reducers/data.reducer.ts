import { Action } from 'actions/actions.interface'
import { LOAD_DATA, LOAD_DATA_FAILED, LOAD_DATA_SUCCESS } from 'actions/data.actions'

export interface DataItem {
  created_at: string
  id: number
  name: string
}

export interface DataState {
  data: DataItem[]
  error: boolean
  loading: boolean
}

const initialState: DataState = {
  data: [],
  error: false,
  loading: false,
}

export const dataReducer = (state: DataState = initialState, action: Action) => {
  switch (action.type) {
    case LOAD_DATA:
      return { ...state, error: false, loading: true }
    case LOAD_DATA_FAILED:
      return { ...initialState, error: true, loading: false }
    case LOAD_DATA_SUCCESS:
      return { data: action.payload, error: false, loading: false }
    default:
      return state
  }
}
