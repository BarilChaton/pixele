import React from 'react'
import { Loop } from './utils/loop'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './game/redux/store'
import Game, { Reducer, Sagas, Assets } from './game/index'

Loop()

const props = {
  Game,
  Assets,
  Sagas,
  Reducer
}

store.dispatch({ type: 'ON_INIT' })
if (Assets.length > 0) {
  store.dispatch({ type: 'LOAD_ASSETS' })
}

const root = ReactDOM.createRoot(document.getElementById('pixi-box'))
root.render(
  <Provider store={store}>
    <Game {...props} />
  </Provider>
)