import { Action } from 'actions/actions.interface'
import {SET_ALL_TAGS, SET_TAGS_FOR_ITEM} from 'actions/tags.actions'

export interface TagsState {
  [item: number]: {tag: string, tagId: string}[]
}

const initialState: TagsState = {

}

export const tagsReducer = (state: TagsState = initialState, action: Action) => {
  switch (action.type) {
    case SET_ALL_TAGS:
      return {
        ...action.payload.tags
      }
    case SET_TAGS_FOR_ITEM:
      return {
        ...state,
        [action.payload.itemId]: action.payload.tags
      }
    default:
      return state
  }
}
