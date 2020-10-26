const eventHub = document.querySelector(".container")

export const Criminal = (criminalObj) => {
    return `
    <div id="criminal-${criminalObj.id}" class="criminal">
        <h5>${criminalObj.name}</h5>
        <p>Age: ${criminalObj.age}</p>
        <p>Crime: ${criminalObj.conviction}</p>
        <p>Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
        <p>Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
        <button id="associates--${criminalObj.id}">Associate Alibis</button>
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