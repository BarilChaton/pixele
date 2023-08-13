import React, { useLayoutEffect, useState } from 'react'
import { Graphics } from '@pixi/react'

const PixiTestComponent = () => {

  const [ testGraphic, createTestGraphic ] = useState()

  useLayoutEffect(() => {
    if (testGraphic) {
      testGraphic.clear()
        .beginFill(0xFF0000)
        .drawRect(0, 0, 150, 150)
        .endFill()
    }
  }, [ testGraphic ])

  return (
    <Graphics ref={createTestGraphic}/>
  )
}

export default PixiTestComponent