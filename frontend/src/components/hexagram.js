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
                this.castHex["image"] = changeresults.image
                this.castHex["judgement"] = changeresults.judgement

                // TODO: get reading lines from iChing npm.
                this.parseHex()
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


            document.getElementById("changenum").textContent = this.hexname
            document.getElementById("changehexname").textContent = this.changeHex.number


        } else {
            document.getElementById("hexname").textContent = this.hexname
            document.getElementById("hexnum").textContent = this.castHex.number

            let co = document.querySelector('.content')
            let par = document.createElement('p')
            par.textContent = promise.judgement
            co.appendChild(par)
            console.log(promise)
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
        }
        let test = document.getElementById('result_hex')
        console.log(test)
    }



}