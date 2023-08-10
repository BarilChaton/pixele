import { SET_LOADING } from '../constants'
import createReducer from '../createReducer'

const initialState = {
  loading: false
}

export default function baseReducer(state = initialState, action) {
  switch(action.type) {
    case SET_LOADING: {
      const { loading } = action
      return createReducer(state, { loading })
    }

    default: { return state }
  }
}