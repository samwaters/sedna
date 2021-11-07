import { put, select, takeEvery } from '@redux-saga/core/effects'

import {
  GET_FROM_LOCALSTORAGE,
  getFromLocalStorageFailed,
  SYNC_WITH_LOCALSTORAGE,
  syncWithLocalStorageSuccess
} from 'actions/localstorage.actions'
import {setAllTags} from 'actions/tags.actions'
import {tagsSelector} from 'selectors/tags.selector'

function * getTags() {
  const data = window.localStorage.getItem('tags')
  try {
    const parsedData = JSON.parse(data)
    yield put(setAllTags(parsedData))
  } catch {
    yield put(getFromLocalStorageFailed())
  }
}

function * saveTags() {
  const tags = yield select(tagsSelector)
  const stringifiedData = JSON.stringify(tags)
  window.localStorage.setItem('tags', stringifiedData)
  yield put(syncWithLocalStorageSuccess())
}

export function * localStorageSaga() {
  yield takeEvery(GET_FROM_LOCALSTORAGE, getTags)
  yield takeEvery(SYNC_WITH_LOCALSTORAGE, saveTags)
}
