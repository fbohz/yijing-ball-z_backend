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
        hexagram.renderHexagrams(num, numo)
    }
    const simulateCasting = () => {
        const spinTemplate = `<p><i class="fa fa-spinner w3-spin spin" style="font-size:64px"></i> <br><br> <small> <strong> Continue meditating on your question while we cast your hexagram... </strong> </small></p>`
        const spin = document.getElementById("spin_container")
        spin.innerHTML += spinTemplate
        spin.style.display = 'inline'
        console.log(spin)
    }

    castButton.addEventListener("click", function(){
        document.querySelector("div.container").remove()
            simulateCasting()
            // FYI setTimeout() delays execution. 4000 is 4 seconds. 
            // production both seconds are set to 4000
            setTimeout(() => { document.getElementById("spin_container").remove() }, 100);
            setTimeout(() => { castHexagram() }, 100);
     });
     
    // function renderHexagrams(resultsHex, changeHex) {
    //     // document.querySelector("div.container").remove()
    //     // data Attribute in HTML is used to specify the URL of the Embedded file of an Object.
    //     document.getElementById('result_hex').setAttribute('data',(`lib/hexagrams.svg#${resultsHex}`))

    //     document.getElementById('results_container').style.display = 'inline-grid'
    //     // const secondHex = document.getElementById('second_hexagram')
        
    //     if (changeHex) {
    //         document.getElementById('change_hex').setAttribute('data',(`lib/hexagrams.svg#${changeHex}`))
    //     } else {
    //         document.getElementById('second_hexagram').style.display = 'none'
    //     }
    //     let test = document.getElementById('result_hex')
    //     console.log(test)
    // }


        
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

