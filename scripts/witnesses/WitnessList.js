import { getWitnesses, useWitnesses } from "./WitnessProvider.js"
import { StatementAsHTML } from './Witness.js'

const witnessesContainer = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("witnessesChosen", () => {

    WitnessList()
  })

const WitnessList = () => {
    getWitnesses().then(() => {

       const witnessArray = useWitnesses()
       render(witnessArray)
    })
}
    const render = (witnessArray) => {
       let witnessHTMLRepresentation = ""
        for (const witness of witnessArray) {

            witnessHTMLRepresentation += StatementAsHTML(witness)

            witnessesContainer.innerHTML = `
        <section class="witnessList">
            ${witnessHTMLRepresentation}
        </section>
        `
        }
}