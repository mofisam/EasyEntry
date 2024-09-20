// /frontend/src/components/Common/Home.js
import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import '../App.css';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section text-center text-white">
        <div className="overlay">
          <Container>
            <h1 className="display-4">Discover Amazing Events Near You</h1>
            <p className="lead">Find and book tickets for concerts, conferences, sports, and more!</p>
            <Button variant="primary" size="lg" href="/events">
              Explore Events
            </Button>
          </Container>
        </div>
      </div>

      {/* Categories Section */}
      <Container className="categories-section my-5 text-center">
        <h2 className="mb-4">Browse by Category</h2>
        <Row>
          <Col md={4}>
            <Card className="category-card">
              <Card.Img variant="top" src="https://example.com/concert.jpg" />
              <Card.Body>
                <Card.Title>Concerts</Card.Title>
                <Button variant="outline-primary" href="/events?category=concert">View Concerts</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="category-card">
              <Card.Img variant="top" src="https://example.com/sports.jpg" />
              <Card.Body>
                <Card.Title>Sports</Card.Title>
                <Button variant="outline-primary" href="/events?category=sports">View Sports</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="category-card">
              <Card.Img variant="top" src="https://example.com/conference.jpg" />
              <Card.Body>
                <Card.Title>Conferences</Card.Title>
                <Button variant="outline-primary" href="/events?category=conference">View Conferences</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Featured Events Section */}
      <Container className="featured-events-section my-5">
        <h2 className="text-center mb-4">Featured Events</h2>
        <Row>
          <Col md={4}>
            <Card className="event-card">
              <Card.Img variant="top" src="https://example.com/featured1.jpg" />
              <Card.Body>
                <Card.Title>Rock Concert 2024</Card.Title>
                <Card.Text>
                  New York, NY | October 12, 2024
                </Card.Text>
                <Button variant="primary" href="/events/1">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="event-card">
              <Card.Img variant="top" src="https://example.com/featured2.jpg" />
              <Card.Body>
                <Card.Title>Tech Conference 2024</Card.Title>
                <Card.Text>
                  San Francisco, CA | November 5, 2024
                </Card.Text>
                <Button variant="primary" href="/events/2">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="event-card">
              <Card.Img variant="top" src="https://example.com/featured3.jpg" />
              <Card.Body>
                <Card.Title>Football Championship</Card.Title>
                <Card.Text>
                  Los Angeles, CA | December 15, 2024
                </Card.Text>
                <Button variant="primary" href="/events/3">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer Section */}
      <footer className="footer-section bg-dark text-white py-4">
        <Container>
          <Row>
            <Col md={4}>
              <h5>About EasyEntry</h5>
              <p>EasyEntry is your go-to platform for finding and booking tickets to amazing events happening near you.</p>
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

export default Home;