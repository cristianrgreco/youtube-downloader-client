import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {ThemeProvider} from 'styled-components'
import './index.css'
import App from './containers'
import theme from './theme'
import reducers from './reducers'
import registerServiceWorker from './registerServiceWorker'
import fontawesome from '@fortawesome/fontawesome'

import {
  faVideo,
  faMusic,
  faDownload
} from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(
  faVideo,
  faMusic,
  faDownload
)

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
