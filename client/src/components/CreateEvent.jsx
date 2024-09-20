// /frontend/src/components/CreateEvent.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import '../App.css';

const CreateEvent = () => {
  const [eventDetails, setEventDetails] = useState({
    eventName: '',
    eventDate: '',
    eventTime: '',
    description: '',
    location: '',
    ticketPrice: '',
    ticketQuantity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event Created:', eventDetails);
    // Add logic to handle form submission, such as sending the data to the backend API.
  };

  return (
    <Container className="my-5 create-event-page">
      <h1 className="text-center mb-4">Create a New Event</h1>
      <Row>
        <Col md={8} className="mx-auto">
          <Card className="shadow-sm">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Event Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="eventName"
                    placeholder="Enter the event name"
                    value={eventDetails.eventName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Event Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="eventDate"
                        value={eventDetails.eventDate}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Event Time</Form.Label>
                      <Form.Control
                        type="time"
                        name="eventTime"
                        value={eventDetails.eventTime}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="description"
                    rows={4}
                    placeholder="Enter a brief description of the event"
                    value={eventDetails.description}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    name="location"
                    placeholder="Enter the event location"
                    value={eventDetails.location}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Ticket Price</Form.Label>
                      <Form.Control
                        type="number"
                        name="ticketPrice"
                        placeholder="Enter ticket price ($)"
                        value={eventDetails.ticketPrice}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Ticket Quantity</Form.Label>
                      <Form.Control
                        type="number"
                        name="ticketQuantity"
                        placeholder="Enter available tickets"
                        value={eventDetails.ticketQuantity}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Button variant="primary" type="submit" className="btn-lg btn-block">
                  Create Event
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateEvent;
