import { saveNote } from './NoteProvider.js'
import  '../criminals/Criminal.js'
import { useCriminals, getCriminals } from '../criminals/CriminalProvider.js'

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

    const render = (criminalCollection) => {
        contentTarget.innerHTML = `
            <input type="date" id="date"></input>
            <select id="notes--criminal" class="dropdown">
            <option value="0">Please select a criminal...</option>
            ${criminalCollection.map(
                criminalObj => {
                return `<option value ="${criminalObj.id}">${criminalObj.name}</option>`
            }
            ).join("") 
        }
            <input type="text" id="officer-name" placeholder="Name of Officer"></input>
            <textarea id="note-text" placeholder="Take Notes"></textarea>
            </select>
            <button id="submit-note">Submit Note</button>
        `
        //console.log("RenderHTML", render)
    }



eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submit-note") {
        const dateOfQuestioning = document.querySelector("#date").value
        // + symbols equals parseInt
        const suspect = +document.querySelector("#notes--criminal").value
        const officer = document.querySelector("#officer-name").value
        const notes = document.querySelector("#note-text").value
        // Make a new object representation of a note
        const newNote = {
            dateOfQuestioning,
            suspect,
            officer,
            notes
        }

        // Change API state and application state
     
        saveNote(newNote)
    }
})

export const NoteForm = () => {
    getCriminals()
    .then(() => {
      const criminalCollection = useCriminals()
    render(criminalCollection)    
})
}