import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './game/redux/store'
import Game, { Reducer, Assets } from './game/index'

const props = {
  Game,
  Reducer
}

store.dispatch({ type: 'INITIALIZE_APP' })

const root = ReactDOM.createRoot(document.getElementById('pixi-box'))
root.render(
  <Provider store={store}>
    <Game {...props} />
  </Provider>
)