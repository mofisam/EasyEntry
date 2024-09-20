// /frontend/src/components/ManageBookings.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Table, Button, Modal } from 'react-bootstrap';
import '../App.css';

const ManageBookings = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  // Sample booking data
  const bookings = [
    {
      id: 1,
      user: "John Doe",
      eventName: "Concert Night: Music for the Soul",
      date: "October 15, 2024",
      ticketsBooked: 2,
      totalPrice: "$80",
    },
    {
      id: 2,
      user: "Jane Smith",
      eventName: "Tech Conference 2024",
      date: "November 3, 2024",
      ticketsBooked: 1,
      totalPrice: "$120",
    },
    {
      id: 3,
      user: "Michael Brown",
      eventName: "Art Exhibition: Colors of Life",
      date: "September 22, 2024",
      ticketsBooked: 4,
      totalPrice: "$200",
    },
  ];

  const handleDelete = (bookingId) => {
    setSelectedBooking(bookingId);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    console.log(`Booking with ID ${selectedBooking} has been deleted.`);
    setShowDeleteModal(false);
    setSelectedBooking(null);
  };

  return (
    <Container className="my-5 manage-bookings-page">
      <h1 className="text-center mb-4">Manage Bookings</h1>

      <Card className="shadow-sm mb-5">
        <Card.Body>
          <h4 className="mb-4">Booking List</h4>
          <Table striped bordered hover responsive>
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Event Name</th>
                <th>Date</th>
                <th>Tickets Booked</th>
                <th>Total Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={booking.id}>
                  <td>{index + 1}</td>
                  <td>{booking.user}</td>
                  <td>{booking.eventName}</td>
                  <td>{booking.date}</td>
                  <td>{booking.ticketsBooked}</td>
                  <td>{booking.totalPrice}</td>
                  <td>
                    <Button variant="info" className="me-2">
                      View
                    </Button>
                    <Button variant="danger" onClick={() => handleDelete(booking.id)}>
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
          Are you sure you want to delete this booking? This action cannot be undone.
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

export default ManageBookings;
