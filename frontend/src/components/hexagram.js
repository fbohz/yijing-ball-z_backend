class Hexagram {
    constructor() {
        this.adapter = new ApiAdapter()
        this.reading = new Reading()
        this.castHex = {}
        this.changeHex = {}
        this.castLines = []
        this.changeLines = []
    }
    getHexagram(hexnum, changenum) { 
        if (changenum) {
            this.adapter.getAllHexagrams().then(result =>  {
                let castresults = result[hexnum - 1]
                let changeresults = result[changenum - 1]

                this.castHex["hexname"] = `${castresults.english_name} / ${castresults.chinese_name} (${castresults.characters})`
                this.castHex["number"] = castresults.number
                this.castHex["image"] = castresults.image
                this.castHex["judgement"] = castresults.judgement
                
                this.changeHex["hexname"] = `${changeresults.english_name} / ${changeresults.chinese_name} (${changeresults.characters})`
                this.changeHex["number"] = changeresults.number
                this.changeHex["image"] = changeresults.image
                this.changeHex["judgement"] = changeresults.judgement
                // console.log(castresults)
                console.log(this.changeHex)
                // TODO: get reading lines from iChing npm.
                this.parseHex()
                // have change lines status here.
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
        let test = document.getElementById('result_hex')
        console.log(test)
    }



}