// /frontend/src/components/Profile.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import './Profile.css';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "A passionate event organizer and music enthusiast.",
    profilePicture:
      "https://via.placeholder.com/150", // Replace with actual profile image URL
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Add logic to save profile data (API call etc.)
  };

  return (
    <Container className="my-5 profile-page">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow profile-card">
            <Card.Body>
              <Row className="mb-4">
                <Col md={4} className="text-center">
                  <img
                    src={profileData.profilePicture}
                    alt="Profile"
                    className="profile-img mb-3"
                  />
                  <Button
                    variant="outline-primary"
                    className="w-100"
                    onClick={handleEditClick}
                  >
                    {isEditing ? "Cancel" : "Edit Profile"}
                  </Button>
                </Col>
                <Col md={8}>
                  <h3>{profileData.name}</h3>
                  <p>Email: {profileData.email}</p>
                  <p>Bio: {profileData.bio}</p>
                </Col>
              </Row>

              {isEditing && (
                <Form onSubmit={handleSave}>
                  <Form.Group controlId="formName" className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={profileData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formBio" className="mb-3">
                    <Form.Label>Bio</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="bio"
                      rows={3}
                      value={profileData.bio}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Save Changes
                  </Button>
                </Form>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;