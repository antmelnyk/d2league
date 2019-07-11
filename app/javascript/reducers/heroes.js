const initialState = {
  list: [],
  isFetching: false
}

export function heroesReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_HEROES":
      return { ...state, isFetching: true }
    case "RECEIVE_HEROES": 
      return { list: action.heroes, isFetching: false };
  }
  return state;
}
