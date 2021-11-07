import { put, select, takeEvery } from '@redux-saga/core/effects'
import { Action } from 'actions/actions.interface'
import { syncWithLocalStorage } from 'actions/localstorage.actions'
import { ADD_TAG, addTagFailed, REMOVE_TAG, setTagsForItem } from 'actions/tags.actions'
import { getTagsForItem } from 'selectors/tags.selector'

function * addTagToItem(action: Action) {
  const tags = yield select(getTagsForItem(action.payload.itemId))
  if(tags.length >= 5) {
    yield put(addTagFailed())
  } else {
    const allTags = [...tags, {tag: action.payload.tag, tagId: action.payload.tagId}]
    yield put(setTagsForItem(action.payload.itemId, allTags))
    yield put(syncWithLocalStorage())
  }
}

function * removeTagFromItem(action: Action) {
  const tags = yield select(getTagsForItem(action.payload.itemId))
  yield put(setTagsForItem(action.payload.itemId, tags.filter(tag => tag.tagId !== action.payload.tagId)))
  yield put(syncWithLocalStorage())
}

export function * tagsSaga() {
  yield takeEvery(ADD_TAG, addTagToItem)
  yield takeEvery(REMOVE_TAG, removeTagFromItem)
}
