import React from 'react';
import { useLocation } from 'react-router-dom';
import './Confirmation.css';
import { FaCheckCircle } from 'react-icons/fa'; // Import a checkmark icon from FontAwesome

function Confirmation() {
  const { state } = useLocation();
  
  return (
    <div>
        <header className="header ">
        <h1>Brisphere</h1>
        <nav>
          <a href="#">Discover</a>
          <a href="#">Services</a>
          <a href="#">About Us</a>
        </nav>
      </header>
    <div className="confirmation">
      {/* Header Section */}
      

      {/* Order Confirmation Section */}
      <div className="confirmation-content">
      <div className="order-summary-container">
      <div className="user-info">
        <h3>{state.name}</h3>
        <p>{state.phone}</p>
        <p>{state.email}</p>
        <p>{state.adults} Adults and {state.children} Children</p>
      </div>

      <div className="order-complete">
        <FaCheckCircle className="check-icon" />
        <div className="order-complete-text">
          <h2>Order Complete</h2>
          
          <p>Have questions? <a href="#">Contact us</a></p>
        </div>
      </div>
    
        </div>

        {/* Booking Summary Section */}
        
        <div className="form-group">
          <div className="date-inputs">
            <div>
              <label>CHECK-IN</label>
              <p>{state.checkIn}</p>
              
            </div>
            <div>
              <label>CHECK-OUT</label>
              <p>{state.checkOut}</p>
              
            </div>
          </div>
          <div className="room-info">
            <label>Rooms</label>
            <p>{state.rooms}</p>
            
          </div>
          <div className="summary-item price">
            <label>Price</label>
            <p>₹ {state.price}</p>
          </div>

        </div>

      </div>

      {/* Footer Section */}
      
    </div>
    <footer className="footer ol">
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

export default Confirmation;
