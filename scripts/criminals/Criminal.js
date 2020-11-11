const eventHub = document.querySelector(".container")

export const Criminal = (criminalObj, facilities) => {
    return `
    <div id="criminal-${criminalObj.id}" class="criminal">
        <h4>${criminalObj.name}</h4>
        <div class="criminal__details">
            <p>Convicted for ${criminalObj.conviction}</p>
            <p>Arrested by ${criminalObj.arrestingOfficer}</p>
            <p>Incarcerated between:
                ${new Date(criminalObj.incarceration.start).toLocaleDateString()} and
                ${new Date(criminalObj.incarceration.end).toLocaleDateString()}
            </p>
            <p>Age: ${criminalObj.age}</p>
            <div>
                <h2>Facilities</h2>
                <ul>
                    ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
                </ul>
            </div>
            <button id="associates--${criminalObj.id}">Show Associates</button>
        </div>
    </div>
    `
}

eventHub.addEventListener("click", (eventObj) => {
    const [nameofId, criminalId] = eventObj.target.id.split("--")
    if(eventObj.target.id.startsWith("associates--")){
        const myCustomEvent = new CustomEvent("alibiButtonClicked",{
            detail: {
                criminalId: criminalId
            }
        })
        eventHub.dispatchEvent(myCustomEvent)
    }
})