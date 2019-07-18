import API from '../api';
import { 
  SUGGEST_CHAMPIONS,
  RECEIVE_SIMILARITIES
} from './actionTypes';

export function suggestChampions(heroes) {
  return function (dispatch) {   
    dispatch({ 
      type: SUGGEST_CHAMPIONS,
      heroes
    });
    return API.suggestChampions(heroes)
      .then(response => response.json())
      .then(json => dispatch(receiveSimilarities(json)))
  };
}

export function receiveSimilarities(similarities) {
  return {
    type: RECEIVE_SIMILARITIES,
    similarities
  }
}
