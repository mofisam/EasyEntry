// /frontend/src/components/ManageEvents.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Table, Button, Modal } from 'react-bootstrap';
import './App.css';

const ManageEvents = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      name: "Concert Night: Music for the Soul",
      date: "October 15, 2024",
      time: "7:00 PM",
      location: "Central Park, NY",
      ticketsSold: 120,
    },
    {
      id: 2,
      name: "Tech Conference 2024",
      date: "November 3, 2024",
      time: "9:00 AM",
      location: "Silicon Valley, CA",
      ticketsSold: 200,
    },
    {
      id: 3,
      name: "Art Exhibition: Colors of Life",
      date: "September 22, 2024",
      time: "11:00 AM",
      location: "Los Angeles Museum, CA",
      ticketsSold: 75,
    },
  ];

  const handleDelete = (eventId) => {
    setSelectedEvent(eventId);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    console.log(`Event with ID ${selectedEvent} has been deleted.`);
    setShowDeleteModal(false);
    setSelectedEvent(null);
  };

  return (
    <Container className="my-5 manage-events-page">
      <h1 className="text-center mb-4">Manage Your Events</h1>

      <Card className="shadow-sm mb-5">
        <Card.Body>
          <h4 className="mb-4">Event List</h4>
          <Table striped bordered hover responsive>
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Event Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Location</th>
                <th>Tickets Sold</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={event.id}>
                  <td>{index + 1}</td>
                  <td>{event.name}</td>
                  <td>{event.date}</td>
                  <td>{event.time}</td>
                  <td>{event.location}</td>
                  <td>{event.ticketsSold}</td>
                  <td>
                    <Button variant="info" className="me-2">
                      Edit
                    </Button>
                    <Button variant="danger" onClick={() => handleDelete(event.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this event? This action cannot be undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ManageEvents;
