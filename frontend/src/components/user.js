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
        const hexName = document.getElementById("hexname").textContent

        if (this.isLoggedIn() && !!hexName) {
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
        }
    }

}