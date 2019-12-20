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
            // strip all leading and trailing, and compress internal whitespace to a single space
            readingAttrs["changelines"] = linesHTML.replace(/\s+/g, " ").trim();
            readingAttrs["user_id"] = userId
        }else {
            readingAttrs["hexnum"] = parseInt(document.getElementById("hexnum").textContent)
            readingAttrs["date"] = this.date
            readingAttrs["user_id"] = userId
        }

        if (!!notes) {
            readingAttrs["notes"] = notes.value 
        }
        
        this.adapter.postUserReading(readingAttrs)
        document.getElementById("results_container").remove()
        const template = `<div class="has-text-centered "><p id="conf_texto"><br><br> <strong><em> Reading has been added to your saved casts! </em></strong></p><img class="is-rounded ball" src="styles/img/happygohan.png"></div>`        
        this.confMessage(template, "section_main")
    }    

    getReading(userUid, readingId){
        // start with getUserReadings then find specific reading by readingId 1 AJAX call.  .then as hexagram js
    }

    updateReading(readingId) {
        // updateReading(value, id)
    }


    renderReading() {
        
    }

    deleteReading(readingId) {
        // console.log(readingId)
        this.adapter.deleteReading(readingId)
    }
    
    confMessage(msg, elId) {
        document.getElementById(elId).innerHTML = msg
    }

    xButtonsListeners() {
        const xNodes = document.querySelectorAll(".delete_reading")

        xNodes.forEach(xBtn => {
            xBtn.addEventListener ('click', e => {
                const conf = confirm("Are you sure you want to delete this reading? This action cannot be undone.")
                const aTag = e.target.closest("a")
                // if conf pop-up clicks 'ok' conf is 'true'
                if (conf) {
                    this.deleteReading(aTag.id)
                    aTag.remove()
                    this.confMessage("Reading Successfully Deleted!", "flashmsg")
                }      
            })
        })
    }

}