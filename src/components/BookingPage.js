import React, { useState, useEffect, useReducer } from "react";
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../mockAPI";
import "../styles/bookingPage.css";
import bookingImage from "../assets/restauranfood.jpg"
import { useNavigate } from "react-router-dom";

const initialTimesState = {
  availableTimes: []
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_AVAILABLE_TIMES":
      return {availableTimes: action.payload};
    default:
      return state;
  }
}

export default function BookingPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("");
  const [state, dispatch] = useReducer(reducer, initialTimesState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigateConfirm = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    submitAPI({ name, email, date, guests, occasion, selectedTime })
      .then(() => {
        console.log("Form submitted successfully!");
        navigateConfirm("./confirmation", {
          state: {
            name,
            email,
            date,
            guests,
            occasion,
            selectedTime,
          },
        });
      })
      .catch((error) => {
        console.error("Form submission failed:", error.message);
        setError(error.message);
      });
  };

  useEffect(() => {
    if (date) {
      dispatch({type: "SET_AVAILABLE_TIMES", payload: []});
      setLoading(true);
      fetchAPI(date)
        .then((times) => {
          dispatch({type: "SET_AVAILABLE_TIMES", payload: times});
          setLoading(false);
          setError(null);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }
  }, [date]);


  return (
    <section className="booking-section">
      <h2>Reserve Your Table</h2>
      <div className="form-container">
          <img src={bookingImage} alt="food" />
          <BookingForm
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            date={date}
            setDate={setDate}
            guests={guests}
            setGuests={setGuests}
            occasion={occasion}
            setOccasion={setOccasion}
            availableTimes={state.availableTimes}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
            loading={loading}
            error={error}
            handleSubmit={handleSubmit}
            submitting={submitting}
          />
      </div>
    </section>
  );
}
