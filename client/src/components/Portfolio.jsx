import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Portfolio.css';
import EcommerceApp from '../assets/ecommerce.jpg'
import Signup from '../assets/signup.jpg'
import YoutubeApp from '../assets/youtube.jpg'

const Portfolio = () => {
  // Portfolio data (title, image, description, link)
  const portfolioItems = [
    {
      title: 'Project 1',
      image: EcommerceApp,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: '#',
    },
    {
      title: 'Project 2',
      image: Signup,
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      link: '#',
    },
    {
      title: 'Project 3',
      image: YoutubeApp,
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      link: '#',
    },
  ];

  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-4">Portfolio</h2>
        <Row>
          {portfolioItems.map((item, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="portfolio-card">
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Button variant="primary" href={item.link} target="_blank" rel="noopener noreferrer">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
