import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const CustomModal = ({ show, handleClose }) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [files, setFiles] = useState([]);

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleSubjectChange = (e) => setSubject(e.target.value);
  const handleFileChange = (e) => setFiles(e.target.files);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate password
    if (password !== 'admin') {
      alert('Invalid password!');
      return;
    }
    // Send email with attachments
    const formData = new FormData();
    formData.append('email', email);
    formData.append('subject', subject);
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }
    axios.post('/send-email', formData)
      .then(response => console.log(response))
      .catch(error => console.log(error));
    // Reset form fields
    setPassword('');
    setEmail('');
    setSubject('');
    setFiles([]);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Admin Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={password} onChange={handlePasswordChange} />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={email} onChange={handleEmailChange} />
          </Form.Group>
          <Form.Group controlId="subject">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" value={subject} onChange={handleSubjectChange} />
          </Form.Group>
          <Form.Group controlId="files">
            <Form.Label>Files</Form.Label>
            <Form.Control type="file" multiple onChange={handleFileChange} />
          </Form.Group>
          <Button style={{backgroundColor:'black'}} className='my-2' type="submit">Send Email</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CustomModal;
