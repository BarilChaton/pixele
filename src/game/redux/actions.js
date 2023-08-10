import { SET_DEVELOPER_MODE, SET_DIMENSIONS, SET_LOADING, LOAD_ASSETS, LOAD_ASSETS_DONE,
  LOAD_SOUNDS, LOAD_SOUNDS_DONE, GAME_READY
} from './constants'

// Loading
export function setLoading(loading) {
  return {
    type: SET_LOADING,
    loading
  }
}
export function loadAssets(Assets) {
  return {
    type: LOAD_ASSETS,
    Assets
  }
}
export function loadAssetsDone() {
  return {
    type: LOAD_ASSETS_DONE
  }
}
export function loadSounds(Sounds) {
  return {
    type: LOAD_SOUNDS,
    Sounds
  }
}
export function loadSoundsDone() {
  return {
    type: LOAD_SOUNDS_DONE
  }
}
export function gameReady() {
  return {
    type: GAME_READY
  }
}

// Initial Settings
export function setDeveloperMode(developerMode) {
  return {
    type: SET_DEVELOPER_MODE,
    developerMode,
  }
}
export function setDimensions(dimensions) {
  return {
    type: SET_DIMENSIONS,
    dimensions
  }
}

// Dev/debug action
export function dispatch(type, params) {
  return {
    type,
    params,
  }
}