import { AppState } from 'reducers/index'

export const tagsSelector = (state: AppState) => state.tags
export const getTagsForItem = (itemId: number) => (state: AppState) => state.tags[itemId] || []
