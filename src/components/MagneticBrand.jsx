import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Magnetic Title Hover
 * Expands character spacing dynamically on hover with a smooth spring transition.
 * Keeps position rock-solid to prevent layout misalignment or indentation jumping.
 */
export default function MagneticBrand({
  text,
  className = '',
  baseTracking = '0.2em',
  hoverTracking = '0.36em',
  onClick,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`inline-block cursor-pointer select-none transition-colors duration-300 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      animate={{
        letterSpacing: isHovered ? hoverTracking : baseTracking,
      }}
      transition={{
        letterSpacing: { type: 'spring', stiffness: 260, damping: 22 },
      }}
    >
      <span className="relative inline-block transition-colors duration-300">
        {text}
      </span>
    </motion.div>
  );
}
