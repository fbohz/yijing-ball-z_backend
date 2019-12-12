var Yijing = require('i-ching');

document.addEventListener("DOMContentLoaded", function() {
    const castButton = document.querySelector(".cast-button")
    const hexagram = new Hexagram()
    const home = document.querySelector("div.container")
    const castHexagram = () => {
        let reading = Yijing.ask()
        num = reading.hexagram.number
        hexagram.getHexagram(num)
        renderHexagrams(num)
    }
    
    function renderHexagrams(resultsHex, initialHex) {

        // document.getElementById('result_hex').setAttribute('data',(`lib/hexagrams.svg#${resultsHex}}`))
        document.getElementById('result_hex').setAttribute('data',(`lib/hexagrams.svg#4`))
        let test = document.getElementById('result_hex')
        console.log(test)
        document.getElementById('results_container').style.display = 'inline-grid'

        // document.getElementById('result_hex').setAttribute('data',('hex.svg#' + right_num))
        // document.getElementById('change_hex').setAttribute('data',('hex.svg#' + left_num))
    }


   castButton.addEventListener("click", function(){
        castHexagram()
        home.remove()
        // castButton.classList.add("casted");
    });
        
    // if (castButton.classList.contains("casted")) {
    //     // console.log(test)

    // }
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

