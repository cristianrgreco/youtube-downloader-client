import {combineReducers} from 'redux'
import formReducer from './form-reducer'

const reducers = combineReducers({
  form: formReducer
})

export default reducers
