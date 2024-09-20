// /frontend/src/components/Common/BookTickets.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import '../App.css';

const BookTickets = () => {
  const [ticketType, setTicketType] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Details', {
      ticketType,
      quantity,
      userDetails
    });
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Book Your Tickets</h1>
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header>
              <h4>Choose Ticket Type</h4>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Select Ticket Type</Form.Label>
                  <Form.Select
                    value={ticketType}
                    onChange={(e) => setTicketType(e.target.value)}
                    required
                  >
                    <option value="">Select Ticket</option>
                    <option value="General Admission">General Admission - $75</option>
                    <option value="VIP">VIP - $150</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    min="1"
                    required
                  />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Header>
              <h4>Your Information</h4>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={userDetails.name}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={userDetails.email}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    value={userDetails.phone}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="text-center mb-4">
            <Card.Header>
              <h4>Booking Summary</h4>
            </Card.Header>
            <Card.Body>
              <p>
                <strong>Ticket Type:</strong> {ticketType || 'Not Selected'}
              </p>
              <p>
                <strong>Quantity:</strong> {quantity}
              </p>
              <p>
                <strong>Total Price:</strong>{' '}
                {ticketType === 'VIP' ? `$${150 * quantity}` : ticketType === 'General Admission' ? `$${75 * quantity}` : '$0'}
              </p>

              <Button variant="primary" size="lg" onClick={handleSubmit}>
                Proceed to Payment
              </Button>
            </Card.Body>
          </Card>

          <Card className="text-center">
            <Card.Body>
              <h5>Need Help?</h5>
              <p>
                Contact our support team at{' '}
                <a href="mailto:support@easyentry.com">support@easyentry.com</a> for any assistance.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BookTickets;