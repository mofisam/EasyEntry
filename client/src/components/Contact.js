// /frontend/src/components/Common/Contact.js
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="contact-hero-section text-center text-white">
        <div className="overlay">
          <Container>
            <h1 className="display-4">Get in Touch with Us</h1>
            <p className="lead">We're here to help. Reach out to us anytime and we'll get back to you as soon as possible.</p>
          </Container>
        </div>
      </div>

      {/* Contact Form Section */}
      <Container className="contact-form-section my-5">
        <h2 className="text-center mb-4">Send Us a Message</h2>
        <Row>
          <Col md={6} className="mx-auto">
            <Form>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your full name" />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="formSubject" className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Subject" />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Type your message here..." />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Contact Information Section */}
      <Container className="contact-info-section my-5 text-center">
        <h2 className="mb-4">Contact Information</h2>
        <Row>
          <Col md={4}>
            <h5>Email Us</h5>
            <p>contact@easyentry.com</p>
          </Col>
          <Col md={4}>
            <h5>Call Us</h5>
            <p>+123 456 7890</p>
          </Col>
          <Col md={4}>
            <h5>Visit Us</h5>
            <p>123 Easy Street, New York, NY, USA</p>
          </Col>
        </Row>
      </Container>

      {/* Footer Section */}
      <footer className="contact-footer-section bg-dark text-white py-4">
        <Container>
          <Row>
            <Col md={6}>
              <h5>About EasyEntry</h5>
              <p>We are your go-to platform for discovering and booking tickets to amazing events happening near you.</p>
            </Col>
            <Col md={6} className="text-md-end">
              <p>
                <a href="#" className="text-white me-3"><i className="fab fa-facebook"></i></a>
                <a href="#" className="text-white me-3"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Contact;