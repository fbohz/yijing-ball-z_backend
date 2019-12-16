class User {
    constructor(name, uid){
        this.name = name
        this.uid = uid
        this.adapter = new ApiAdapter()
        this.reading = new Reading()
    }

    renderSaveBtn() {
        const logoutBtn = document.querySelector(".logout")
        const hexName = document.getElementById("hexname").textContent

        if (logoutBtn && !!hexName) {
            const saveBtn = document.createElement("button")
            saveBtn.classList.add("button", "is-medium", "is-warning", "is-inverted", "w3-animate-opacity", "saveBtn")
            saveBtn.textContent = "Save Reading"
            const referenceDiv = document.getElementById("change_lines")
            const linebreak = document.createElement("br");
            referenceDiv.appendChild(linebreak)

            referenceDiv.parentNode.insertBefore(saveBtn, referenceDiv.nextSibling);
            this.addButtonUserId("saveBtn")
        }
    }

    addButtonUserId(className) {
        const btn = document.querySelector(`.${className}`)
        // get uid from logout btn previously set on FB SDK
        btn.id = document.querySelector(".logout").id
    }

    saveReading(){
        const saveBtn = document.querySelector(".saveBtn")
        const user = saveBtn.id
    }
}