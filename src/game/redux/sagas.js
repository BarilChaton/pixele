import { ON_INIT, LOAD_ASSETS } from 'reduxConstants'
import { setDimensions } from 'reduxActions'
import { all, put, take, takeEvery } from 'redux-saga/effects'
import { Assets } from '../index'

function* watchInitializeApp() {
  yield takeEvery(ON_INIT, initApp)
  yield takeEvery(LOAD_ASSETS, loadAssets)
}

function* initApp() {
  const initialDimensions = {
    width: window.innerWidth,
    height: window.innerHeight,
    dpr: window.devicePixelRatio
  }

  yield put(setDimensions(initialDimensions))
}

function* loadAssets() {
  let assetCount = 0

  if (Assets.length > 0) {
    Assets.forEach((asset, index) => {
      assetCount = index
      console.log(asset, index);
    })
  }
}

export default function* rootSaga() {
  yield all([
    watchInitializeApp()
  ])
}
