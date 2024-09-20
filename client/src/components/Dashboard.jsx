// /frontend/src/components/Dashboard.js
import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import '../App.css';

const Dashboard = () => {
  return (
    <Container fluid className="dashboard-container py-5">
      <Row>
        {/* User Overview Section */}
        <Col lg={4}>
          <Card className="shadow-sm user-overview-card mb-4">
            <Card.Body>
              <div className="text-center">
                <img
                  src="https://via.placeholder.com/100"
                  alt="User"
                  className="rounded-circle mb-3"
                />
                <h4>John Doe</h4>
                <p>johndoe@example.com</p>
                <Button variant="primary" href="/edit-profile">
                  Edit Profile
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Recent Events Section */}
        <Col lg={8}>
          <Card className="shadow-sm recent-events-card mb-4">
            <Card.Header>
              <h5>Recent Events</h5>
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <strong>Music Concert</strong> – August 15, 2024
                <Button variant="outline-primary" size="sm" className="float-end">
                  View Details
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Sports Festival</strong> – September 2, 2024
                <Button variant="outline-primary" size="sm" className="float-end">
                  View Details
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Art Expo</strong> – September 18, 2024
                <Button variant="outline-primary" size="sm" className="float-end">
                  View Details
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>

      {/* Upcoming Tickets Section */}
      <Row>
        <Col lg={12}>
          <Card className="shadow-sm upcoming-tickets-card">
            <Card.Header>
              <h5>Upcoming Tickets</h5>
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <strong>Movie Night</strong> – October 1, 2024
                <Button variant="outline-success" size="sm" className="float-end">
                  Download Ticket
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Conference Summit</strong> – October 22, 2024
                <Button variant="outline-success" size="sm" className="float-end">
                  Download Ticket
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Charity Run</strong> – November 15, 2024
                <Button variant="outline-success" size="sm" className="float-end">
                  Download Ticket
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;