import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contact.css'; // Custom CSS for Contact page styling

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send form data to backend)
    console.log('Form submitted!');
  };

  return (
    <section className="contact-section">
      <Container>
        <h2 className="text-center mb-5">Contact Us</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Enter your message" required />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-3">Submit</Button>
            </Form>
          </Col>
        </Row>
        <Row className="mt-5 justify-content-center"> {/* Centering the contact info */}
          <Col md={8} className="d-flex justify-content-center align-items-center">
            <div className="contact-info">
              <h4>Contact Information</h4>
              <p><strong>Address:</strong> 123 Main St, City, Country</p>
              <p><strong>Phone:</strong> +123 456 7890</p>
              <p><strong>Email:</strong> info@example.com</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
