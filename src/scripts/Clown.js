import { ReservationForm } from "./ServiceForm.js";
import { Reservations } from "./Requests.js";

export const Clown = () => {
    return `
    <h1>Buttons and Lollipop the Clowns</h1>
    <section class ="reservationForm">
        <h2>Reserve Your Clown</h2>
        ${ReservationForm()}
    </section>

    <section class="reservationRequests">
        <h2>Reservation Requests</h2>
        ${Reservations()}
    </section>
    `
}