import { getWitnesses, useWitnesses } from "./WitnessProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".witnessList")

export const WitnessButton = () => {

    contentTarget.innerHTML = `
      <button id="witness-button">Witness Statements</button>
      `
  }

eventHub.addEventListener("click", event => {
    if (event.target.id === "witness-button") {
        const chooseWitnesses = new CustomEvent("witnessesChosen")

        eventHub.dispatchEvent(chooseWitnesses)
    }
})