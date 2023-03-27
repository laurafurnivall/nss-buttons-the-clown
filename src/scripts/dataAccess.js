const applicationState = {
    reservations: []
}

const API = "http://localhost:8088"

const mainContainer = document.querySelector("#container")

export const getReservations = () => {
    return applicationState.reservations.map(r => ({ ...r }))
}
export const getClowns = () => {
    return applicationState.clowns.map(c => ({ ...c }))
}
export const getCompletions = () => {
    return applicationState.completions.map(complete => ({ ...complete }))
}


export const fetchReservations = () => {
    return fetch(`${API}/reservations`)
        .then(response => response.json())
        .then(
            (reservationRequests) => {
                applicationState.reservations = reservationRequests
            }
        )
}

export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.clowns = data
            }
        )
}

export const fetchCompletions = () => {
    return fetch(`${API}/completions`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.completions = data
            }
        )
}


export const sendReservation = (userReservationRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(userReservationRequest)
    }

    return fetch(`${API}/reservations`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const deleteReservation = (id) => {
    return fetch(`${API}/reservations/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

export const saveCompletion = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }
    
    return fetch(`${API}/completions`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
    }

