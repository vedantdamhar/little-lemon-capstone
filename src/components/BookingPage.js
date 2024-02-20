import React, { useState, useEffect } from "react";
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../mockAPI";
import "../styles/bookingPage.css";
import bookingImage from "../assets/restauranfood.jpg"
import { useNavigate } from "react-router-dom";

export default function BookingPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);
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
      setAvailableTimes([]);
      setLoading(true);
      fetchAPI(date)
        .then((times) => {
          setAvailableTimes(times);
          setLoading(false);
          setError(null);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }
  }, [date]);

  useEffect(() => {
    console.log(availableTimes);
    console.log(error);
  })

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
            availableTimes={availableTimes}
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
