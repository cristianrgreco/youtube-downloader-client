import reducer from './downloads-reducer'
import {
  DOWNLOAD,
  PROGRESS_EVENT,
  STATE_EVENT,
  TITLE_EVENT
} from '../actions/download-form'

describe('downloadsReducer', () => {
  it('creates initial state', () => {
    const state = undefined
    const action = {}

    expect(reducer(state, action)).toEqual([])
  })

  it('creates a new download', () => {
    const state = undefined
    const action = {type: DOWNLOAD, payload: {url: 'url', type: 'type'}}

    const nextState = reducer(state, action)

    expect(nextState).toEqual([
      {
        url: action.payload.url,
        type: action.payload.type,
        name: null,
        progress: null,
        state: 'RESOLVING',
        download: null
      }
    ])
  })

  it('updates the title of a download', () => {
    const state = [
      {url: 'url-1', type: 'type-1'},
      {url: 'url-2', type: 'type-2'}
    ]
    const action = {
      type: TITLE_EVENT,
      payload: {url: 'url-1', type: 'type-1', title: 'title'}
    }

    const nextState = reducer(state, action)

    expect(nextState).toEqual([
      {url: 'url-1', type: 'type-1', name: 'title'},
      {url: 'url-2', type: 'type-2'}
    ])
  })

  it('updates the state of a download', () => {
    const state = [
      {url: 'url-1', type: 'type-1'},
      {url: 'url-2', type: 'type-2'}
    ]
    const action = {
      type: STATE_EVENT,
      payload: {url: 'url-1', type: 'type-1', state: 'state'}
    }

    const nextState = reducer(state, action)

    expect(nextState).toEqual([
      {url: 'url-1', type: 'type-1', state: 'state'},
      {url: 'url-2', type: 'type-2'}
    ])
  })

  it('updates the state and download link of a download if complete', () => {
    const state = [
      {url: 'url-1', type: 'type-1'},
      {url: 'url-2', type: 'type-2'}
    ]
    const action = {
      type: STATE_EVENT,
      payload: {url: 'url-1', type: 'type-1', state: 'COMPLETE'}
    }

    const nextState = reducer(state, action)

    expect(nextState).toEqual([
      {url: 'url-1', type: 'type-1', state: 'COMPLETE', download: ''},
      {url: 'url-2', type: 'type-2'}
    ])
  })

  it('updates the progress of a download', () => {
    const state = [
      {url: 'url-1', type: 'type-1'},
      {url: 'url-2', type: 'type-2'}
    ]
    const action = {
      type: PROGRESS_EVENT,
      payload: {url: 'url-1', type: 'type-1', percentage: 50}
    }

    const nextState = reducer(state, action)

    expect(nextState).toEqual([
      {url: 'url-1', type: 'type-1', progress: 50},
      {url: 'url-2', type: 'type-2'}
    ])
  })
})
