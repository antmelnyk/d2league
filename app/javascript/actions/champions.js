import API from '../api';
import { 
  SUGGEST_CHAMPIONS,
  RECEIVE_CHAMPIONS
} from './actionTypes';

export function suggestChampions(heroes) {
  return function (dispatch) {   
    dispatch({ 
      type: SUGGEST_CHAMPIONS,
      heroes
    });
    return API.suggestChampions(heroes)
      .then(response => response.json())
      .then(json => dispatch(receiveChampions(json)))
  };
}

export function receiveChampions(champions) {
  return {
    type: RECEIVE_CHAMPIONS,
    champions
  }
}