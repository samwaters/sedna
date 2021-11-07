import { AppState } from 'reducers/index'

export const searchSelector = (state: AppState) => state.search
export const getCurrentSearchTerm = (state: AppState) => state.search.term
