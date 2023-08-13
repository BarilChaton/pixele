import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './game/redux/store'
import Game, { Reducer, Assets } from './game/index'

console.log(Assets);

const props = {
  Game,
  Assets,
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