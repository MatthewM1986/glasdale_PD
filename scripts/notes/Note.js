export const NoteAsHTML = (noteObject) => {
    return `
    <div class="notes">
        <h5>Officer: ${noteObject.officer}</h5>
        <p>Suspect: ${noteObject.suspect}</p>
        <p>Date of Questioning: ${noteObject.dateOfQuestioning}</p>
        <p>Notes: ${noteObject.notes}</p>
    </div>
    `
    }