import API from '../api';
import { 
  REQUEST_HEROES,
  RECEIVE_HEROES,
  SELECT_HERO,
  DESELECT_HERO,
  CLEAR_SELECTED_HEROES,
  CLEAR_SUGGESTION_RESULTS
} from './actionTypes';

export function fetchHeroes() {
  return function (dispatch) {   
    dispatch({ 
      type: REQUEST_HEROES
    });
    return API.fetchHeroes()
      .then(response => response.json())
      .then(json => dispatch(receiveHeroes(json)))
  };
}

export function receiveHeroes(heroes) {
  return {
    type: RECEIVE_HEROES,
    heroes
  }
}

export function selectHero(hero_id) {
  return {
    type: SELECT_HERO,
    hero_id
  }
}

export function deselectHero(hero_id) {
  return {
    type: DESELECT_HERO,
    hero_id
  }
}

export function clearSelectedHeroes() {
  return function (dispatch) {   
    dispatch({ 
      type: CLEAR_SELECTED_HEROES
    })
    dispatch({ 
      type: CLEAR_SUGGESTION_RESULTS
    })
  }
}
