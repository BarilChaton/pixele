import React from 'react'
import * as PIXI from 'pixi.js'
import { fork } from 'redux-saga/effects'
import Layout from './components/layout/layout'
import reducer from './redux/reducers/reducer'
import sagas from './redux/sagas'

const Game = () => {
  return <Layout />
}

PIXI.settings.RETINA_PREFIX = /@(.+)XXX/

export const Assets = [
   { id: 'testsprites', src: '../assets/testsprites.json' }
]

export function* Sagas() {
  yield fork(sagas)
}
export const Reducer = reducer
export default Game