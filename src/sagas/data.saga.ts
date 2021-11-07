import { call, put, select, takeEvery } from '@redux-saga/core/effects'
import { LOAD_CONFIG_SUCCESS } from 'actions/config.actions'
import { loadData, loadDataFailed, loadDataSuccess, REFRESH_DATA } from 'actions/data.actions'
import { configSelector } from 'selectors/config.selector'
import { getFromLocalStorage } from 'actions/localstorage.actions'

function * loadDataFromAPI() {
  const config = yield select(configSelector)
  yield put(loadData())
  try {
    const data = yield call(fetch, config.apiUrl)
    const responseBody = yield data.json()
    yield put(loadDataSuccess(responseBody))
    yield put(getFromLocalStorage())
  }
  catch {
    yield put(loadDataFailed())
  }
}

export function * dataSaga() {
  yield takeEvery(LOAD_CONFIG_SUCCESS, loadDataFromAPI)
  yield takeEvery(REFRESH_DATA, loadDataFromAPI)
}
