import { motion } from 'framer-motion';
import { useState } from 'react';

function ColorChangingBox() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="w-32 h-32 rounded-lg cursor-pointer"
      style={{ backgroundColor: isHovered ? '#FF6384' : '#36A2EB' }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ duration: 0.3 }}
    />
  );
}

export default ColorChangingBox;
