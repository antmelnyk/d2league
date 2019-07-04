import API from '../api';
import { 
  REQUEST_HEROES,
  RECEIVE_HEROES
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