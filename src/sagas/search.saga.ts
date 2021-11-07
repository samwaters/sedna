import { debounce, put, select, takeEvery } from '@redux-saga/core/effects'

import { SEARCH, setSearchTerm } from 'actions/search.actions'
import {Action} from 'actions/actions.interface'

function * search(action: Action) {
  yield put(setSearchTerm(action.payload))
}

export function * searchSaga() {
  yield debounce(500, SEARCH, search)
}
