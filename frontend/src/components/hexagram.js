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

    
}