export default class API {
  static fetchHeroes() {
    return fetch('api/heroes')
  }

  static suggestChampions(heroes) {
    const url_params = encodeURIComponent(JSON.stringify(heroes));
    return fetch('api/suggest_champions?heroes=' + url_params)
  }
}
