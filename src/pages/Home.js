// src/pages/Home.js
// ... (previous imports and code)

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { FaWifi, FaUtensils, FaHome } from 'react-icons/fa'; // Icons for services
import { FaFacebook, FaInstagram } from 'react-icons/fa';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../App.css';
import './Home.css';

const Home = () => {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [rooms, setRooms] = useState(0);
  const navigate = useNavigate();

  const handleRoomChange = (type) => {
    setRooms((prevRooms) => (type === 'increase' ? prevRooms + 1 : prevRooms > 1 ? prevRooms - 1 : 1));
  };
  


  const handleBooking = () => {
    navigate('/booking-details', {
      state: { checkInDate, checkOutDate, rooms },
    });
  };

    return (
    <div>
      <div className="home-container">
        <header className="header">
          <h1>Brisphere</h1>
          <nav>
            <a href="#">Discover</a>
            <a href="#">Services</a>
            <a href="#">About Us</a>
          </nav>
        </header>
  
        <div className="main-content">
        <div className="ladakh-section">
      <div className="text-content">
        <h2>Work from Ladakh</h2>
        <p>India's first true digital tourism ecosystem</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
        </div>
      </div>
      <div className="image-content">
        <img
          src="https://res.cloudinary.com/dahbhrlua/image/upload/v1731305137/istockphoto-968630976-1024x1024_r2vtvb.jpg"
          alt="Ladakh Landscape"
          className="ladakh-image"
        />
      </div>
    </div>
  
          <div className="booking-card">
          <div className="booking-form">
          <div className="booking-section">
            <label>CHECK-IN</label>
            <DatePicker
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              dateFormat="dd MMM yyyy"
              className="date-picker"
            />
          </div>
          <div className="divider"></div>
          <div className="booking-section">
            <label>CHECK-OUT</label>
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              dateFormat="dd MMM yyyy"
              className="date-picker"
            />
          </div>
          <div className="divider"></div>
          <div className="booking-section room-selection">
            <label>ROOMS</label>
            <div className="room-controls">
              <button onClick={() => handleRoomChange('decrease')} className="room-button"><FaMinus /></button>
              <span>{rooms}</span>
              <button onClick={() => handleRoomChange('increase')} className="room-button"><FaPlus /></button>
            </div>
          </div>
          <button className="book-button" onClick={handleBooking}>BOOK</button>
        </div>
      </div>
  
          {/* Discover Section */}
          <section className="discover-section">
            <h2>Discover</h2>
            <div className="review-cards">
              <div className="review-card">
               
                <h3>Arjun Raghav</h3>
                <p>⭐⭐⭐⭐</p>
                <p>I am writing this after reflecting on my one-month stay with Brisphere in Ladakh...</p>
              </div>
              <div className="review-card">
                
                <h3>Anand Solanki</h3>
                <p>⭐⭐⭐⭐⭐</p>
                <p>I am writing this after reflecting on my one-month stay with Brisphere in Ladakh...</p>
              </div>
              
              <div className="review-card ">

                
                <h3>Arjun Raghav</h3>
                <p>⭐⭐⭐⭐</p>
                <p>I am writing this after reflecting on my one-month stay with Brisphere in Ladakh...</p>
              </div>
              
              
              
            </div>
          </section>
          <section className="discover-section">
            <h2>Discover</h2>
            <div className="review-cards">
              <div className="review-card">
               
                <h3>Arjun Raghav</h3>
                <p>⭐⭐⭐⭐</p>
                <p>I am writing this after reflecting on my one-month stay with Brisphere in Ladakh...</p>
              </div>
              <div className="review-card">
                
                <h3>Anand Solanki</h3>
                <p>⭐⭐⭐⭐⭐</p>
                <p>I am writing this after reflecting on my one-month stay with Brisphere in Ladakh...</p>
              </div>

              <div className="review-card ">

                
                <h3>Arjun Raghav</h3>
                <p>⭐⭐⭐⭐</p>
                <p>I am writing this after reflecting on my one-month stay with Brisphere in Ladakh...</p>
              </div>
              
              
              
            </div>
          </section>
  
          {/* Services Section */}
          <section className="services-section">
            <h2>Services</h2>
            <div className="service-cards">
              <div className="service-card">
                <FaWifi className="service-icon" />
                <h3>High Speed Internet</h3>
                <p>Optical fiber connections provided in BriSphere scenic working spaces and dining areas.</p>
              </div>
              <div className="service-card">
                <FaUtensils className="service-icon" />
                <h3>Healthy Meals</h3>
                <p>Breakfast and dinner at your space daily. Enjoy meal options within BriSphere.</p>
              </div>
              <div className="service-card">
                <FaHome className="service-icon" />
                <h3>Homely Stay</h3>
                <p>Designed for working professionals with spacious interiors, comfortable beds, and a sleek kitchen.</p>
              </div>
              
              
            </div>
          </section>
          <section className="services-section">
            
            <div className="service-cards">
              <div className="service-card">
                <FaWifi className="service-icon" />
                <h3>High Speed Internet</h3>
                <p>Optical fiber connections provided in BriSphere scenic working spaces and dining areas.</p>
              </div>
              <div className="service-card">
                <FaUtensils className="service-icon" />
                <h3>Healthy Meals</h3>
                <p>Breakfast and dinner at your space daily. Enjoy meal options within BriSphere.</p>
              </div>
              <div className="service-card">
                <FaHome className="service-icon" />
                <h3>Homely Stay</h3>
                <p>Designed for working professionals with spacious interiors, comfortable beds, and a sleek kitchen.</p>
              </div>
              
              
            </div>
          </section>
        </div>

      </div>
      <footer className="fotter lavmv">
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
  };
  
  export default Home;
  