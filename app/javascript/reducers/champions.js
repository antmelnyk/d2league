import {
  SUGGEST_CHAMPIONS,
  RECEIVE_SIMILARITIES,
  CLEAR_SUGGESTION_RESULTS
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

    case CLEAR_SUGGESTION_RESULTS:
      return initialState;

  }
  return state;
}
