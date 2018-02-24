import {SET_URL} from '../actions/download-form'

const initialState = {
  url: '',
  type: 'VIDEO'
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_URL:
      return {
        ...state,
        url: action.payload
      }
    default:
      return state
  }
}

export default formReducer
