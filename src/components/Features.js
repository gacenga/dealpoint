// src/components/Features.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Features.css'; // Import custom styles

const featuresData = [
  {
    title: 'Real-Time Trading',
    description: 'Experience instant trading capabilities with live data.',
    icon: '⚡️',
  },
  {
    title: 'Advanced Analytics',
    description: 'Utilize powerful tools to analyze market trends.',
    icon: '📊',
  },
  {
    title: 'User-Friendly Interface',
    description: 'Navigate effortlessly through our modern platform.',
    icon: '🖥️',
  },
  {
    title: 'Secure Transactions',
    description: 'Enjoy peace of mind with top-notch security protocols.',
    icon: '🔒',
  },
];

const Features = () => {
  return (
    <Container className="features-container my-5">
      <h2 className="text-center mb-4">Our Features</h2>
      <Row>
        {featuresData.map((feature, index) => (
          <Col md={6} lg={3} key={index} className="mb-4">
            <Card className="feature-card text-center p-4">
              <div className="icon" style={{ fontSize: '3rem' }}>{feature.icon}</div>
              <Card.Title className="feature-title">{feature.title}</Card.Title>
              <Card.Text className="feature-description">{feature.description}</Card.Text>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Features;
