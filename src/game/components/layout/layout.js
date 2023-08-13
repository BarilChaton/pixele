import { connect } from 'react-redux'
import { dispatch } from 'reduxActions'
import React from 'react'
import { Stage, Container } from '@pixi/react'
import { useLayoutEffect, useRef } from 'react'
import PixiTestComponent from './pixiTestComponent'

const Layout = (props) => {
  const { developerMode, dimensions, dispatch } = props
  const stageRef = useRef()
  const testRef = useRef()

  useLayoutEffect(() => {
    if (developerMode) {
      globalThis.__PIXI_APP__ = stageRef.current.app

      window.dispatch = dispatch
    }
  }, [ dispatch ])

  const prepare = [

  ]

  const width = dimensions ? dimensions.width : window.innerWidth
  const height = dimensions ? dimensions.height : window.innerHeight

  const stageProps = {
    width,
    height,
    options: {
      prepare,
      resolution: dimensions ? dimensions.dpr : 1,
      legacy: true,
      autoStart: false,
      autoDensity: true,
      backgroundAlpha: 1,
      powerPreference: "high-performance",
    }
  }

  return (
    <Stage ref={stageRef} {...stageProps}>
      <Container {...{
          name: "Game Area",
          eventMode: 'auto'
        }}>
          <PixiTestComponent ref={testRef}/>
      </Container>
    </Stage>
  )
}

export default connect((state) => ({
  developerMode: state.session.developerMode,
  dimensions: state.UI.dimensions
}),{ dispatch })(Layout)