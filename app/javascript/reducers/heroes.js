import {
  REQUEST_HEROES,
  RECEIVE_HEROES,
  SELECT_HERO,
  DESELECT_HERO,
  CLEAR_SELECTED_HEROES
} from '../actions/actionTypes'

const MAX_HEROES_SELECTED = 5

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
      return { ...state, list: action.heroes, isFetching: false }

    case SELECT_HERO:
      if(state.selected.length < MAX_HEROES_SELECTED) {
        return { ...state, selected: [ ...state.selected, action.hero_id] }
      } else {
        return state
      }

    case DESELECT_HERO:
      return { ...state, selected: state.selected.filter(hero_id => hero_id !== action.hero_id) }

    case CLEAR_SELECTED_HEROES:
      return { ...state, selected: [] }
  }

  return state;
}
