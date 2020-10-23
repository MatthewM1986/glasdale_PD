import { saveNote } from './NoteProvider.js'

const contentTarget = document.querySelector(".noteForm")
const eventHub = document.querySelector(".container")

const render = () => {
    contentTarget.innerHTML = `
        <input type="date" id="date"></input>
        <input type="text" id="officer-name" placeholder="Name of Officer"></input>
        <input type="text" id="suspect-name" placeholder="Name of Suspect"></input>
        <textarea id="note-text" placeholder="Take Notes"></textarea>
        <button id="submit-note">Submit Note</button>
    `
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submit-note") {
        const dateOfQuestioning = document.querySelector("#date").value
        const officer = document.querySelector("#officer-name").value
        const suspect = document.querySelector("#suspect-name").value
        const notes = document.querySelector("#note-text").value
        // Make a new object representation of a note
        const newNote = {
            dateOfQuestioning,
            officer,
            suspect,
            notes
        }

        // Change API state and application state
        console.log(newNote)
        saveNote(newNote)
    }
})

export const NoteForm = () => {
    render()    
}