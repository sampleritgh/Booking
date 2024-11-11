// src/pages/BookingDetails.js
/* BookingDetails.css */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookingDetails.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function BookingDetails() {
  // Define state variables with useState
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [checkInDate, setCheckInDate] = useState(new Date('2024-11-11'));
  const [checkOutDate, setCheckOutDate] = useState(new Date('2024-11-11'));

  const navigate = useNavigate();

  const handleConfirmBooking = () => {
    navigate('/confirmation', {
      state: {
        name,
        email,
        phone,
        adults,
        children,
        checkIn: checkInDate.toLocaleDateString('en-GB'),
        checkOut: checkOutDate.toLocaleDateString('en-GB'),
        rooms,
        price: rooms * 12430
      }
    });
  };

  return (
    <div className="booking-details">
      <header className="header">
        <h1>Brisphere</h1>
        <nav>
          <a href="#">Discover</a>
          <a href="#">Services</a>
          <a href="#">About Us</a>
        </nav>
      </header>

      <h2 className="lav">Booking Details</h2>
      <div className="form">
        {/* Name and Email Row */}
        <div className="form-group">
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        {/* Phone, Adults, and Children Row */}
        <div className="form-group">
          <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <input type="number" placeholder="Adults" value={adults} onChange={(e) => setAdults(Number(e.target.value))} />
          <input type="number" placeholder="Children" value={children} onChange={(e) => setChildren(Number(e.target.value))} />
        </div>

        {/* Date Pickers */}
        <div className="form-group">
          <div className="date-inputs">
            <div>
              <label>CHECK-IN</label>
              <DatePicker selected={checkInDate} onChange={(date) => setCheckInDate(date)} />
            </div>
            <div>
              <label>CHECK-OUT</label>
              <DatePicker selected={checkOutDate} onChange={(date) => setCheckOutDate(date)} />
            </div>
          </div>
          <div className="room-info">
            <label>Rooms</label>
            <div className="room-counter">
              <button onClick={() => setRooms(rooms > 1 ? rooms - 1 : 1)}>-</button>
              <span>{rooms}</span>
              <button onClick={() => setRooms(rooms + 1)}>+</button>
              

            </div>
            
          </div>
        </div>

        <button className="confirm-btn" onClick={handleConfirmBooking}>
          <span>₹ {rooms * 12430}</span>
        </button>
      </div>
      <footer className="footer lavv">
        <div className="footer-content">
          <h3>Brisphere</h3>
          <p>Spituk, Ladakh, India, 194101</p>
          <p>+91 - 7764997033</p>
          <p>amit.jha6700@gmail.com</p>
          <button className="location-btn">Location</button>
        </div>
      </footer>
    </div>
  );
}

// Ensure default export
export default BookingDetails;
