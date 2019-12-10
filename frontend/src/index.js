var Yijing = require('i-ching');

document.addEventListener("DOMContentLoaded", function() {
    const castButton = document.querySelector(".cast-button")
    const hexagram = new Hexagram()
    

    function castHexagram() {
        let reading = Yijing.ask()
        num = reading.hexagram.number
        hexagram.getHexagram(num)
    }
    
   castButton.addEventListener("click", function(){
        castHexagram()
        castButton.remove()
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

