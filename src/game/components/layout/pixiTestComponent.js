import { connect } from 'react-redux'
import React, { useLayoutEffect, useState, useRef } from 'react'
import { Container, Sprite } from '@pixi/react'
import { Texture } from 'pixi.js'
import { Tween, Easing } from '@tweenjs/tween.js'

const PixiTestComponent = () => {

  const testRef = useRef()
  const moveTween = useRef()
  const rotTween = useRef()
  const [ testGraphic, createTestGraphic ] = useState()

  useLayoutEffect(() => {
    moveTween.current = new Tween(testRef.current.scale)
      .to({ x: 3, y: 3 }, 2500)
      .yoyo(true)
      .repeat(Infinity)
      .easing(Easing.Back.InOut)
      .start()

    rotTween.current = new Tween(testRef.current)
      .to({ angle: 360 * 3 }, 2500)
      .yoyo(true)
      .repeat(Infinity)
      .easing(Easing.Back.InOut)
      .start()

      return () => {
        moveTween.current = undefined
        rotTween.current = undefined
      }
  }, [])


  return (
    <Container {...{
      ref: testRef,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      pivot: {x: 0.5, y: 0.5}
    }}>
      <Sprite {...{
        texture: Texture.WHITE,
        anchor: 0.5,
        scale: 5,
        tint: 0xFF22DD
      }}/>
    </Container>
  )
}

export default PixiTestComponent