import { getFacilities, useFacilities } from './FacilityProvider.js'
import { FacilityAsHTML } from './Facilities.js'
import { getCriminalFacilities, useCriminalFacilities } from './CriminalFacilityProvider.js'
import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js'

const facilityContainer = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")


let criminals = []
let facilities = []
let crimFac = []

eventHub.addEventListener("facilityChosen", () => {

    FacilityList()
  })

const FacilityList = () => {
    // Kick off the fetching of both collections of data
    getFacilities()
    .then(getCriminalFacilities)
        .then(getCriminals)
        .then(
            () => {
                // Pull in the data now that it has been fetched
                facilities = useFacilities()
                crimFac = useCriminalFacilities()
                criminals = useCriminals()

                //console.log("criminal list", CriminalList)
                // Pass all three collections of data to render()
                render()
            }
        )
}

    const render = () => {
            facilityContainer.innerHTML = `
            <section class="facility-button">
            ${facilities.map(facility => {

            const criminalRelationshipsForThisFacility = crimFac.filter(cf => cf.facilityId === facility.id)
            const matchedCriminals = criminalRelationshipsForThisFacility.map(cf => {
                const matchingCriminalObject = criminals.find(criminal => criminal.id === cf.criminalId)
                return matchingCriminalObject
            })
            return FacilityAsHTML(facility, matchedCriminals)
            }
            ).join("")
          
            
            }
        </section>
        `
        }
    //}