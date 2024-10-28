'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MobileMenuButton from './mobile-menu-button';
import { apexFont } from '@/assets/fonts';
import Link from 'next/link';
import { menuItems } from '@/utils/menu/menu-items';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0, 
      transition: {
        delay: i * 0.15, 
        duration: 0.8, 
      },
    }),
    exit: (i: number) => ({
      opacity: 0,
      x: -100, 
      transition: {
        delay: i * 0.09, 
        duration: 0.9,
      },
    }),
  };

  const handleScroll = (id: any) => {
      const element = document.getElementById(id);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
  };

  return (
    <div className={`menu-container ${apexFont.className}`}>
      <MobileMenuButton onClick={toggleMenu} isOpen={isOpen} />
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 0.9, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.7 }}
            className="menu items-center align-middle"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="text-center text-3xl mb-10 flex flex-col justify-center"
            >
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex items-center justify-center"
                >
                    {item.url.startsWith('#') ? (
                        <button
                            onClick={() => {
                                handleScroll(item.url.slice(1));
                                toggleMenu(); // Cierra el menú después de hacer clic
                            }}
                            className="flex flex-row gap-5 items-center justify-center hover:text-highlight"
                        >
                            <div className="text-3xl">{item.icon}</div>
                            {item.name}
                        </button>
                    ) : (
                        <Link
                            href={item.url}
                            target={item.target ?? ''}
                            className="flex flex-row gap-5 items-center justify-center hover:text-highlight"
                            onClick={toggleMenu} // Cierra el menú después de hacer clic
                        >
                            <div className="text-3xl">{item.icon}</div>
                            {item.name}
                        </Link>
                    )}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
