export const NoteAsHTML = (noteObject, criminalObj) => {
    return `
    <div class="notes">
        <h5>Officer: ${noteObject.officer}</h5>
        <p>Suspect: ${criminalObj.name}</p>
        <p>Date of Questioning: ${noteObject.dateOfQuestioning}</p>
        <p>Notes: ${noteObject.notes}</p>
    </div>
    `
    }