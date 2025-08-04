import React from 'react'
import { motion } from 'framer-motion';

const FadeUp = ( { children }: { children: React.ReactNode } ) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      { children }
    </motion.div>
  )
}

export default FadeUp;