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

    let criminalHTMLRepresentation = ""
       
       for (const criminal of criminalArray) {

        criminalHTMLRepresentation += Criminal(criminal)

        criminalsContainer.innerHTML = `
        <section class="criminalList">
            ${criminalHTMLRepresentation}
        </section>
        `
        }
    })
}


eventHub.addEventListener("crimeChosen", event => {
   console.log(event)
        if (event.detail.crimeThatWasChosen !== "0") {
                //debugger 
            const criminalArray = useCriminals()

            const convictionsArray = useConvictions()

            const findConviction = convictionsArray.find(convictionObj => {
                return convictionObj.id === event.detail.crimeThatWasChosen
                
            })
            //console.log(findConviction)
            const filterCriminal = criminalArray.filter(criminalObj => {
                return criminalObj.conviction === findConviction.name
            })

                let criminalHTMLRepresentation = ""
       
                for (const criminal of filterCriminal) {
         
                 criminalHTMLRepresentation += Criminal(criminal)
            }
                 criminalsContainer.innerHTML = `
                 <section class="criminalList">
                     ${criminalHTMLRepresentation}
                 </section>
                 `
                 
    }
})