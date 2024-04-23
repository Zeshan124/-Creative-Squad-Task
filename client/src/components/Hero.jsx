import './Hero.css'; // Import your custom CSS for Hero section styling

const Hero = () => {
  return (
    <div className="hero-section py-5 text-center">
      <div className="container">
        <h1 className="display-4 fw-bold mb-4">Welcome to My Website</h1>
        <p className="lead mb-4">Explore everything you need right here.</p>
        <button className="btn btn-primary btn-lg rounded-pill">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
