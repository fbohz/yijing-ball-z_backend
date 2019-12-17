class Reading {
    constructor(lines, changelines, hexnum, changenum, notes, id){
        // changing lines logic goes elsewhere check if there is reading.change first. 
        this.lines = lines
        this.changelines = changelines
        this.hexnum = hexnum
        this.changenum = changenum
        this.notes = notes
        this.id = id
        this.date = this.getDate()
    }
    
    getDate(){
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        return date 
    }

    saveReading(userUid){
        // postUserReading(value, id). Think about value includes reading attributes. Id is used for endpoint only.
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

}