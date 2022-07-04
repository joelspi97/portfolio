import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

function AnimatedArticle(props) {
  const { children, elementClassName, left } = props;
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className={elementClassName}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
      initial={
        shouldReduceMotion 
          ? { opacity: 0 } 
          : left ? { opacity: 0, x: -100 } : { opacity: 0, x: 100 } 
      }
      transition={{
        duration: 0.55,
        delay: 0.25
      }}
      viewport={{ once: true }}
    >
      { children }
    </motion.article>
  );
}

export default AnimatedArticle;
