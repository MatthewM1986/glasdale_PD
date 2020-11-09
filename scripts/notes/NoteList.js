import { NoteAsHTML } from './Note.js';
import { getNotes, useNotes } from './NoteProvider.js';
import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js';

// get the notes from the api >> use the notes array
// iterate the notes array >> make an html representation each
// render html string of notes to the notesContainer element on the DOM


const notesContainer = document.querySelector(".noteForm");
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", () => NoteList())

export const NoteList = () => {

  getNotes().then(getCriminals).then(() => {
    const allNotes = useNotes()
    const allCriminals = useCriminals()
    render(allNotes, allCriminals)
    })
}
//debugger
const render = (notesArray, criminalArray) => {
    let notesHTMLRepresentations = ""
    for (const note of notesArray) {
      const relatedCriminal = criminalArray.find(criminal => criminal.id === note.suspect)
      notesHTMLRepresentations += NoteAsHTML(note, relatedCriminal)
    }
    //console.log("find note", render)
   
    notesContainer.innerHTML = `
    <div class="notes">
            ${notesHTMLRepresentations}
        </div>
          `
  }




