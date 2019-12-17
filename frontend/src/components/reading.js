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

    saveReading(userUid){
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
        this.adapter.postUserReading(readingAttrs, userUid)
        this.confMessage("<em> Reading has been added to your saved Casts! </em>")
    }
    
    getAllUserReadings() {
        // simple use getUserReadings(id) from adapter - 1 AJAX call. Do

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