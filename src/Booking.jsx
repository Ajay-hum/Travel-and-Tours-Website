import React, { useState } from 'react';
import './booking.css';


const Booking = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        destination: '',
        startDate: '',
        endDate: '',
        numberOfTravelers: 1,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add your booking logic (e.g., API call)
        console.log('Booking Details:', formData);
        // Redirect to confirmation page after booking
        // history.push('/confirmation');
    };

    return (
        <div className="bookingContainer">
            <h1>Book Your Trip</h1>
            <form onSubmit={handleSubmit}>
                <div className="formGroup">
                    <label htmlFor="name">Full Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="formGroup">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="formGroup">
                    <label htmlFor="destination">Destination:</label>
                    <input
                        type="text"
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="formGroup">
                    <label htmlFor="startDate">Start Date:</label>
                    <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="formGroup">
                    <label htmlFor="endDate">End Date:</label>
                    <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="formGroup">
                    <label htmlFor="numberOfTravelers">Number of Travelers:</label>
                    <input
                        type="number"
                        id="numberOfTravelers"
                        name="numberOfTravelers"
                        value={formData.numberOfTravelers}
                        onChange={handleChange}
                        min="1"
                        required
                    />
                </div>

                <button type="submit" className="submitBtn">Confirm Booking</button>
            </form>
        </div>
    );
};

export default Booking;
