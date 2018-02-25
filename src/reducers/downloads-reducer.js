import {DOWNLOAD, TITLE_EVENT, STATE_EVENT, PROGRESS_EVENT} from '../actions/download-form'

const initialState = []

const downloadsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DOWNLOAD:
      return [
        ...state,
        {
          url: action.payload.url,
          type: action.payload.type,
          name: null,
          progress: null,
          state: 'RESOLVING',
          download: null
        }
      ]

    case TITLE_EVENT:
      return state.map(download => {
        const {url, type, title} = action.payload

        if (download.url === url && download.type === type) {
          return {
            ...download,
            name: title
          }
        } else {
          return download
        }
      })

    case STATE_EVENT:
      return state.map(download => {
        const {url, type, state} = action.payload

        if (download.url === url && download.type === type) {
          if (state === 'COMPLETE') {
            return {
              ...download,
              state,
              download: ''
            }
          } else {
            return {
              ...download,
              state
            }
          }
        } else {
          return download
        }
      })

    case PROGRESS_EVENT:
      return state.map(download => {
        const {url, type, percentageComplete} = action.payload

        if (download.url === url && download.type === type) {
          return {
            ...download,
            progress: percentageComplete
          }
        } else {
          return download
        }
      })

    default:
      return state
  }
}

export default downloadsReducer
