import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Weird World Records</h3>
          <p className="footer-tagline">Discover the most bizarre, unbelievable, and extraordinary records around the world — all in one quirky place!</p>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Quick Access</h4>
          <ul className="footer-links">
            <li><a href="/record">Home</a></li>
            <li><a href="/search">Search</a></li>
            <li><a href="/insert">Insert</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Follow Us</h4>
          <div className="footer-icons">
            <a href="https://github.com/PoshikaM" rel="noopener noreferrer">
              <FaGithub size={26} />
            </a>
            <a href="https://www.linkedin.com/in/poshika-mangai-m" rel="noopener noreferrer">
              <FaLinkedin size={26}/>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p style={{ color: 'white' }}>© 2025 Weird World Records. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
