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
        if (this.changenum) {
            readingAttrs["hexnum"] = this.hexnum
            readingAttrs["notes"] = this.notes || ""
            readingAttrs["date"] = this.date
            readingAttrs["changenum"] = this.changenum
            readingAttrs["changelines"] = this.changelines
        }else {
            readingAttrs["hexnum"] = this.hexnum
            readingAttrs["notes"] = this.notes || ""
            readingAttrs["date"] = this.date
        }
        console.log(userId)
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
        
        // this.adapter.getUserReadings(userId).then(readings => {
        //     console.log(readings)
        // })

        console.log(userId)
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