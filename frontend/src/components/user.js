class User {
    constructor(name, uid, id){
        this.name = name
        this.uid = uid
        this.id = id
        this.adapter = new ApiAdapter()
        this.reading = new Reading()
        this.hexagrams = new Hexagram()
    }

    isLoggedIn() {
        const logoutBtn = document.querySelector(".logout")
        if (!!logoutBtn){
            this.id = logoutBtn.id
        }
        return !!logoutBtn
    }

    setUserName(){
        const userChest = document.querySelector(".usersaved")
        if (userChest){
            this.name = userChest.getAttribute("alt").replace(" - Casts", "")
        }
    }
    renderSaveBtn() {
        // const hexName = document.getElementById("hexname").textContent

        if (this.isLoggedIn()) {
            const referenceDiv = document.getElementById("change_lines")
            const newDiv = document.createElement("div")
            newDiv.innerHTML = `<br><button class="button is-medium is-warning w3-animate-opacity saveBtn">Save Reading</button>`
            newDiv.classList.add("container")
            const linebreak = document.createElement("br");
            referenceDiv.appendChild(linebreak)

            referenceDiv.parentNode.insertBefore(newDiv, referenceDiv.nextSibling);
            this.addButtonUserId("saveBtn")
            this.renderAddNotes()
        }
    }

    renderAddNotes() {
        if (this.isLoggedIn()){
            const referenceDiv = document.getElementById("change_lines")
            const newDiv = document.createElement("div")
            newDiv.classList.add("container")
            newDiv.innerHTML = `<button class="button is-small is-warning is-inverted w3-animate-opacity notesBtn">+ Notes</button> <br>`
            newDiv.id = "notesDiv"

            referenceDiv.parentNode.insertBefore(newDiv, referenceDiv.nextSibling);
            const notesBtn = document.querySelector(".notesBtn")

            notesBtn.addEventListener('click', ()=>{
                const textDiv = document.createElement("div")
                const notesTextArea = document.querySelector(".notesField")
                if (notesTextArea && notesTextArea.classList.contains("clicked")) {
                    notesTextArea.closest('.clicked').remove()
                    notesBtn.textContent = "+ Notes"
                } else {
                    textDiv.innerHTML = `<div class="notesField media-content has-text-centered "> <textarea id="usernotes" cols="50" rows="6" placeholder="Add Notes"></textarea> </div>`
                    newDiv.appendChild(textDiv)
                    notesBtn.textContent = "- Notes"
                    document.querySelector(".notesField").classList.add("clicked")
                }
            })
        }
    }

    addButtonUserId(className) {
        const btn = document.querySelector(`.${className}`)
        // get Rails id from logout btn previously set on FB SDK
        btn.id = document.querySelector(".logout").id
    }

    renderNavItem(username){
        if (this.isLoggedIn()){
            const referenceDiv = document.querySelector(".navbar-end")            
            const newDiv = document.createElement("div")
            newDiv.classList.add("myreadings")
            newDiv.innerHTML = `<span class="tooltiptext">Casts</span>
            <a class="navbar-item" id="savedcasts"><img class="is-rounded usersaved" src="styles/img/gokushenron.png" alt="${username} - Casts"></a></div>`
            referenceDiv.appendChild(newDiv)
            newDiv.addEventListener('click', () => {
                this.getAllUserReadings(this.id, username)
            })
        }
    }

    getAllUserReadings(userId, userName) {
        // simple use getUserReadings(id) from adapter - 1 AJAX call. Do
        // removes current content
        const oldSection = document.querySelector(".section")

        if (oldSection){
            oldSection.remove()
        }
        // console.log(userName)
        const main = document.querySelector("main")
        const template = `<section class="section"> <div class="container w3-animate-opacity" id="section_savedcasts"> 
            <div class="has-text-centered">
            <p class="title is-1">${userName} Cast Balls</p> 
            <img class="is-rounded ball imgcasts" src="styles/img/happygokushenron.png"> </div></div> 
            <div class="container"> <ul style="list-style: none;"></ul> </div></section>`
        main.innerHTML += template
        const ul = document.querySelector("ul")
        const renderLi = (reading) => {
            // const change = reading.changenum
            if (!!reading.changenum){
                return `       <a class="navbar-item"><img class="image is-24x24" src="styles/img/ball2.png"> <li data-id=${reading.id}>Reading date: ${reading.date} | Casted Hex# ${reading.hexnum} | Changing Hex# ${reading.changenum}</li> </a>`

            } else {
                return `<a class="navbar-item"><img class="image is-24x24" src="styles/img/ball2.png"><li data-id=${reading.id}>Reading date: ${reading.date} | Casted Hex# ${reading.hexnum}</li>  </a>`
            }
        }
        this.adapter.getUserReadings(userId).then(readings => 
            // console.log(readings)
                readings.map(reading => {
                    ul.innerHTML += renderLi(reading)
                })
        )

        // main.innerHTML += ul
    }   

}