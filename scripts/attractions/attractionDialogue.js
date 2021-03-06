// previewList.js listens for a details button to be pressed and is redirected here 
// Presents additional attraction information to the user via dialogue box

import { useAttractions } from "./AttractionProvider.js"

const eventHub = document.querySelector(".container")
const attractionDialog = document.querySelector(".dialogContainer")

const boolConvert = (bool) => {
    if(bool === true) {
        return "Yes"
    } else {
        return "No"
    }
}

//Renders the dialog box to the DOM for a specific attraction when invoked
const dialogBox = (attraction) => {
    attractionDialog.innerHTML = `
    <dialog id="dialog">
    <h2>${attraction.name}</h2>
        <p>🛍️ Sells souvenirs: ${boolConvert(attraction.ameneties.souvenirs)}</p>
        <p>🚻  Restroom available: ${boolConvert(attraction.ameneties.restrooms)}</p>
        
 
    <button class="button--close" id="button--close">Close</button>
    </dialog>
    `
}
//Listens for a custom event, "attractionClick", to render and open dialog box
eventHub.addEventListener("attractionClick", e => {
    const attractions = useAttractions()
    const attractionId = parseInt(e.detail.attractionButton)
    const foundAttraction = attractions.find( (attraction) => attraction.id === attractionId)

    //console.log("click is listening", e.detail.attractionButton)
    dialogBox(foundAttraction)
    const theDialog = document.querySelector("#dialog")
    theDialog.showModal()
})

//Listens for a click event on "Close" button to close the dialog box
eventHub.addEventListener("click", e => {
    if(e.target.id === "button--close") {
        const theDialog = document.querySelector("#dialog")
       theDialog.close()
    }
})



    