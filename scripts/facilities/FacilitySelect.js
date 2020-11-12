const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".facilityList")

export const FacilityButton = () => {

    contentTarget.innerHTML = `
      <button id="facility-button">Facility List</button>
      `
  }

eventHub.addEventListener("click", event => {
    if (event.target.id === "facility-button") {
        const chooseFacility = new CustomEvent("facilityChosen")

        eventHub.dispatchEvent(chooseFacility)
    }
})