import { Action } from 'actions/actions.interface'
import { SET_SEARCH_TERM } from 'actions/search.actions'

export interface SearchState {
  term: string
}

const initialState: SearchState = {
  term: ''
}

export const searchReducer = (state: SearchState = initialState, action: Action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return { ...state, term: action.payload }
    default:
      return state
  }
}
