import { all, put } from '@redux-saga/core/effects'

import { bootstrap, ready } from 'actions/bootstrap.actions'
import { bootstrapSaga } from './bootstrap.saga'
import { configSaga } from './config.saga'
import { dataSaga } from './data.saga'
import { localStorageSaga } from 'sagas/localstorage.saga'
import { searchSaga } from './search.saga'
import { tagsSaga } from './tags.saga'

function * rootSaga() {
  yield all([
    bootstrapSaga(),
    configSaga(),
    dataSaga(),
    localStorageSaga(),
    searchSaga(),
    tagsSaga(),
    put(bootstrap()),
    put(ready())
  ])
}

export { rootSaga }
