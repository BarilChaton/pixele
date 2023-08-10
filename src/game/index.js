import * as React from 'react'
import * as PIXI from 'pixi.js'
import Layout from './components/layout/layout'
import reducer from './redux/reducers/reducer'

const Game = () => {
  return <Layout />
}

PIXI.settings.RETINA_PREFIX = /@(.+)XXX/

export const Assets = [
   { id: 'testsprites', src: 'assets/testsprites.json' }
]

export const Reducer = reducer
export default Game