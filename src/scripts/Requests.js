import { getReservations } from "./dataAccess.js";
import { getClowns } from "./dataAccess.js";
import { getCompletions } from "./dataAccess.js";
import { deleteReservation } from "./dataAccess.js";
import { saveCompletion } from "./dataAccess.js";

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if(click.target.id.startsWith("reservation--")){
        const [, reservationId] = click.target.id.split("--")
        deleteReservation(parseInt(reservationId))
    }})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [reservationId, clownId] = event.target.value.split("--")

            const completion = {
                reservationId,
                clownId,
                date_created: new Date().toLocaleDateString("en-US")
            }
            saveCompletion(completion)
        }
    }
)

export const Reservations = () => {
    const clowns = getClowns()
    const reservations = getReservations()
    const completions = getCompletions()

    let html = `<ul class="request">
    ${reservations.map(reservation => {

        if (completions.find(completion => reservation.id === parseInt(completion.reservationId))) {
            let reservationComplete = `
            <li class="reservation_complete">
            <span class="details">Reservation for ${reservation.parentName} on ${reservation.dateReserved}</span>
            <span class ="middleItem"><b>Complete</b></span>
            <button class="reservation_deny" id="reservation--${reservation.id}">Delete</button>
            </li>
            `

            return reservationComplete
        } else {
            let reservationOpen = `
            <li class="reservationOpen">
            <span class="details">Reservation for ${reservation.parentName} on ${reservation.dateReserved}</span>
            <select class="clowns" id="clowns">
                <option value="">Choose Clown</option> ${clowns.map(clown => {
                return `<option value="${reservation.id}--${clown.id}">${clown.name}</option>`

            }).join("")}
                </select>
                    <button class="reservation_deny" id="reservation--${reservation.id}">Deny</button>     
            
                 </li>`

            return reservationOpen
        }
    }).join("")
        }
 </ul>`

    return html
}