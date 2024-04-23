import { Container, Row, Col } from 'react-bootstrap';
import javascriptImage from '../assets/javascript.png';

const About = () => {
  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-4">About Us</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <p className="text-center">
              We are a leading global enterprise solutions company specializing in data analytics. Our mission is to empower businesses with actionable insights to make informed decisions and drive growth.
            </p>
            <p className="text-center">
              With years of experience and a dedicated team of experts, we offer tailored solutions that leverage advanced technologies such as AI and machine learning to optimize processes and maximize efficiency.
            </p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={4} className="text-center">
            <h4>Our Services</h4>
            <ul className="list-unstyled">
              <li>Data Analytics</li>
              <li>Business Intelligence</li>
              <li>Predictive Modeling</li>
              <li>Data Visualization</li>
            </ul>
          </Col>
          <Col md={4} className="text-center">
            <h4>Our Team</h4>
            <p>We have a diverse team of data scientists, engineers, and analysts who are passionate about leveraging data to drive business success.</p>
          </Col>
          <Col md={4} className="text-center">
            <h4>Our Achievements</h4>
            <p>Recognized as industry leaders, we have received numerous awards and accolades for our innovative solutions and commitment to excellence.</p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
          <div className="text-center">
              <img src={javascriptImage} alt="JavaScript" className="img-fluid rounded-circle" style={{ maxWidth: '300px' }} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
