// src/components/ChatDemo.js
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const ChatDemo = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault(); // Prevent page refresh
    if (input.trim()) {
      const newMessages = [...messages, { user: 'You', text: input }];
      setMessages(newMessages);
      setInput('');

      // Simulate system response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { user: 'DealPoint', text: 'Product listed successfully!' }
        ]);
      }, 1000);
    }
  };

  return (
    <Container id="chat-demo" className="my-5">
      <h2 className="text-center mb-4">DealPoint Chat Demo</h2>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} // Improved animation
            className={`chat-message ${msg.user === 'You' ? 'user' : 'system'}`}
          >
            <strong>{msg.user}: </strong>{msg.text}
          </motion.div>
        ))}
      </div>
      <Form onSubmit={handleSendMessage}>
        <Form.Control
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          style={{ marginTop: '10px' }}
        />
        <Button variant="primary" type="submit" className="mt-2">Send</Button>
      </Form>
    </Container>
  );
};

export default ChatDemo;
