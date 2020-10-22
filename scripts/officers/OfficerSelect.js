import { getOfficers, useOfficers } from "./OfficerProvider.js"

const officersFilterContainer = document.querySelector(".filters__officer")
const eventHub = document.querySelector(".container")

export const OfficerSelect = () => {

  getOfficers()
    .then(() => {
      const officersArray = useOfficers()

      render(officersArray)
    })
}



const render = officers => {

    officersFilterContainer.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${officers.map(
                    officerObj => {
                        return `<option value="${officerObj.name}">${officerObj.name}</option>`
                    }
                    ).join("")
                }
        </select>
    `
}

eventHub.addEventListener("change", event => {
    if (event.target.id === "officerSelect") {
        const customEventOfficer = new CustomEvent("officerSelected", {
            detail: {
                officer: event.target.value
            }
        })
        eventHub.dispatchEvent(customEventOfficer)
    }
})