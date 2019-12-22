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

    getSingleReading(reading_id){
      const url = `${this.baseUrl}/api/v1/readings/${reading_id}/`  
      return fetch(url).then(res => res.json())
    }

    userPost(attributes){
      const url = `${this.baseUrl}/api/v1/users`
      const user = {
        attributes,
      } 

      return fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ user }),
      }).then(res => res.json()).catch(error => {
        this.main.innerHTML = error.message
      })  
    }

    postUserReading(attributes){
      const url = `${this.baseUrl}/api/v1/readings`
      const reading = {
        attributes,
      } 

      // console.log(JSON.stringify({ reading }))
      return fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ reading }),
      }).then(res => res.json()).catch(error => {
        this.main.innerHTML = error.message
      })  
    }

   updateReading(updatedNotes, id) {
    const url = `${this.baseUrl}/api/v1/readings/${id}`  
    // console.log(url)
    // console.log(updatedNotes)
    return fetch(url, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        "notes": updatedNotes
      })
    }).then(res => res.json()).catch(error => {
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
    }).then(res => res.json()).catch(error => {
      this.main.innerHTML = error.message
    })  
  }

}