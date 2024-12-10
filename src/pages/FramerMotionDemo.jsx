import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimatedList from '../components/AnimatedList';
import AnimatedCar from '../components/AnimatedCar';
import BouncingBall from '../components/BouncingBallFramer';
import ColorChangingBox from '../components/ColorChangingBoxFramer';

function FramerMotionDemo() {
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="demo-container"
    >
      <h1 className="text-3xl font-bold mb-8">Framer Motion Examples</h1>

      {/* SVG Car Animation */}
      <section className="demo-card overflow-hidden">
        <h2 className="text-2xl font-bold mb-4">SVG Car Animation</h2>
        <AnimatedCar />
      </section>

      {/* Animated List */}
      <AnimatedList />

      <section className="demo-card">
        <h2 className="text-2xl font-bold mb-4">Spring Bouncing Ball</h2>
        <BouncingBall />
      </section>

      <section className="demo-card">
        <h2 className="text-2xl font-bold mb-4">Color-Changing Box</h2>
        <ColorChangingBox />
      </section>

      {/* Interactive Button */}
      <section className="demo-card">
        <h2 className="text-2xl font-bold mb-4">Interactive Button</h2>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-primary text-white px-6 py-3 rounded-lg"
        >
          Hover & Click Me!
        </motion.button>
      </section>

      {/* Draggable Card */}
      <section className="demo-card">
        <h2 className="text-2xl font-bold mb-4">Draggable Card</h2>
        <motion.div
          drag
          dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
          dragElastic={0.2}
          whileDrag={{ scale: 1.1 }}
          animate={dragPosition}
          onDragEnd={(e, info) => setDragPosition({ x: 0, y: 0 })}
          className="w-32 h-32 bg-primary rounded-lg cursor-grab active:cursor-grabbing mx-auto"
        />
      </section>

      {/* Scroll-triggered Animation */}
      <section className="demo-card">
        <h2 className="text-2xl font-bold mb-4">Scroll Animation</h2>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-6 bg-gray-100 rounded-lg"
        >
          <p>This content animates when scrolled into view! This content animates when scrolled into view! This content animates when scrolled into view!</p>
        </motion.div>
      </section>
    </motion.div>
  );
}

export default FramerMotionDemo;