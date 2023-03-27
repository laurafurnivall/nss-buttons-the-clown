import { Clown } from "./Clown.js";
import { fetchReservations, fetchClowns, fetchCompletions } from "./dataAccess.js";

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchReservations()
        .then(() => fetchClowns())
        .then(() => fetchCompletions())
        .then(
           () => {
            mainContainer.innerHTML = Clown()
           } 
        )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    CustomEvent => {render()}
)

