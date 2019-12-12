class Hexagram {
    constructor() {
        this.adapter = new ApiAdapter()
        this.reading = new Reading()
    }
    getHexagram(hexnum) { 
        this.adapter.getAllHexagrams().then(result => this.parseHex(result[hexnum - 1])
    )}

    parseHex(promise) {
        let co = document.querySelector('.content')
        let par = document.createElement('p')
        par.textContent = promise.judgement
        co.appendChild(par)
        console.log(promise)
    }

    renderHexagrams(resultsHex, changeHex) {
        // data Attribute in HTML is used to specify the URL of the Embedded file of an Object.
        document.getElementById('result_hex').setAttribute('data',(`lib/hexagrams.svg#${resultsHex}`))

        document.getElementById('results_container').style.display = 'inline-grid'
        
        if (changeHex) {
            document.getElementById('change_hex').setAttribute('data',(`lib/hexagrams.svg#${changeHex}`))
        } else {
            document.getElementById('second_hexagram').style.display = 'none'
        }
        let test = document.getElementById('result_hex')
        console.log(test)
    }



}