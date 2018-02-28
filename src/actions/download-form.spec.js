import {
  setUrl,
  setType,
  download,
  SET_URL,
  SET_TYPE,
  DOWNLOAD
} from './download-form'

describe('downloadForm', () => {
  it('sets the url', () => {
    expect(setUrl('url')).toEqual({
      type: SET_URL,
      payload: 'url'
    })
  })

  it('sets the type', () => {
    expect(setType('AUDIO')).toEqual({
      type: SET_TYPE,
      payload: 'AUDIO'
    })
  })

  it('starts a download and tracks events via web-socket', () => {
    const url = 'url'
    const type = 'VIDEO'

    const mockDispatch = jest.fn()
    const mockSocket = {
      emit: jest.fn(),
      on: jest.fn((key, callback) => {
        callback({type: 'TITLE', payload: 'title'})
        callback({type: 'STATE', payload: {text: 'stateText'}})
        callback({type: 'PROGRESS', payload: {percentageComplete: null}})
        callback({type: 'PROGRESS', payload: {percentageComplete: '50.5%'}})
      })
    }

    download({url, type})(mockDispatch, null, {socket: mockSocket})

    expect(mockSocket.emit).toHaveBeenCalledWith('request', {url, type})
    expect(mockDispatch.mock.calls).toEqual([
      [{type: 'TITLE_EVENT', payload: {title: 'title', url, type}}],
      [{type: 'STATE_EVENT', payload: {state: 'stateText', url, type}}],
      [
        {type: 'PROGRESS_EVENT', payload: {percentageComplete: null, url, type}}
      ],
      [
        {type: 'PROGRESS_EVENT', payload: {percentageComplete: 50.5, url, type}}
      ],
      [{type: 'DOWNLOAD', payload: {url, type}}]
    ])
  })
})
