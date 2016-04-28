import { combineReducers } from 'redux'
import {SELECT_IMAGES} from '../actions'

function selectedImages(state = null, action) {
  switch (action.type) {
    case SELECT_IMAGES:
      return action.query
    default:
      return state
  }
}

const rootReducer = combineReducers({
  selectedImages
});

export default rootReducer