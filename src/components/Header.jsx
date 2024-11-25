import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

function Header() {
  const location = useLocation();

  return (
    <header className="bg-white shadow-md sticky top-0 w-full z-10">
      <nav className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-primary">
              AnimationShowcase
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/framer-motion"
              className={`nav-link ${location.pathname === '/framer-motion' ? 'active' : ''}`}
            >
              Framer Motion
            </Link>
            <Link
              to="/react-spring"
              className={`nav-link ${location.pathname === '/react-spring' ? 'active' : ''}`}
            >
              React Spring
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;