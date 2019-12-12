class Reading {
    constructor(lines, changelines, hexnum, changenum, notes){
        // changing lines logic goes elsewhere check if there is reading.change first. 
        this.lines = lines
        this.changelines = changelines
        this.hexnum = hexnum
        this.changenum = changenum
        this.notes = notes
        this.date = this.getDate()
    }
    
    getDate(){
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        return date 
    }
}