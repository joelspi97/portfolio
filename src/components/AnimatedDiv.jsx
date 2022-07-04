import React from 'react';
import { motion } from 'framer-motion';

function AnimatedDiv(props) {
  const { children, elementClassName } = props;

  return (
    <motion.div
      className={elementClassName}
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{
        duration: 0.55,
        delay: 0.25
      }}
      viewport={{ once: true }}
    >
      { children }
    </motion.div>
  );
}

export default AnimatedDiv;
