import React, { useState } from "react";

function ReservationForm() {
    const initialValue = {
        payByCreditCard: true,
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        street: "",
        city: "",
        zip: "",
        country: ""
    };
    const [reservation, setReservation] = useState(initialValue);


    const handleSubmit = event => {
        event.preventDefault();
        window.alert([reservation]);
    }
    
    const handleChange = event => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        setReservation({ ...reservation, [name]: value });
    };

    return (
        <div>
            <form onChange={handleChange}>
                <label>Pay by Credit Card: </label>
                <input
                    name="payByCreditCard"
                    type="checkbox"
                    checked={reservation.payByCreditCard}
                    onChange={handleChange}
                />
                <br />
                <input
                    name="firstName"
                    value={reservation.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                />
                <input
                    name="lastName"
                    value={reservation.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                />
                <input
                    name="email"
                    value={reservation.email}
                    onChange={handleChange}
                    placeholder="email"
                />
                <input
                    name="phone"
                    value={reservation.phone}
                    onChange={handleChange}
                    placeholder="phone"
                />
                <input
                    name="street"
                    value={reservation.street}
                    onChange={handleChange}
                    placeholder="street"
                />
                <input
                    name="city"
                    value={reservation.city}
                    onChange={handleChange}
                    placeholder="city"
                />
                <input
                    name="zip"
                    value={reservation.zip}
                    onChange={handleChange}
                    placeholder="zip"
                />
                <input
                    name="country"
                    value={reservation.country}
                    onChange={handleChange}
                    placeholder="country"
                />
                <button onClick={handleSubmit}>send info</button>
            </form>
            <p>{JSON.stringify(reservation)}</p>
        </div>
    );
}
export default ReservationForm;