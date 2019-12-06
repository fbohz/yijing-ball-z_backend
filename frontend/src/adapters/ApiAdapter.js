// this basically would connect to the rails backend API
class ApiAdapter {
    constructor() {
      this.baseUrl = 'http://localhost:3000'
    }
  
    getAllHexagrams() {
      const url = `${this.baseUrl}/api/v1/hexagrams/`  
      return fetch(url).then(res => res.json())
    }

}