// /frontend/src/components/Common/About.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Apps.css';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="about-hero-section text-center text-white">
        <div className="overlay">
          <Container>
            <h1 className="display-4">About EasyEntry</h1>
            <p className="lead">Your one-stop platform for discovering and booking amazing events near you!</p>
            <Button variant="light" size="lg" href="/events">
              Explore Events
            </Button>
          </Container>
        </div>
      </div>

      {/* Mission Statement Section */}
      <Container className="mission-section my-5 text-center">
        <h2 className="mb-4">Our Mission</h2>
        <p className="lead">
          At EasyEntry, our mission is to make event discovery and ticket booking simple, fast, and accessible for everyone. 
          Whether you're looking for concerts, sports events, conferences, or festivals, EasyEntry has you covered.
        </p>
      </Container>

      {/* How It Works Section */}
      <Container className="how-it-works-section my-5">
        <h2 className="text-center mb-4">How EasyEntry Works</h2>
        <Row>
          <Col md={4} className="text-center">
            <Card className="how-card">
              <Card.Body>
                <Card.Title>Discover Events</Card.Title>
                <Card.Text>
                  Use our intuitive search and filtering options to find events based on location, date, category, and more.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="text-center">
            <Card className="how-card">
              <Card.Body>
                <Card.Title>Book Tickets</Card.Title>
                <Card.Text>
                  Secure your spot easily by booking tickets through our seamless and secure platform.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="text-center">
            <Card className="how-card">
              <Card.Body>
                <Card.Title>Attend & Enjoy</Card.Title>
                <Card.Text>
                  Simply show your e-ticket at the event entrance and enjoy the experience without hassle.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Team or Our Values Section */}
      <Container className="our-values-section my-5 text-center">
        <h2 className="mb-4">Our Core Values</h2>
        <Row>
          <Col md={4}>
            <Card className="value-card">
              <Card.Body>
                <Card.Title>Customer First</Card.Title>
                <Card.Text>
                  We prioritize your needs by ensuring a smooth and satisfying event-booking experience.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="value-card">
              <Card.Body>
                <Card.Title>Integrity</Card.Title>
                <Card.Text>
                  We believe in transparency and fairness, always putting honesty at the forefront.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="value-card">
              <Card.Body>
                <Card.Title>Innovation</Card.Title>
                <Card.Text>
                  We continuously improve our platform with the latest technologies to provide the best experience.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer Section */}
      <footer className="about-footer-section bg-dark text-white py-4">
        <Container>
          <Row>
            <Col md={4}>
              <h5>Contact Us</h5>
              <p>Email: contact@easyentry.com</p>
              <p>Phone: +123 456 7890</p>
            </Col>
            <Col md={4}>
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/about" className="text-white">About Us</a></li>
                <li><a href="/contact" className="text-white">Contact Us</a></li>
                <li><a href="/faq" className="text-white">FAQ</a></li>
              </ul>
            </Col>
            <Col md={4}>
              <h5>Follow Us</h5>
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

export default About;