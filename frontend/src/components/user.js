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
        // removes current content
        const oldSection = document.querySelector(".section")
        const resultsCont = document.getElementById("results_container")
        const read_date = document.getElementById("date_read")

        if (oldSection){
            oldSection.remove()
        } else if (resultsCont && read_date){
            resultsCont.remove()
            read_date.remove()
        } 

        const main = document.querySelector("main")
        const template = `<section class="section"> <div class="container w3-animate-opacity" id="section_savedcasts"> 
            <div class="has-text-centered">
            <p class="title is-1">${userName} Cast Balls</p> 
            <img class="is-rounded ball imgcasts" src="styles/img/happygokushenron.png"> </div></div> 
            <div class="container"> <ul style="list-style: none;"></ul> </div></section>`
        main.innerHTML += template
        const ul = document.querySelector("ul")
        const renderLi = (reading) => {
            if (!!reading) {
                if (!!reading.changenum){
                    return `<a id="${reading.id}" class="navbar-item reading_li"><img class="image is-24x24" src="styles/img/ball2.png"> <li class=""> &nbsp;Reading Date: <strong> ${reading.date} </strong> | Casted Hex# <strong>${reading.hexnum}</strong> | Changing Hex# <strong>${reading.changenum}</strong>&nbsp;<i class="fas fa-times-circle delete_reading"></i></li> </a>`

                } else {
                    return `<a id="${reading.id}" class="navbar-item reading_li"><img class="image is-24x24" src="styles/img/ball2.png"> <li class=""> &nbsp;Reading Date: <strong> ${reading.date} </strong> | Casted Hex# <strong>${reading.hexnum}</strong> &nbsp; <i class="fas fa-times-circle delete_reading"></i></li>  </a>`
                }
            } else {
                return `<li>No readings saved. Cast a new reading and save to add one!</li>`
            }
        }
        this.adapter.getUserReadings(userId).then(readings => 
                readings.map(reading => {
                    ul.innerHTML += renderLi(reading)
                })
        )
        setTimeout(() => { this.reading.xButtonsListeners()}, 600);  
        setTimeout(() => { this.showBtnListener()}, 600);        
        
    } 

    showBtnListener(){
        const lisNodes = document.querySelectorAll(".reading_li")
        lisNodes.forEach(li => {
            li.addEventListener('click', e => {
                const aTag = e.target.closest("a")
                this.showUserReading(aTag.id)
            })
        })
        
    }
    
    showUserReading(reading_id) {
        console.log(reading_id)
        const oldSection = document.querySelector(".section")

        if (oldSection){
            oldSection.remove()
        } 

        const main = document.querySelector("main")
        let template = ` <div id="date_read" class="">  </div> <div id="results_container" class="results w3-animate-opacity" style="display:none;"> <div class="columns is-multiline is-1-mobile is-centered"> <div id="fist_hexagram" class="column is-half"> <p id="hexname"></p> <object id="result_hex" class="" type="image/svg+xml" width="202" height="202" data=""></object> <p id="hexnum"> </p> <p id="judgement"></p> <p id="image"></p> </div> <div id="second_hexagram" class="column is-half"> <p id="changehexname"></p> <object id="change_hex" class="" type="image/svg+xml" width="202" height="202" data=""></object> <p id="changenum"> </p> <p id="chjudgement"></p> <p id="chimage" ></p> </div> </div> <div id="change_lines" class=""> </div> <div id="notes_usr"> </div> </div>`
        
        main.innerHTML += template

        this.adapter.getSingleReading(reading_id).then(reading => {
            
            if (!!reading.changenum) {
                this.hexagrams.getHexagrams(reading.hexnum, reading.changenum)
                this.hexagrams.renderHexagrams(reading.hexnum, reading.changenum)
                document.getElementById("change_lines").innerHTML += reading.changelines
                document.getElementById("date_read").innerHTML = `<h4><strong>Reading Date: </strong> ${reading.date}</h4>`
                this.hexagrams.saveReadingAttributes(reading.hexnum, reading.changenum)
            } else {
                this.hexagrams.getHexagrams(reading.hexnum)
                this.hexagrams.renderHexagrams(reading.hexnum)
                document.getElementById("date_read").innerHTML = `<h4><strong>Reading Date: </strong> ${reading.date}</h4>`
                this.hexagrams.saveReadingAttributes(reading.hexnum)
            }

            if (!!reading.notes) {
                const notes = document.getElementById("notes_usr")
                notes.style.display = 'block'
                notes.innerHTML = `<h3><strong>Notes</strong></h3> <p id="un_input">${reading.notes}</p>`
            }
            this.renderEditBtn()
        })
    }

    renderEditBtn() {
        if (this.isLoggedIn()) {
            const referenceDiv = document.getElementById("notes_usr")
            const newDiv = document.createElement("div")
            newDiv.innerHTML = `<br><button class="button is-medium is-warning is-inverted w3-animate-opacity editBtn">Edit Notes </button>`
            newDiv.classList.add("container")

            referenceDiv.parentNode.insertBefore(newDiv, referenceDiv.nextSibling);
            this.addButtonUserId("editBtn")
            setTimeout(() => { this.editBtnListener()}, 600);
        }
    }

    editBtnListener(){
        const notesNode = document.getElementById("notes_usr")
        const notesText = document.getElementById("un_input").textContent
        
            const editBtn = document.querySelector(".editBtn")
            editBtn.addEventListener('click', ()=>{
                    notesNode.innerHTML =  `<div class="notesField media-content has-text-centered "> <textarea id="notes_usr" cols="50" rows="6">${notesText}</textarea><br></div>`
                    notesNode.classList.add("clicked")
                    editBtn.textContent = "Update Notes"
                    editBtn.classList.remove("editBtn")
                    editBtn.classList.add("updateBtn")
                    discardListen()

                })
       const discardListen = () => {
        if (notesNode.classList.contains("clicked")) {
           const updateBtn = document.querySelector(".updateBtn")
           const notesUp = document.querySelector("textarea#notes_usr")
           updateBtn.addEventListener ('click', e => {
                // console.log(notesUp.value)
                notesNode.innerHTML = `<h3><strong>Notes</strong></h3> <p id="un_input">${notesUp.value}</p>`
                this.reading.confMessage("Reading Notes Successfully Updated!", "flashmsg")
                updateBtn.textContent = "Edit Notes"
                updateBtn.classList.add("editBtn")
                updateBtn.classList.remove("updateBtn")
            //    this.adapter.updateReading(notesUp.value, updateBtn.id)
            })   
       }
       }         
    }
}