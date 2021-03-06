import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app.js'
import './index.scss'
import { AppContainer } from 'react-hot-loader'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('main')
  )
}



render(App)
if (module.hot) {
  module.hot.accept('./components/app', () => { render(App) })
}
