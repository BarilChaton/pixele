import React from 'react'
import { Container, Sprite } from '@pixi/react'
import { Texture } from 'pixi.js'

const Gameboard = (props) => {
  const { x, y } = props

  const board = [
    [0, 0, 0, 3, 3, 3, 0, 0, 0],
    [0, 0, 0, 0, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 0, 0, 1, 1, 1, 0, 0, 3],
    [3, 3, 0, 1, 2, 1, 0, 3, 3],
    [3, 0, 0, 1, 1, 1, 0, 0, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 3, 0, 0, 0, 0],
    [0, 0, 0, 3, 3, 3, 0, 0, 0],
  ]

  let cellColor = 0x78553b

  const createdBoard = []

  board.forEach((col, xIndex) => {
    col.forEach((cell, yIndex) => {
      if (cell === 1) {
        cellColor = 0xc4b59f
      } else if (cell === 2) {
        cellColor = 0xFFFFFF
      } else if (cell === 3) {
        cellColor = 0x393433
      } else {
        cellColor = 0x78553b
      }

      const newCell = (
        <Sprite
          key={`cell-${xIndex}-${yIndex}`}
          texture={Texture.WHITE}
          x={xIndex * 95}
          y={yIndex * 95}
          width={90}
          height={90}
          tint={cellColor}
        />
      )

      createdBoard.push(newCell)
    })
  })

  return (
    <Container {...{
      x,
      y
    }}>
      <Sprite {...{
        width: 905,
        height: 905,
        texture: Texture.WHITE,
        anchor: 0.5
      }} />
      <Sprite {...{
        width: 860,
        height: 860,
        texture: Texture.WHITE,
        tint: 0x000000,
        anchor: 0.5
      }} />
      <Container x={-850 / 2} y={-850 / 2}>
        {createdBoard}
      </Container>
    </Container>
  )
}

// export default connect(state => ({

// }))(Gameboard)
export default Gameboard