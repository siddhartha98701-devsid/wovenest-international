import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Clean Fade-Up Headline Animation
 * Preserves 100% natural typography, word spaces, and line wrapping.
 */
export default function AnimatedText({
  text,
  className = '',
  as = 'h2',
  delay = 0.1,
  once = true,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-10% 0px' });

  const Component = motion[as] || motion.h2;

  return (
    <Component
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {text}
    </Component>
  );
}
