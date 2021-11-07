export const SEARCH = 'SEARCH'
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM'

export const search = (query: string) => ({
  type: SEARCH,
  payload: query
})

export const setSearchTerm = (term: string) => ({
  type: SET_SEARCH_TERM,
  payload: term
})
