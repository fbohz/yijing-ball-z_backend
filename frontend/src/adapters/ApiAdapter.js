// this basically would connect to the rails backend API
class ApiAdapter {
    constructor() {
      this.baseUrl = 'http://localhost:3000'
    }

    getAll(endpoint){
      const url = `${this.baseUrl}/api/v1/${endpoint}/`  
      return fetch(url).then(res => res.json())
    }

    getUserReadings(id){
      const url = `${this.baseUrl}/api/v1/users/${id}/readings/`  
      return fetch(url).then(res => res.json())
    }

    postUserReading(value, id){
      const url = `${this.baseUrl}/api/v1/users/${id}/readings/` 
      const content = {
        body: value,
      }
  
      return fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ content }),
      }).then(res => res.json()).catch(function(error) {
        main.innerHTML = error.message
      })  
      
    }

   updateReading(value, id) {
    const url = `${this.baseUrl}/api/v1/readings/${id}`  
    const reading = {
      body: value,
    }

    return fetch(url, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ reading }),
    }).then(res => res.json()).catch(function(error) {
      main.innerHTML = error.message
    })  
  }

  deleteReading(value, id) {
    const url = `${this.baseUrl}/api/v1/readings/${id}`  
    const reading = {
      body: value,
    }
    
    return fetch(url, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ reading }),
    }).then(res => res.json()).catch(function(error) {
      main.innerHTML = error.message
    })  
  }
}