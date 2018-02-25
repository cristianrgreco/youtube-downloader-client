import {SET_URL, SET_TYPE, DOWNLOAD} from '../actions/download-form'

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
    case SET_TYPE:
      return {
        ...state,
        type: action.payload
      }
    case DOWNLOAD:
      return {
        ...state,
        url: ''
      }
    default:
      return state
  }
}

export default formReducer
