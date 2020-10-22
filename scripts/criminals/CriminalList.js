import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Criminal } from './Criminal.js'
import { useConvictions } from '../convictions/ConvictionProvider.js'

const eventHub = document.querySelector(".container")
const criminalsContainer = document.querySelector(".criminalsContainer")

export const CriminalList = () => {
    getCriminals().then(() => {
        /*
            Now that you have the data, what
            component should be rendered?
        */
       const criminalArray = useCriminals()
        render(criminalArray)
    })
}


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
            render(filterCriminal)
                 
    }
})

eventHub.addEventListener("officerSelected", event => {
    const selectedOfficerName = event.detail.officer
    const criminalArray = useCriminals()
  
    const arrestingOfficer = criminalArray.filter(
      (criminalObj) => criminalObj.arrestingOfficer === selectedOfficerName)
  
    render(arrestingOfficer)
  })
  
  
  const render = (criminalArray) => {
    let criminalHTMLRepresentations = ""
    for (const criminal of criminalArray) {
  
      criminalHTMLRepresentations += Criminal(criminal)
  
      criminalsContainer.innerHTML = `
            <section class="criminalList">
              ${criminalHTMLRepresentations}
            </section>
          `
    }
  }