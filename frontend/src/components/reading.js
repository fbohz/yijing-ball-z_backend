class Reading {
    constructor(changelines, hexnum, changenum, notes, id){
        // changing lines logic goes elsewhere check if there is reading.change first. 
        // this.lines = lines
        this.changelines = changelines
        this.hexnum = hexnum
        this.changenum = changenum
        this.notes = notes
        this.id = id
        this.date = this.getDate()
        this.adapter = new ApiAdapter()
    }
    
    getDate(){
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        return date 
    }

    saveReading(userId){
        // userUid is used for endpoint only.
        const readingAttrs = {}
        const secondHex = document.getElementById("second_hexagram")
        const notes = document.getElementById("usernotes")
        
        if (!!secondHex) {
            const linesHTML = document.getElementById("change_lines").outerHTML

            readingAttrs["hexnum"] = parseInt(document.getElementById("hexnum").textContent)
            readingAttrs["date"] = this.date
            readingAttrs["changenum"] = parseInt(document.getElementById("changenum").textContent)
            readingAttrs["changelines"] = linesHTML
        }else {
            readingAttrs["hexnum"] = parseInt(document.getElementById("hexnum").textContent)
            readingAttrs["date"] = this.date
        }

        if (!!notes) {
            readingAttrs["notes"] = notes.value 
        }
        
        // this.adapter.postUserReading(readingAttrs, userId)
        this.confMessage("<em> Reading has been added to your saved Casts! </em>")
    }
    
    getAllUserReadings(userId, userName) {
        // simple use getUserReadings(id) from adapter - 1 AJAX call. Do
        // removes current content
        const oldSection = document.querySelector(".section")

        if (oldSection){
            oldSection.remove()
        }
        console.log(userName)
        const main = document.querySelector("main")
        const template = `<section class="section" > <div class="container w3-animate-opacity" id="section_savedcasts"> 
            <div class="has-text-centered ">
            <p class="title is-1">${userName} Cast Balls</p> 
            <img class="is-rounded ball imgcasts" src="styles/img/happygokushenron.png"> </div>
        </div></section>`
        main.innerHTML += template
        
        this.adapter.getUserReadings(userId).then(readings => {
            console.log(readings)
        })
    }

    getReading(userUid, readingId){
        // start with getUserReadings then find specific reading by readingId 1 AJAX call.  .then as hexagram js
    }

    updateReading(readingId) {
        // updateReading(value, id)
    }


    deleteReading(readingId) {
        // deleteReading(value, id)
    }

    confMessage(msg) {
        document.getElementById("flashmsg").innerHTML = msg
    }

    renderReading() {

    }

}