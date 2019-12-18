var Yijing = require('i-ching');

document.addEventListener("DOMContentLoaded", function() {
    const castButton = document.querySelector(".cast-button")
    const hexagram = new Hexagram()
    const user = new User()
    const reading = new Reading()
    const castListener = () => {
        const userCasts = document.querySelector(".usersaved")
        user.setUserName()
        if (!!userCasts && user.isLoggedIn()) {
            userCasts.addEventListener('click', () => {
                reading.getAllUserReadings(user.uid, user.name)
            })
        }
    }

    setTimeout(() => { castListener() }, 1000);

    const castHexagram = () => {
        const reading = Yijing.ask()
        const num = reading.hexagram.number
        const castLines = reading.hexagram.lines

        if (reading.change) {
            const changenum  = reading.change.to.number
            const changeLines = Yijing.hexagram(changenum).lines

            hexagram.getHexagrams(num, changenum, castLines, changeLines)
            hexagram.renderHexagrams(num, changenum)

            // make sure save hexagram.reading attributes
            hexagram.saveReadingAttributes(num, castLines, changenum, changeLines)

        } else {
            hexagram.getHexagrams(num)
            hexagram.renderHexagrams(num)

            hexagram.saveReadingAttributes(num, castLines)

        }
        console.log(reading)
    }
    const simulateCasting = () => {
        const spinTemplate = `<div class="has-text-centered "><img class="is-rounded ball" src="styles/img/shenron.png"><p><i class="fa fa-spinner w3-spin spin" style="font-size:64px"></i> <br><br> <small> <strong> Continue meditating on your question while Shenron casts your hexagram... </strong> </small></p></div>`
        const spin = document.getElementById("spin_container")
        spin.innerHTML += spinTemplate
        spin.style.display = 'inline'
    }

    castButton.addEventListener("click", function(){
        document.querySelector("div#home.container").remove()
            simulateCasting()
            // FYI setTimeout() delays execution. 4000 is 4 seconds. 
                  // default seconds need to be set to 4000 for both.
            setTimeout(() => { document.getElementById("spin_container").remove() }, 400);
            setTimeout(() => { castHexagram() }, 400);
            setTimeout(() => { user.renderSaveBtn() }, 800);
            setTimeout(() => { user.setUserName() }, 1000);
            setTimeout(() => { saveListener()}, 1000);
     })

     const saveListener = () => {
        const saveBtn = document.querySelector(".saveBtn")
        if (saveBtn) {
            saveBtn.addEventListener("click", function(){
                    user.uid = saveBtn.id
                    console.log(user)
                    // console.log(hexagram.reading)
                    reading.saveReading(user.uid)
        })}
    }

});

