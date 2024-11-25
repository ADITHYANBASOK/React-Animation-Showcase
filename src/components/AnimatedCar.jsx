import { motion } from 'framer-motion';

function AnimatedCar() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, bounce: 0 },
        opacity: { duration: 0.5 }
      }
    }
  };

  const wheel = {
    animate: {
      rotate: 360,
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <div className="w-full aspect-[2/1] relative">
      <motion.svg
        viewBox="0 0 800 400"
        className="w-full h-full"
        initial="hidden"
        animate="visible"
      >
        {/* Car Body */}
        <motion.path
          d="M 150,250 L 250,250 L 300,200 L 500,200 L 550,250 L 650,250 L 650,300 L 150,300 Z"
          variants={draw}
          fill="none"
          stroke="#646cff"
          strokeWidth="4"
        />

        {/* Roof */}
        <motion.path
          d="M 320,200 L 350,150 L 450,150 L 480,200"
          variants={draw}
          fill="none"
          stroke="#646cff"
          strokeWidth="4"
        />

        {/* Windows */}
        <motion.path
          d="M 350,150 L 350,200 M 450,150 L 450,200"
          variants={draw}
          fill="none"
          stroke="#646cff"
          strokeWidth="4"
        />

        {/* Wheels */}
        <motion.circle
          cx="250"
          cy="300"
          r="40"
          stroke="#646cff"
          strokeWidth="4"
          fill="none"
          variants={draw}
          custom={1}
        />
        <motion.circle
          cx="550"
          cy="300"
          r="40"
          stroke="#646cff"
          strokeWidth="4"
          fill="none"
          variants={draw}
          custom={1}
        />

        {/* Wheel Spokes */}
        <motion.g
          variants={wheel}
          animate="animate"
          transformOrigin="250 300"
        >
          <motion.line
            x1="250"
            y1="260"
            x2="250"
            y2="340"
            stroke="#646cff"
            strokeWidth="4"
            variants={draw}
          />
          <motion.line
            x1="210"
            y1="300"
            x2="290"
            y2="300"
            stroke="#646cff"
            strokeWidth="4"
            variants={draw}
          />
        </motion.g>

        <motion.g
          variants={wheel}
          animate="animate"
          transformOrigin="550 300"
        >
          <motion.line
            x1="550"
            y1="260"
            x2="550"
            y2="340"
            stroke="#646cff"
            strokeWidth="4"
            variants={draw}
          />
          <motion.line
            x1="510"
            y1="300"
            x2="590"
            y2="300"
            stroke="#646cff"
            strokeWidth="4"
            variants={draw}
          />
        </motion.g>

        {/* Ground */}
        <motion.line
          x1="0"
          y1="340"
          x2="800"
          y2="340"
          stroke="#646cff"
          strokeWidth="4"
          strokeDasharray="20,20"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: 1,
            pathOffset: -1,
            transition: {
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        />
      </motion.svg>
    </div>
  );
}

export default AnimatedCar;