export const NoteAsHTML = (noteObject, criminalObj) => {
    return `
    <div class="notes">
        <h3>Officer: ${noteObject.officer}</h3>
        <p>Suspect: ${criminalObj.name}</p>
        <p>Date of Questioning: ${noteObject.dateOfQuestioning}</p>
        <p>Notes: ${noteObject.notes}</p>
        <button id="deleteNote--${noteObject.id}">Delete</button>
    </div>
    `
    }