import { motion } from 'framer-motion';

function BouncingBall() {
  return (
    <motion.div
      className="w-20 h-20 bg-primary rounded-full mx-auto"
      animate={{
        y: [0, -100, 0],
        backgroundColor: ['#36A2EB', '#FF6384', '#36A2EB']
      }}
      transition={{
        duration: 1.5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'mirror'
      }}
    />
  );
}

export default BouncingBall;
