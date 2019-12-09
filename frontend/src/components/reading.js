class Reading {
    constructor(lines, hexname, hexnum, notes, character, changelines, changenum, changechar){
        // changing lines logic goes elsewhere check if there is reading.change first. 
        this.lines = lines
        this.hexname = hexname
        this.hexnum = hexnum
        this.notes = notes
        this.character = character
        this.changelines = changelines
        this.changenum = changenum
        this.changechar = changechar
        this.date = this.getDate()

    }

    getDate(){
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        return date 
    }
}