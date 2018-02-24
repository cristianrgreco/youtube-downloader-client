export const SET_URL = 'SET_URL'
export const DOWNLOAD = 'DOWNLOAD'

export const setUrl = url => ({
  type: SET_URL,
  payload: url
})

export const download = ({url, type}) => ({
  type: DOWNLOAD,
  payload: {url, type}
})
