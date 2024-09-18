// /frontend/src/components/Common/Payment.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import './Payment.css';

const Payment = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, handle form submission (e.g., API call)
    console.log('Payment Details:', paymentDetails);
  };

  return (
    <Container className="my-5 payment-page">
      <h1 className="text-center mb-4">Complete Your Payment</h1>
      <Row>
        <Col md={6}>
          <Card className="mb-4 shadow-sm">
            <Card.Header>
              <h4>Payment Information</h4>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Cardholder's Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="cardName"
                    placeholder="John Doe"
                    value={paymentDetails.cardName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Card Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={paymentDetails.cardNumber}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Expiry Date</Form.Label>
                      <Form.Control
                        type="text"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={paymentDetails.expiryDate}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>CVV</Form.Label>
                      <Form.Control
                        type="text"
                        name="cvv"
                        placeholder="123"
                        value={paymentDetails.cvv}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Button variant="success" type="submit" size="lg" block>
                  Pay Now
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="text-center mb-4 shadow-sm">
            <Card.Header>
              <h4>Order Summary</h4>
            </Card.Header>
            <Card.Body>
              <p><strong>Event:</strong> Concert Night: Music for the Soul</p>
              <p><strong>Date:</strong> October 15, 2024</p>
              <p><strong>Ticket Type:</strong> VIP</p>
              <p><strong>Quantity:</strong> 2</p>
              <p><strong>Total Price:</strong> $300</p>

              <div className="payment-icon mb-3">
                <i className="fas fa-shield-alt text-success"></i> Secure Payment
              </div>

              <Button variant="outline-primary" className="mt-2">
                Change Ticket Details
              </Button>
            </Card.Body>
          </Card>

          <Card className="text-center shadow-sm">
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

export default Payment;
