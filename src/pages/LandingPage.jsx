import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="content">
        <h1>Paradise Nursery</h1>
        <p>
          Welcome to Paradise Nursery, your one-stop destination for beautiful, 
          healthy houseplants. We carefully select and nurture each plant to 
          ensure it brings life and joy to your space. Whether you're a 
          beginner or an experienced plant parent, we have the perfect green 
          companion waiting for you.
        </p>
        <Link to="/products" className="btn-primary">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;