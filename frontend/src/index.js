var Yijing = require('i-ching');
document.addEventListener("DOMContentLoaded", function() {
    // const app = new App()
    const apiAdapter = new ApiAdapter()
    const allHexagrams = apiAdapter.getAllHexagrams()
    const castButton = document.querySelector(".cast-button")
    function getHexagram(hexnum){
        allHexagrams.then(result => {
            // return result[hexnum - 1]
            console.log(result[hexnum - 1])
        })
    }
    
    // getHexagram(4)
    
    function castHexagram() {
        let reading = Yijing.ask()
        console.log(reading.hexagram.number)
        getHexagram(reading.hexagram.number)
    }
    
   let test = castButton.addEventListener("click", function(){
        castHexagram()
        castButton.remove()
        // castButton.classList.add("casted");
    });
    
    
    if (castButton.classList.contains("casted")) {
        console.log(test)

    }
    // var reading = cast("hi")
    // console.log(reading)
    
    //     var reading = iChing.ask('to be or not to be?');
// console.log('%d %s %s', 
//             reading.hexagram.number, 
//             reading.hexagram.character,
//             reading.hexagram.names.join(', '));
 
// if (reading.change) {
//   console.log('changing lines: %j', reading.change.changingLines);
//   console.log('change to hexagram: %d %s %s', 
//               reading.change.to.number, 
//               reading.change.to.character, 
//               reading.change.to.names.join(', '));
// } else {
//   console.log('no changing lines');
// }

    
});
