import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import io from 'socket.io-client'
import {ThemeProvider} from 'styled-components'
import conf from './conf'
import App from './containers'
import theme from './theme'
import reducers from './reducers'
import registerServiceWorker from './registerServiceWorker'
import fontawesome from '@fortawesome/fontawesome'
import {createStore, applyMiddleware, compose} from 'redux'
import {faVideo, faMusic, faDownload} from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(faVideo, faMusic, faDownload)

const socket = io.connect(conf.socketUrl)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk.withExtraArgument({socket})))
)

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
