import { Container, Row, Col, Card } from 'react-bootstrap';
import './Testimonials.css';
import user1 from '../assets/user1.jpg';
import user2 from '../assets/user2.jpg';
import user3 from '../assets/user3.jpg';

const Testimonials = () => {
  // Testimonials data (quote, name, avatar)
  const testimonials = [
    {
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'John Doe',
      avatar: user1,
    },
    {
      quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      name: 'Jane Smith',
      avatar: user2,
    },
    {
      quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      name: 'David Johnson',
      avatar: user3,
    },
  ];

  return (
    <section className="bg-light py-5">
      <Container>
        <h2 className="text-center mb-4">Testimonials</h2>
        <Row>
          {testimonials.map((testimonial, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="testimonial-card">
                <Card.Body>
                  <Card.Text className="quote-text">{testimonial.quote}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <div className="avatar-container">
                    <img src={testimonial.avatar} alt={testimonial.name} className="avatar-img" />
                  </div>
                  <Card.Title className="mt-3">{testimonial.name}</Card.Title>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
