export const LOAD_DATA = 'LOAD_DATA'
export const LOAD_DATA_FAILED = 'LOAD_DATA_FAILED'
export const LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS'
export const REFRESH_DATA = 'REFRESH_DATA'

export const loadData = () => ({
  type: LOAD_DATA
})

export const loadDataFailed = () => ({
  type: LOAD_DATA_FAILED
})

export const loadDataSuccess = (data) => ({
  payload: data,
  type: LOAD_DATA_SUCCESS
})

export const refreshData = () => ({
  type: REFRESH_DATA
})
