class User {
    constructor(name, uid){
        this.name = name
        this.uid = uid
        this.adapter = new ApiAdapter()
        // this.reading = new Reading()
        // getting readings through Hexagram. Hexagram has methods will need.
        this.hexagrams = new Hexagram()
    }

    isLoggedIn() {
        const logoutBtn = document.querySelector(".logout")
        return !!logoutBtn
    }

    setUserName(){
        const userChest = document.querySelector(".usersaved")
        if (userChest){
            this.name = userChest.getAttribute("alt").replace(" - Casts", "")
        }
    }
    renderSaveBtn() {
        const hexName = document.getElementById("hexname").textContent

        if (this.isLoggedIn() && !!hexName) {
            const referenceDiv = document.getElementById("change_lines")
            const newDiv = document.createElement("div")
            newDiv.innerHTML = `<br><button class="button is-medium is-warning is-inverted w3-animate-opacity saveBtn">Save Reading</button>`
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
            newDiv.innerHTML = `<button class="button is-small is-warning w3-animate-opacity notesBtn">+ Notes</button> <br>`

            referenceDiv.parentNode.insertBefore(newDiv, referenceDiv.nextSibling);
        }
    }

    addButtonUserId(className) {
        const btn = document.querySelector(`.${className}`)
        // get uid from logout btn previously set on FB SDK
        btn.id = document.querySelector(".logout").id
    }

    renderNavItem(username){
        if (this.isLoggedIn()){
            const referenceDiv = document.querySelector(".navbar-end")            
            const newDiv = document.createElement("div")
            newDiv.classList.add("myreadings")
            newDiv.innerHTML = `<span class="tooltiptext">Casts</span>
            <a class="navbar-item"><img class="is-rounded usersaved" src="styles/img/gokushenron.png" alt="${username} - Casts"></a></div>`
            referenceDiv.appendChild(newDiv)
        }
    }

    saveReading(){

    }
}