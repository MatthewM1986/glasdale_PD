import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Criminal } from './Criminal.js'

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