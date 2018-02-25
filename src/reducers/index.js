import {combineReducers} from 'redux'
import formReducer from './form-reducer'
import downloadsReducer from './downloads-reducer'

const reducers = combineReducers({
  form: formReducer,
  downloads: downloadsReducer
})

export default reducers
