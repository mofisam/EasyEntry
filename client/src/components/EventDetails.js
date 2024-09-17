// /frontend/src/components/Common/EventDetails.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './EventDetails.css';

const EventDetails = () => {
  return (
    <>
      {/* Event Banner */}
      <div className="event-banner text-center text-white">
        <div className="overlay">
          <h1 className="display-4">Concert Night: Music for the Soul</h1>
          <p className="lead">Experience an unforgettable night of music, art, and entertainment.</p>
        </div>
      </div>

      {/* Event Details Section */}
      <Container className="event-details-section my-5">
        <Row>
          <Col md={8}>
            <h2 className="mb-3">Event Information</h2>
            <p>
              <strong>Date:</strong> October 15, 2024
              <br />
              <strong>Time:</strong> 7:00 PM - 11:00 PM
              <br />
              <strong>Location:</strong> Madison Square Garden, New York, NY
            </p>
            <h5>Description:</h5>
            <p>
              Join us for an extraordinary evening of live performances featuring top artists from across the world. This is a night filled with
              magical moments, music, and unforgettable experiences. Whether you're a music lover or just looking for a fun night out, this event
              is for everyone!
            </p>

            <h5>What to Expect:</h5>
            <ul>
              <li>Live performances from top artists</li>
              <li>Interactive light shows</li>
              <li>Food and drink vendors</li>
              <li>Merchandise stalls</li>
            </ul>
          </Col>

          {/* Ticketing Section */}
          <Col md={4} className="ticketing-section text-center">
            <h2 className="mb-3">Buy Tickets</h2>
            <p>
              <strong>Price:</strong> $75 (General Admission)
              <br />
              <strong>VIP:</strong> $150 (Exclusive Access & Front Row Seating)
            </p>
            <Button variant="success" size="lg" className="my-3">
              Buy Tickets
            </Button>
            <p className="text-muted">
              *Tickets are non-refundable. For any queries, please contact us at <a href="mailto:support@easyentry.com">support@easyentry.com</a>.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Related Events Section (Optional) */}
      <Container className="related-events-section my-5">
        <h2 className="text-center mb-4">Related Events</h2>
        <Row>
          <Col md={4}>
            <div className="related-event-card">
              <img src="https://via.placeholder.com/300x200" alt="Related Event 1" className="img-fluid" />
              <h5 className="mt-3">Art & Jazz Festival</h5>
              <p className="text-muted">October 20, 2024 - Brooklyn, NY</p>
              <Button variant="outline-primary">View Details</Button>
            </div>
          </Col>
          <Col md={4}>
            <div className="related-event-card">
              <img src="https://via.placeholder.com/300x200" alt="Related Event 2" className="img-fluid" />
              <h5 className="mt-3">Rock 'n' Roll Mania</h5>
              <p className="text-muted">November 5, 2024 - Los Angeles, CA</p>
              <Button variant="outline-primary">View Details</Button>
            </div>
          </Col>
          <Col md={4}>
            <div className="related-event-card">
              <img src="https://via.placeholder.com/300x200" alt="Related Event 3" className="img-fluid" />
              <h5 className="mt-3">Classical Symphony Night</h5>
              <p className="text-muted">November 12, 2024 - Boston, MA</p>
              <Button variant="outline-primary">View Details</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EventDetails;