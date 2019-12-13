var Yijing = require('i-ching');

document.addEventListener("DOMContentLoaded", function() {
    const castButton = document.querySelector(".cast-button")
    const hexagram = new Hexagram()
    const castHexagram = () => {
        const reading = Yijing.ask()
        const num = reading.hexagram.number

        if (reading.change) {
            const changenum  = reading.change.to.number
            const castLines = reading.hexagram.lines
            const changeLines = Yijing.hexagram(changenum).lines

            hexagram.getHexagrams(num, changenum, castLines, changeLines)
            hexagram.renderHexagrams(num, changenum)
            console.log(castLines)
            console.log(changeLines)
            // console.log(ch2)
        } else {
            hexagram.getHexagrams(num)
            hexagram.renderHexagrams(num)
        }

    }
    const simulateCasting = () => {
        const spinTemplate = `<div class="has-text-centered "><img class="is-rounded ball" src="styles/img/shenron.png"><p><i class="fa fa-spinner w3-spin spin" style="font-size:64px"></i> <br><br> <small> <strong> Continue meditating on your question while Shenron casts your hexagram... </strong> </small></p></div>`
        const spin = document.getElementById("spin_container")
        spin.innerHTML += spinTemplate
        spin.style.display = 'inline'
    }

    castButton.addEventListener("click", function(){
        document.querySelector("div.container").remove()
            simulateCasting()
            // FYI setTimeout() delays execution. 4000 is 4 seconds. 
                  // default seconds need to be set to 4000 for both.
            setTimeout(() => { document.getElementById("spin_container").remove() }, 400);
            setTimeout(() => { castHexagram() }, 400);
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

