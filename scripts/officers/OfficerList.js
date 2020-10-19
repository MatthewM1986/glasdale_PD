import { getOfficers, useOfficers } from './OfficerProvider.js'
import { Officer } from './Officer.js'

const officersContainer = document.querySelector(".officersContainer")

export const OfficerList = () => {
    getOfficers().then(() => {
        /*
            Now that you have the data, what
            component should be rendered?
        */
       const officerArray = useOfficers()
       let officerHTMLRepresentation = ""
        for (const officer of officerArray) {

        officerHTMLRepresentation += Officer(officer)

        officersContainer.innerHTML = `
        <section class="officerList">
            ${officerHTMLRepresentation}
        </section>
        `
        }
    })
}