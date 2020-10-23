export const NoteAsHTML = (noteObject) => {
    return `
    <div class="notes">
        <p>Officer: ${noteObject.officer}</p>
        <p>Suspect: ${noteObject.suspect}</p>
        <p>Date of Questioning: ${noteObject.dateOfQuestioning}</p>
        <p>Notes: ${noteObject.notes}</p>
    </div>
    `
    }