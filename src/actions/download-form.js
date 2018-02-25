export const SET_URL = 'SET_URL'
export const SET_TYPE = 'SET_TYPE'
export const TITLE_EVENT = 'TITLE_EVENT'
export const STATE_EVENT = 'STATE_EVENT'
export const PROGRESS_EVENT = 'PROGRESS_EVENT'
export const DOWNLOAD = 'DOWNLOAD'

export const setUrl = url => ({
  type: SET_URL,
  payload: url
})

export const setType = type => ({
  type: SET_TYPE,
  payload: type
})

const titleEvent = (title, {url, type}) => ({
  type: TITLE_EVENT,
  payload: {title, url, type}
})

const stateEvent = (state, {url, type}) => ({
  type: STATE_EVENT,
  payload: {state, url, type}
})

const progressEvent = (percentageComplete, {url, type}) => ({
  type: PROGRESS_EVENT,
  payload: {percentageComplete, url, type}
})

const getPercentageComplete = progress => {
  if (progress.percentageComplete === null) {
    return null
  }
  return Number(progress.percentageComplete.match(/[0-9.]+/).pop())
}

export const download = ({url, type}) => (dispatch, getState, {socket}) => {
  socket.emit('request', {url, type})

  const key = `${btoa(url)}.${type}`

  socket.on(key, data => {
    switch (data.type) {
      case 'TITLE':
        dispatch(titleEvent(data.payload, {url, type}))
        break
      case 'STATE':
        dispatch(stateEvent(data.payload.text, {url, type}))
        break
      case 'PROGRESS': {
        dispatch(progressEvent(getPercentageComplete(data.payload), {url, type}))
        break
      }
    }
  })

  dispatch({
    type: DOWNLOAD,
    payload: {url, type}
  })
}
