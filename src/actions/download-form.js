export const SET_URL = 'SET_URL'
export const SET_TYPE = 'SET_TYPE'
export const DOWNLOAD = 'DOWNLOAD'

export const setUrl = url => ({
  type: SET_URL,
  payload: url
})

export const setType = type => ({
  type: SET_TYPE,
  payload: type
})

export const download = ({url, type}) => ({
  type: DOWNLOAD,
  payload: {url, type}
})
