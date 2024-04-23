import { Container, Row, Col, Card } from 'react-bootstrap';
import { BsGearFill, BsGraphUp, BsCollection, BsPeople } from 'react-icons/bs';
import './Services.css'; // Custom CSS for Services section styling

const Services = () => {
  const services = [
    {
      title: 'Data Analytics',
      icon: <BsGraphUp />,
      description: 'Harness the power of data to make informed business decisions and drive growth.',
    },
    {
      title: 'Business Intelligence',
      icon: <BsGearFill />,
      description: 'Gain actionable insights through advanced analytics and reporting solutions.',
    },
    {
      title: 'Data Visualization',
      icon: <BsCollection />,
      description: 'Visualize complex data sets into interactive charts and dashboards for better understanding.',
    },
    {
      title: 'Team Collaboration',
      icon: <BsPeople />,
      description: 'Empower your team with collaborative tools to streamline workflows and increase productivity.',
    },
  ];

  return (
    <section className="bg-light py-5">
      <Container>
        <h2 className="text-center mb-4">Our Services</h2>
        <Row className="justify-content-center">
          {services.map((service, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <Card className="service-card">
                <Card.Body>
                  <div className="service-icon">{service.icon}</div>
                  <Card.Title className="mt-3 mb-3">{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
