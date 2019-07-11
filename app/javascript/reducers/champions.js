const initialState = {
  list: [],
  isFetching: false
}

export function championsReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_CHAMPIONS":
      return { ...state, isFetching: true }
    case "RECEIVE_CHAMPIONS": 
      return { list: action.champions, isFetching: false };
  }
  return state;
}
