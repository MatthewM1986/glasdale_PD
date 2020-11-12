export const FacilityAsHTML = (facilityObject, criminals) => {
    return `
    <div class="facility">
        <h5>facilityName: ${facilityObject.facilityName}</h5>
        <div>
          <h2>Criminals</h2>
          <ul>
              ${criminals.map(criminal => `<li>${criminal.name}</li>`).join("")}
          </ul>
        </div>
    </div>
    `
    }