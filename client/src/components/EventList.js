// /frontend/src/components/Events/EventList.js
import React, { useState, useEffect } from 'react';
import './EventList.css';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [category, setCategory] = useState('all');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    // Fetch events from the backend (replace with actual API)
    const fetchEvents = async () => {
      const response = await fetch('/api/events'); // Dummy API
      const data = await response.json();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  const handleFilter = (e) => {
    e.preventDefault();
    // Apply filter logic (category, location, date)
  };

  return (
    <div className="event-list-container">
      <h1>Upcoming Events</h1>

      {/* Filter Section */}
      <div className="filter-section">
        <form onSubmit={handleFilter}>
          <select onChange={(e) => setCategory(e.target.value)} value={category}>
            <option value="all">All Categories</option>
            <option value="concert">Concert</option>
            <option value="sports">Sports</option>
            <option value="conference">Conference</option>
          </select>

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <button type="submit" className="filter-btn">Filter</button>
        </form>
      </div>

      {/* Event Cards Section */}
      <div className="events-grid">
        {events.map((event) => (
          <div key={event._id} className="event-card">
            <img src={event.imageUrl} alt={event.name} />
            <div className="event-details">
              <h3>{event.name}</h3>
              <p>{new Date(event.date).toLocaleDateString()}</p>
              <p>{event.location}</p>
              <a href={`/events/${event._id}`} className="details-btn">View Details</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
