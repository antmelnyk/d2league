export default class API {
  static fetchHeroes() {
    return fetch('api/heroes')
  }
}
