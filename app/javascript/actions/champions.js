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
    similarities: mergeSimilarities(similarities)
  }
}

function getKey(obj, val) {
  return Object.keys(obj).find(key => obj[key] === val)
}

// Transforming single similarity's hero_id from integer into array of integers to merge multiple similarities
// So we don't display same champions several times as suggestions!
function mergeSimilarities(list) {
  const mergedSimilarities = []

  list.forEach(champ => {
    const isDuplicate = mergedSimilarities.find(e => e.champion_info.id == champ.champion_info.id)

    if(isDuplicate) {   
      const mergedChamp = mergedSimilarities[getKey(mergedSimilarities, isDuplicate)]
      mergedChamp.similarity_info.hero_id.push(champ.similarity_info.hero_id)
      mergedChamp.similarity_info.description.push(champ.similarity_info.description)
      mergedChamp.similarity_info.role = mergedChamp.similarity_info.role || champ.similarity_info.role
      mergedChamp.similarity_info.skills = mergedChamp.similarity_info.skills || champ.similarity_info.skills
      mergedChamp.similarity_info.theme = mergedChamp.similarity_info.theme || champ.similarity_info.theme
    } else {
      champ.similarity_info.hero_id = [champ.similarity_info.hero_id]
      champ.similarity_info.description = [champ.similarity_info.description]
      mergedSimilarities.push(champ)
    }
  })
    
  return mergedSimilarities
}
