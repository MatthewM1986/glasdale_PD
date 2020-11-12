import { getFacilities, useFacilities } from './FacilityProvider.js'
import { FacilityAsHTML } from './Facilities.js'



const facilityContainer = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("facilityChosen", () => {

    FacilityList()
  })

const FacilityList = () => {
    getFacilities().then(() => {

       const facilityArray = useFacilities()
       render(facilityArray)
    })
}
    const render = (facilityArray) => {
       let facilityHTMLRepresentation = ""
        for (const facility of facilityArray) {

            facilityHTMLRepresentation += FacilityAsHTML(facility)

            facilityContainer .innerHTML = `
        <section class="facility__button">
            ${facilityHTMLRepresentation}
        </section>
        `
        }
}