import React, { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';

/**
 * Metric Counter Animation
 * Rolls smoothly from zero to the target number when scrolled into view.
 */
export default function Counter({
  value,
  duration = 2.4,
  prefix = '',
  suffix = '',
  className = '',
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1], // ease-royal
      onUpdate: (latest) => {
        setDisplayValue(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
