import {
  SUGGEST_CHAMPIONS,
  RECEIVE_SIMILARITIES
} from '../actions/actionTypes'

const initialState = {
  list: [],
  isFetching: false
}

export function championsReducer(state = initialState, action) {
  switch (action.type) {

    case SUGGEST_CHAMPIONS:
      return { ...state, isFetching: true }

    case RECEIVE_SIMILARITIES: 
      return { list: action.similarities, isFetching: false };

  }
  return state;
}
