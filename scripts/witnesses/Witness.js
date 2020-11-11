export const StatementAsHTML = (witnessObject) => {
    return `
    <div class="witness">
        <h5>Name: ${witnessObject.name}</h5>
        <p>Statement: ${witnessObject.statements}</p>
    </div>
    `
    }