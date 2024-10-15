// src/components/ChatDemo.js
import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import rocketAnimation from '../assets/animations/rocket.json';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import './ChatDemo.css'; // Import the custom CSS file

const ChatDemo = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState(''); // Store a single response
  const [transactionSuccess, setTransactionSuccess] = useState(null); // Use null to differentiate between no response and a response
  const [step, setStep] = useState(0); // Track the current step in the process

  // Effect to initialize chat with instructions
  useEffect(() => {
    setResponse('Welcome to DealPoint! Type "payment" to start the payment process or "help" for assistance.');
  }, []);

  const handleSendMessage = () => {
    if (message.trim() === '') {
      setResponse('Please enter a message.');
      setTransactionSuccess(null); // Reset transaction state
      return;
    }

    const userMessage = message.toLowerCase();

    switch (step) {
      case 0: // Initial greeting and instructions
        if (userMessage === 'payment') {
          setResponse('Great! What amount would you like to pay?');
          setStep(1);
        } else if (userMessage === 'help') {
          setResponse('Hello! Type "payment" to start the payment process or "help" for assistance.');
        } else {
          setResponse('Type "payment" to start or "help" for instructions.');
        }
        break;

      case 1: // Asking for amount
        if (!isNaN(message) && parseFloat(message) > 0) {
          setResponse(`You are about to pay KSh ${message}. Please enter your PIN to confirm the transaction.`);
          setStep(2);
        } else {
          setResponse('Please enter a valid amount.');
        }
        break;

      case 2: // Asking for PIN
        if (message.length === 4 && !isNaN(message)) { // Assuming PIN is a 4-digit number
          setResponse('Transaction Successful!');
          setTransactionSuccess(true);
          setStep(3);
        } else {
          setResponse('Please enter a valid 4-digit PIN.');
          setTransactionSuccess(false); // Mark as failed to show the correct color
        }
        break;

      default:
        break;
    }

    setMessage('');
  };

  return (
    <Container className="chat-demo-container my-5">
      <Row>
        <Col md={6} className="mx-auto">
          <Card className="chat-card p-4">
            <h4 className="text-center">Chat with Us</h4>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here..."
                  className="chat-input"
                />
              </Form.Group>
              <Button variant="success" onClick={handleSendMessage} className="w-100">
                Send
              </Button>
            </Form>
            <div className="mt-3">
              {response && (
                <Alert
                  className="response-alert"
                  variant={transactionSuccess === true ? 'success' : (transactionSuccess === false ? 'danger' : 'light')} // Use light for standard messages
                  style={{ 
                    color: transactionSuccess === true ? 'green' : (transactionSuccess === false ? 'red' : '#000') // Set standard messages to black
                  }} 
                >
                  {response}
                </Alert>
              )}
              {transactionSuccess === true && (
                <div className="text-center mt-3">
                  <Lottie
                    options={{
                      loop: false,
                      autoplay: true,
                      animationData: rocketAnimation,
                    }}
                    height={100}
                    width={100}
                  />
                </div>
              )}
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ChatDemo;
