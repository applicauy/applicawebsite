import React from 'react'
import { motion } from 'framer-motion';

const ZoomIn = ( { children }: { children: React.ReactNode } ) => {
  return (
    <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.4 }}
    >
        { children }
    </motion.div>
  )
}

export default ZoomIn;