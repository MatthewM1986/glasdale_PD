import { NoteAsHTML } from './Note.js';
import { getNotes, useNotes } from './NoteProvider.js';

// get the notes from the api >> use the notes array
// iterate the notes array >> make an html representation each
// render html string of notes to the notesContainer element on the DOM


const notesContainer = document.querySelector(".noteForm");
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", () => NoteList())

export const NoteList = () => {

  getNotes().then(() => {
    const allNotes = useNotes()
    render(allNotes)
    })
}
const render = (notesArray => {
    let notesHTMLRepresentations = ""
    for (const note of notesArray) {
      notesHTMLRepresentations += NoteAsHTML(note)
    }
   
    notesContainer.innerHTML = `
    <div class="notes">
            ${notesHTMLRepresentations}
        </div>
          `
  })