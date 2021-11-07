import { combineReducers } from 'redux'
import { bootstrapReducer, BootstrapState } from './bootstrap.reducer'
import { configReducer, ConfigState } from './config.reducer'
import { dataReducer, DataState } from './data.reducer'
import { searchReducer, SearchState } from './search.reducer'
import { tagsReducer, TagsState } from 'reducers/tags.reducer'

export interface AppState {
  bootstrap: BootstrapState
  config: ConfigState
  data: DataState
  search: SearchState
  tags: TagsState
}

export const createRootReducer = () => combineReducers({
  bootstrap: bootstrapReducer,
  config: configReducer,
  data: dataReducer,
  search: searchReducer,
  tags: tagsReducer
})
