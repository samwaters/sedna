import { Action } from 'actions/actions.interface'
import {SET_ALL_TAGS, SET_TAGS_FOR_ITEM} from 'actions/tags.actions'

export interface TagsState {
  [item: number]: {tag: string, tagId: string}[]
}

const initialState: TagsState = {

}

/*
 Tag data structure:
 tags: {
  1: [{tag: 'FOO', tagId: 1636365531541}, {tag: 'BAR', tagId: 1636365532641}],
  2: [{tag: 'BAZ', tagId: 1636365533731}]
 }
 Where 1 and 2 are the ids from the API, and tagIds are unique IDs for the tags themselves
 */

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
