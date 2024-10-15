// src/components/HeroSection.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './HeroSection.css'; // Import custom styles

const HeroSection = () => {
  return (
    <Container className="text-center mt-5 pt-5"> {/* Add pt-5 for padding-top */}
      <Row className="justify-content-center">
        <Col md={8}>
          <div className="hero-section p-5">
            <h1 className="hero-title">Welcome to DealPoint</h1> {/* Use a separate class for styling */}
            <p>
              Make payments through chat with ease and security.
            </p>
            <Button variant="light">Get Started</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
