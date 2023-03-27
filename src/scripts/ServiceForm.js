import { sendReservation } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {

        const userName = document.querySelector("input[name='reservationParent']").value
        const userChildName = document.querySelector("input[name='reservationChild']").value
        const userAttendance = document.querySelector("input[name='reservationAttendance']").value
        const userAddress = document.querySelector("input[name='reservationAddress']").value
        const userDate = document.querySelector("input[name='reservationDate']").value
        const userReservationTime = document.querySelector("input[name='reservationTime']").value
    
        const dataToSendToAPI = {
            parentName: userName,
            childName: userChildName,
            attendance: userAttendance,
            address: userAddress,
            dateReserved: userDate,
            partyLength: userReservationTime
        }

        sendReservation(dataToSendToAPI)
    }
})

export const ReservationForm = () => {
    let html = `
    <div class="field">
        <label class="label" for="reservationParent">Your Name:</label>
        <input type="text" name="reservationParent" class="input" />
    </div>
    <div class="field">
        <label class="label" for="reservationChild">Child's Name:</label>
        <input type="text" name="reservationChild" class="input" />
    </div>
    <div class="field">
        <label class="label" for="reservationAttendance">Amount of Attendees:</label>
        <input type="number" name="reservationAttendance" class="input" />
    </div>
    <div class="field">
        <label class="label" for="reservationAddress">Address:</label>
        <input type="text" name="reservationAddress" class="input" />
    </div>
    <div class="field">
        <label class="label" for="reservationDate">Date needed:</label>
        <input type="date" name="reservationDate" class="input" />
    </div>
    <div class="field">
        <label class="label" for="reservationTime">Length of Reservation:</label>
        <input type="number" name="reservationTime" class="input" />
    </div>

    <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}