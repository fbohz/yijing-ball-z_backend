class Hexagram {
    constructor() {
        this.adapter = new ApiAdapter()
        this.reading = new Reading()
        this.castHex = {}
        this.changeHex = {}
        // this.castLines = []
        // this.changeLines = []
    }
    getHexagrams(hexnum, changenum, castLines, changeLines) { 
        if (changenum) {
            this.adapter.getAllHexagrams().then(result =>  {
                const castresults = result[hexnum - 1]
                const changeresults = result[changenum - 1]
                // function finds the differences, adds one, then filters for values that are not undefined.
                const findChangeLines = castLines.map((currElement, index) => {
                    if(currElement !== changeLines[index]) {
                        return index + 1;
                     } 
                }).filter(function(val){ return val!==undefined; });

                this.castHex["hexname"] = `${castresults.english_name} / ${castresults.chinese_name} (${castresults.characters})`
                this.castHex["number"] = castresults.number
                this.castHex["image"] = castresults.image
                this.castHex["judgement"] = castresults.judgement
                
                this.changeHex["hexname"] = `${changeresults.english_name} / ${changeresults.chinese_name} (${changeresults.characters})`
                this.changeHex["number"] = changeresults.number
                this.changeHex["image"] = changeresults.image
                this.changeHex["judgement"] = changeresults.judgement

                this.parseHex()
                // this.renderChangeLines(findChangeLines)
            })

        } else {
                this.adapter.getAllHexagrams().then(result =>  {
                    let castresults = result[hexnum - 1]
                    this.castHex["hexname"] = `${castresults.english_name} / ${castresults.chinese_name} (${castresults.characters})`
                    this.castHex["number"] = castresults.number
                    this.castHex["image"] = castresults.image
                    this.castHex["judgement"] = castresults.judgement
                this.parseHex()
        })
        }
    }

    parseHex() {
        if (this.changeHex) {
            document.getElementById("hexname").textContent = this.hexname
            document.getElementById("hexnum").textContent = this.castHex.number
            document.getElementById("judgement").textContent = this.castHex.judgement
            document.getElementById("image").textContent = this.castHex.image


            document.getElementById("changenum").textContent = this.hexname
            document.getElementById("changehexname").textContent = this.changeHex.number
            document.getElementById("chjudgement").textContent = this.changeHex.judgement
            document.getElementById("chimage").textContent = this.changeHex.image


        } else {
            document.getElementById("hexname").textContent = this.hexname
            document.getElementById("hexnum").textContent = this.castHex.number
            document.getElementById("judgement").textContent = this.castHex.judgement
            document.getElementById("image").textContent = this.castHex.image
        }
    }

    renderHexagrams(resultsHex, changeHex) {
        // data Attribute in HTML is used to specify the URL of the Embedded file of an Object.
        document.getElementById('result_hex').setAttribute('data',(`lib/hexagrams.svg#${resultsHex}`))

        document.getElementById('results_container').style.display = 'block'
        
        if (changeHex) {
            document.getElementById('change_hex').setAttribute('data',(`lib/hexagrams.svg#${changeHex}`))
        } else { 
            document.getElementById('second_hexagram').style.display = 'none'
            document.getElementById('change_lines').style.display = 'none'
        }
    }

    renderChangeLines(changeLines) {
        
    }

}