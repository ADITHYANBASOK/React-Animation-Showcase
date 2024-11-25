import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Home from './pages/Home';
import FramerMotionDemo from './pages/FramerMotionDemo';
import ReactSpringDemo from './pages/ReactSpringDemo';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/framer-motion" element={<FramerMotionDemo />} />
            <Route path="/react-spring" element={<ReactSpringDemo />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;