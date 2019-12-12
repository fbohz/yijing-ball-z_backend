var Yijing = require('i-ching');

document.addEventListener("DOMContentLoaded", function() {
    const castButton = document.querySelector(".cast-button")
    const hexagram = new Hexagram()
    const castHexagram = () => {
        let reading = Yijing.ask()
        num = reading.hexagram.number
        hexagram.getHexagram(num)
        // console.log(typeof num)
        const numo = 2
        renderHexagrams(num)
    }
    
    castButton.addEventListener("click", function(){
        document.querySelector("div.container").remove()
         castHexagram()
         // castButton.classList.add("casted");
     });
     
    function renderHexagrams(resultsHex, changeHex) {
        // document.querySelector("div.container").remove()
        // data Attribute in HTML is used to specify the URL of the Embedded file of an Object.
        document.getElementById('result_hex').setAttribute('data',(`lib/hexagrams.svg#${resultsHex}`))

        document.getElementById('results_container').style.display = 'inline-grid'
        // const secondHex = document.getElementById('second_hexagram')
        
        if (changeHex) {
            document.getElementById('change_hex').setAttribute('data',(`lib/hexagrams.svg#${changeHex}`))
        } else {
            document.getElementById('second_hexagram').style.display = 'none'
        }
        let test = document.getElementById('result_hex')
        console.log(test)
    }


        
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

