import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import confirmed from "../assets/confirmed.png"
import "../styles/bookingConfirmation.css"

export default function BookingConfirmation() {

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        date.setTime(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric"
        };
        return date.toLocaleDateString(undefined, options)
    }

    const location = useLocation();
    const {name, email, date, guests, selectedTime} = location.state;
  return (
    <div className='confirmation-section'>
      <div className='confirmation-container'>
          <div className='check-container'>
            <img src={confirmed} alt='check-mark' id='check-mark'/>
          </div>
          <h2>Booking Confirmed</h2>
          <p>
          Dear <b>{name}</b>, this message confirms your reservation for <b>{formatDate(date)}</b> at <b>{selectedTime}</b> for <b>{guests}</b> guests.
          A confirmation email has been sent to <b>{email}</b>.
          </p>
          <NavLink className="yellow-button" id='exit-home' to="/">Exit to Home</NavLink>
      </div>
    </div>
  );
}
