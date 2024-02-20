import React, { useEffect, useRef, useState } from "react";

export default function BookingForm({
  name,
  setName,
  email,
  setEmail,
  date,
  setDate,
  guests,
  setGuests,
  occasion,
  setOccasion,
  availableTimes,
  selectedTime,
  setSelectedTime,
  loading,
  error,
  handleSubmit,
  submitting
}) {
  const [emailTouched, setEmailTouched] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);
  const inputEmailRef = useRef(null);
  const inputNameRef = useRef(null);

  function isValidEmail(email) {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  }

  function isValidName(name) {
    const nameRegex = /^[a-zA-Z]+(?:-[a-zA-Z]+)?(?: [a-zA-Z]+(?:-[a-zA-Z]+)*)?$/;
    return nameRegex.test(name);
  }

  const handleEmailBlur = () => {
    setEmailTouched(true);
  };

  const handleNameBlur = () => {
    setNameTouched(true);
  };

  useEffect(() => {
    if (availableTimes.length > 0) {
      setSelectedTime(availableTimes[0]);
    } else {
      setSelectedTime("");
    }
  }, [availableTimes, setSelectedTime]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e)

  }

  return (
    <section className="form-section">
      <form onSubmit={handleFormSubmit}>
        <fieldset disabled={submitting}>
          <div>
            <label htmlFor="name">Enter Name: <span className="required">*</span></label>
            <input
              data-testid = "name-testid"
              placeholder="John Doe"
              type="text"
              id="name"
              ref={inputNameRef}
              value={name}
              onBlur={handleNameBlur}
              onChange={(e) => setName(e.target.value)}
            />
            {nameTouched && !isValidName(name) && <p id="error-message">Please enter a valid name.</p>}
          </div>

          <div>
            <label htmlFor="email">Enter Email: <span className="required">*</span></label>
            <input
              data-testid = "email-testid"
              placeholder="someone@example.com"
              ref={inputEmailRef}
              type="email"
              id="email"
              value={email}
              onBlur={handleEmailBlur}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailTouched && !isValidEmail(email) && <p id="error-message">Please enter a valid email.</p>}
          </div>
          <div>
            <label htmlFor="res-date">Choose Date: <span className="required">*</span></label>
            <input
              type="date"
              id="res-date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="res-time">Choose Time: </label>
            <select
              id="res-time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              disabled={availableTimes.length === 0}
            >
              {availableTimes.map((time, index) => (
                <option key={index} value={time}>{time}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="res-guests">Number of Guests: </label>
            <select
              id="res-guests"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
            >
              {[...Array(10).keys()].map((index) => (
                <option key={index + 1} value={index + 1}>{index + 1}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="res-occasion">Occasion <span id="optional">(optional)</span>:</label>
            <select
              id="res-occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option value="">Select</option> {/* Placeholder option */}
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>

          <div className="reserve-button">
            <input type="submit" value="Confirm Reservation" id="submit-button" disabled={!selectedTime || !isValidName(name) || !isValidEmail(email)} />
          </div>

          {error && <p id="error-message">{error}</p>}
        </fieldset>
      </form>
    </section>
  );
}
