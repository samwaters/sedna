export const ADD_TAG = 'ADD_TAG'
export const ADD_TAG_FAILED = 'ADD_TAG_FAILED'
export const SET_ALL_TAGS = 'SET_ALL_TAGS'
export const SET_TAGS_FOR_ITEM = 'SET_TAGS_FOR_ITEM'
export const REMOVE_TAG = 'REMOVE_TAG'

export const addTag = (itemId: number, tag: string, tagId: string) => ({
  type: ADD_TAG,
  payload: {
    itemId,
    tag,
    tagId
  }
})

export const addTagFailed = () => ({
  type: ADD_TAG_FAILED
})

export const setAllTags = (tags: {[itemId: number]: {tag: string, tagId: string}[]}) => ({
  type: SET_ALL_TAGS,
  payload: {
    tags
  }
})

export const setTagsForItem = (itemId: number, tags: {tag: string, tagId: string}[]) => ({
  type: SET_TAGS_FOR_ITEM,
  payload: {
    itemId,
    tags
  }
})

export const removeTag = (itemId: number, tagId: string) => ({
  type: REMOVE_TAG,
  payload: {
    itemId,
    tagId
  }
})
