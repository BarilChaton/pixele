import TWEEN from '@tweenjs/tween.js'

export const Loop = () => {
  let lastTimestamp = 0
  let currentTime = 0
  TWEEN.now = () => currentTime

  const timestamp = window.performance.now()
  const delta = timestamp - lastTimestamp

  currentTime += delta
  TWEEN.update()
  requestAnimationFrame(Loop)
}