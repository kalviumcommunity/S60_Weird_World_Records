// import { FaLinkedin, FaGithub } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="bottom-0 left-0 w-full bg-white text-black py-4">
//       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 text-center md:text-left">
//         <div className="mb-4 md:mb-0">
//           <h3 className="text-2xl font-bold mb-2">Weird World</h3>
//           <p className="text-m">Discover the most bizarre, unbelievable, and extraordinary records from around the world — all in one quirky place!</p>
//         </div>
        
//         <div className="mb-4 md:mb-0">
//           <h4 className="text-lg font-semibold mb-2">Quick Access</h4>
//           <ul className="space-y-2">
//             <li><a href="/record" className="hover:text-blue-500">Home</a></li>
//             <li><a href="/search" className="hover:text-blue-500">About Us</a></li>
//             <li><a href="/insert" className='hover:text-blue-500'>Insert</a></li>
//           </ul>
//         </div>
        
//         <div>
//           <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
//           <div className="flex justify-center md:justify-start space-x-4">
//             <a href="https://github.com/PoshikaM" rel="noopener noreferrer" className="hover:text-gray-400">
//               <FaGithub size={26} />
//             </a>
//             <a href="https://www.linkedin.com/in/poshika-mangai-m" rel="noopener noreferrer" className="hover:text-blue-500">
//               <FaLinkedin size={26} />
//             </a>
//           </div>
//         </div>
//       </div>
      
//       <div className="mt-8 pt-8 border-t border-gray-700 text-center">
//         <p>© 2025 ShopZee. All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

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
