import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Criminal } from './Criminal.js'
import { useConvictions } from '../convictions/ConvictionProvider.js'
import { getFacilities, useFacilities } from '../facilities/FacilityProvider.js'
import { getCriminalFacilities, useCriminalFacilities } from '../facilities/CriminalFacilityProvider.js'

const eventHub = document.querySelector(".container")
const criminalsContainer = document.querySelector(".criminalsContainer")

// OLD CODE
// export const CriminalList = () => {
//     getCriminals().then(() => {
//         /*
//             Now that you have the data, what
//             component should be rendered?
//         */
//        const criminalArray = useCriminals()
//         render(criminalArray)
//     })
// }


let facilities = []
let crimFac = []
let criminalArray = []

eventHub.addEventListener("crimeChosen", event => {
        if (event.detail.findConviction !== "0") {
            const criminalArray = useCriminals()

            const convictionsArray = useConvictions()

            const findConviction = convictionsArray.find(convictionObj => {
 
                return convictionObj.id === event.detail.findConviction
                
            })
            //console.log(findConviction)
            const filterCriminal = criminalArray.filter(criminalObj => {
                return criminalObj.conviction === findConviction.name
            })
            facilities = useFacilities()
            crimFac = useCriminalFacilities()
            render(filterCriminal, facilities, crimFac)
                 
    }
})

eventHub.addEventListener("officerSelected", event => {
    const selectedOfficerName = event.detail.officer
    const criminalArray = useCriminals()
  
    const arrestingOfficer = criminalArray.filter(
      (criminalObj) => criminalObj.arrestingOfficer === selectedOfficerName)
          facilities = useFacilities()
          crimFac = useCriminalFacilities()
    render(arrestingOfficer, facilities, crimFac)
  })


  export const CriminalList = () => {
    // Kick off the fetching of both collections of data
    getFacilities()
        .then(getCriminalFacilities)
        .then(getCriminals)
        .then(
            () => {
                // Pull in the data now that it has been fetched
                facilities = useFacilities()
                crimFac = useCriminalFacilities()
                criminalArray = useCriminals()

                //console.log("criminal list", CriminalList)
                // Pass all three collections of data to render()
                render(criminalArray, facilities, crimFac)
            }
        )
}


// OLD CODE
// const render = (criminalArray) => {
  //   let criminalHTMLRepresentations = ""
  //   for (const criminal of criminalArray) {
  
  //     criminalHTMLRepresentations += Criminal(criminal)
  
  //     criminalsContainer.innerHTML = `
  //           <section class="criminalList">
  //             ${criminalHTMLRepresentations}
  //           </section>
  //         `
  //   }
  // }


const render = (criminalArray, allFacilities, allRelationships) => {
  // let criminalHTMLRepresentations = ""

  //   for (const criminal of criminalArray) {
  
  //     criminalHTMLRepresentations += Criminal(criminal)
  // Step 1 - Iterate all criminals
  criminalsContainer.innerHTML = criminalArray.map(
      (criminalObj) => {
          // Step 2 - Filter all relationships to get only ones for this criminal
          const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObj.id)

          // Step 3 - Convert the relationships to facilities with map()
          const facilities = facilityRelationshipsForThisCriminal.map(cf => {
              const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
              return matchingFacilityObject
          })

          // Must pass the matching facilities to the Criminal component
          return Criminal(criminalObj, facilities)
      }
  ).join("")

  
    }
