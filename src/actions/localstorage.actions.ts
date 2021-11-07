export const GET_FROM_LOCALSTORAGE = 'GET_FROM_LOCALSTORAGE'
export const GET_FROM_LOCALSTORAGE_FAILED = 'GET_FROM_LOCALSTORAGE_FAILED'
export const SYNC_WITH_LOCALSTORAGE = 'SYNC_WITH_LOCALSTORAGE'
export const SYNC_WITH_LOCALSTORAGE_SUCCESS = 'SYNC_WITH_LOCALSTORAGE_SUCCESS'

export const getFromLocalStorage = () => ({
  type: GET_FROM_LOCALSTORAGE
})

export const getFromLocalStorageFailed = () => ({
  type: GET_FROM_LOCALSTORAGE_FAILED
})

export const syncWithLocalStorage = () => ({
  type: SYNC_WITH_LOCALSTORAGE,
})

export const syncWithLocalStorageSuccess = () => ({
  type: SYNC_WITH_LOCALSTORAGE_SUCCESS
})
