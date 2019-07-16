export default class API {
  static fetchHeroes() {
    return fetch('api/heroes')
  }

  static suggestChampions(heroes) {
    const url = 'api/suggest_champions?'
    return fetch('api/suggest_champions?' + formArrayQuerystring(heroes, 'heroes'))
  }
}

/*
* Form query string of array in Rails format: array[]=1&array[]=2&array[]=3
*/
function formArrayQuerystring(array, name) {
  let url = ""
  array.forEach((element, key, arr) => {
    url += `${name}[]=${element}`
    if(!Object.is(arr.length - 1, key)) {
      url += '&'
    }
  });
  return url
}
