import reducer from './form-reducer'
import {DOWNLOAD, SET_TYPE, SET_URL} from '../actions/download-form'

describe('formReducer', () => {
  it('creates initial state', () => {
    const state = undefined
    const action = {}

    expect(reducer(state, action)).toEqual({
      url: '',
      type: 'VIDEO'
    })
  })

  it('sets the url', () => {
    const state = {url: 'url-1', type: 'VIDEO'}
    const action = {
      type: SET_URL,
      payload: 'url-2'
    }

    expect(reducer(state, action)).toEqual({
      url: 'url-2',
      type: 'VIDEO'
    })
  })

  it('sets the type', () => {
    const state = {url: 'url', type: 'VIDEO'}
    const action = {
      type: SET_TYPE,
      payload: 'AUDIO'
    }

    expect(reducer(state, action)).toEqual({
      url: 'url',
      type: 'AUDIO'
    })
  })

  it('resets values on download', () => {
    const state = {url: 'url', type: 'AUDIO'}
    const action = {type: DOWNLOAD}

    expect(reducer(state, action)).toEqual({
      url: '',
      type: 'AUDIO'
    })
  })
})
