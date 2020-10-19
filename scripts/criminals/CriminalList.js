
import { getCriminals, useCriminals } from './criminals/CriminalProvider.js'
import { Criminal } from './criminals/Criminal.js'

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
        <div class="criminal">
            ${criminalHTMLRepresentation}
        </div>
        `
        }
    })
}