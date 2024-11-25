import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="demo-container"
    >
      <h1 className="text-4xl font-bold text-center mb-8">
        Welcome to Animation Showcase
      </h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="demo-card"
        >
          <h2 className="text-2xl font-bold mb-4">Framer Motion</h2>
          <p className="mb-4">
            Explore the power of Framer Motion with interactive examples of gestures,
            transitions, and complex animations.
          </p>
          <Link
            to="/framer-motion"
            className="inline-block bg-primary text-white px-6 py-2 rounded-md hover:bg-secondary transition-colors"
          >
            View Demos
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="demo-card"
        >
          <h2 className="text-2xl font-bold mb-4">React Spring</h2>
          <p className="mb-4">
            Discover physics-based animations with React Spring through examples
            of springs, transitions, and interactive elements.
          </p>
          <Link
            to="/react-spring"
            className="inline-block bg-primary text-white px-6 py-2 rounded-md hover:bg-secondary transition-colors"
          >
            View Demos
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Home;