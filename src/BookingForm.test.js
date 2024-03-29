import React from 'react';
import { render, waitFor, screen, fireEvent, act } from '@testing-library/react';
import BookingForm from './components/BookingForm';

describe('BookingForm Component', () => {
  it('should display error message for invalid date', async () => {
    const initialState = {
      name: 'John Doe',
      setName: () => {},
      email: 'john@example.com',
      setEmail: () => {},
      date: '2024-01-13',
      setDate: () => {},
      guests: 2,
      setGuests: () => {},
      occasion: 'Birthday',
      setOccasion: () => {},
      availableTimes: [],
      selectedTime: '',
      setSelectedTime: () => {},
      error: `No available times for 2024-01-13. Please try another date.`,
      handleSubmit: () => {},
      submitting: false,
    };

    render(<BookingForm {...initialState} />);

    await waitFor(() => {
        const dateErrorMessage = screen.getByText(/No available times for 2024-01-13. Please try another date./i)
        expect(dateErrorMessage).toBeInTheDocument();
    }, {timeout:1000})
  });

  it ('should keep submit button disabled with at least one invalid input', async () => {
    const initialState = {
      name: 'John123',
      setName: () => {},
      email: 'john@example.com',
      setEmail: () => {},
      date: '2024-02-27',
      setDate: () => {},
      guests: 2,
      setGuests: () => {},
      occasion: 'Birthday',
      setOccasion: () => {},
      availableTimes: ['2:30 PM', '3:30 PM', '4:30 PM'],
      selectedTime: '3:30 PM',
      setSelectedTime: () => {},
      error: null,
      handleSubmit: () => {},
      submitting: false,
    };

    const {getByRole, getByTestId} = render(<BookingForm {...initialState} />);
    const submitButton = getByRole('button', {name: /Confirm Reservation/i});
    expect(submitButton).toBeDisabled();
  })

  it ('should display error message with invalid name, and/or invalid email', async () => {
    const initialState = {
      name: 'John123',
      setName: () => {},
      email: 'johnexample.com',
      setEmail: () => {},
      date: '2024-02-20',
      setDate: () => {},
      guests: 2,
      setGuests: () => {},
      occasion: 'Birthday',
      setOccasion: () => {},
      availableTimes: ['10:00', '11:00', '12:00'],
      selectedTime: '11:00',
      setSelectedTime: () => {},
      error: null,
      handleSubmit: () => {},
      submitting: false,
    };

    const {getByTestId} = render(<BookingForm {...initialState} />);

    act(() => {
      getByTestId('name-testid').focus();
      getByTestId('name-testid').blur();
      getByTestId('email-testid').focus();
      getByTestId('email-testid').blur();
    })

    await waitFor(() => {
      const nameErrorMessage = screen.getByText("Please enter a valid name.", {exact: true})
      expect(nameErrorMessage).toBeInTheDocument();
      const emailErrorMessage = screen.getByText("Please enter a valid email.", {exact: true})
      expect(emailErrorMessage).toBeInTheDocument();
    })
  })
});
