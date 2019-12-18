// this basically would connect to the rails backend API
class ApiAdapter {
    constructor() {
      this.baseUrl = 'http://localhost:3000'
      this.main = document.querySelector("main")
    }

    getAll(endpoint){
      const url = `${this.baseUrl}/api/v1/${endpoint}/`  
      return fetch(url).then(res => res.json())
    }

    getUserReadings(id){
      const url = `${this.baseUrl}/api/v1/users/${id}/readings/`  
      return fetch(url).then(res => res.json())
    }

    // postRequest(url, model){
    //   return fetch(url, {
    //     method: 'POST',
    //     headers: {
    //       'content-type': 'application/json',
    //     },
    //     body: JSON.stringify({ model }),
    //   }).then(res => res.json()).catch(function(error) {
    //     // this.main.innerHTML = error.message
    //     console.log(error)
    //   })  
    // }

    userPost(attributes){
      const url = `${this.baseUrl}/api/v1/users`
      const user = {
        attributes,
      } 
      console.log(JSON.stringify({ user }))
      return fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ user }),
      }).then(res => res.json()).catch(function(error) {
        // this.main.innerHTML = error.message
        console.log(error)
      })  
    }

    // postUserReading(value, id){
    //   const url = `${this.baseUrl}/api/v1/users/${id}/readings/` 
    //   this.postRequest(value, url)
    // }

   updateReading(attributes, id) {
    const url = `${this.baseUrl}/api/v1/readings/${id}`  
    const reading = {
      body: attributes,
    }

    return fetch(url, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ reading }),
    }).then(res => res.json()).catch(function(error) {
      this.main.innerHTML = error.message
    })  
  }

  deleteReading(id) {
    const url = `${this.baseUrl}/api/v1/readings/${id}`  
    return fetch(url, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    }).then(res => res.json()).catch(function(error) {
      this.main.innerHTML = error.message
    })  
  }
}