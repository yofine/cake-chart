import _ from 'lodash'
import Immutable from 'immutable'
import { createReducer } from '../lib/utils'

const initialState = Immutable.fromJS({
  resource: null,
  isRequesting: false,
  isSuccessed: false,
  error: null,
})

export default createReducer(initialState, {
  ["FETCH_MEMBER_REQUEST"](state, action) {
    return state.withMutations(map => {
      map.set('isRequesting', true)
    })
  },
  ["FETCH_MEMBER_SUCCESS"](state, action) {
    return state.withMutations(map => {
      const data = action.payload.data
      map.set('resource', data)
        .set('isRequesting', false)
        .set('isSuccessed', true)
    })
  },

  ["FETCH_MEMBER_FAILURE"](state, action) {
    return state.withMutations(map => {
      const error = action.payload.error.statusText
      map.set('error', error)
        .set('isRequesting', false)
        .set('isSuccessed', false)
    })
  },
})
