import {
  REQUEST_HEROES,
  RECEIVE_HEROES,
  SELECT_HERO,
  DESELECT_HERO
} from '../actions/actionTypes'

const initialState = {
  list: [],
  selected: [],
  isFetching: false
}

export function heroesReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_HEROES:
      return { ...state, isFetching: true }
    case RECEIVE_HEROES: 
      return { ...state, list: action.heroes, isFetching: false };
    case SELECT_HERO:     
      return { ...state, selected: [ ...state.selected, action.hero_id] }
    case DESELECT_HERO:
      return { ...state, selected: state.selected.filter(hero_id => hero_id !== action.hero_id) }
  }
  return state;
}
