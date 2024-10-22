'use client'

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import MobileMenuButton from './mobile-menu-button';
import { apexFont } from '@/assets/fonts';
import Link from 'next/link';
import styles from '../styles/mobile-menu-buton.module.scss';
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
    hidden: { opacity: 0, x: -100 }, // Empieza fuera de la pantalla (izquierda)
    visible: (i: number) => ({
      opacity: 1,
      x: 0, // Se mueve al centro
      transition: {
        delay: i * 0.2, // Retraso entre cada elemento
        duration: 0.5, // Duración de la animación de cada elemento
      },
    }),
    exit: (i: number) => ({
        opacity: 0,
        x: -100, // Se mueve de regreso a la izquierda cuando se cierra
        transition: {
          delay: i * 0.1, // Un retraso más corto para salir rápidamente
          duration: 0.4,
        },
    }),
  };


  return (
    <div className={`menu-container ${ apexFont.className }`}>
      <MobileMenuButton onClick={toggleMenu} isOpen={ isOpen }/>
      <motion.div
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: isOpen ? 0.9 : 0, x: isOpen ? 0 : -300 }}
        transition={{ duration: 0.7 }}
        className="menu items-center align-middle"
      >
        {isOpen && (
            <motion.ul
                initial="hidden"
                animate="visible"
                className='text-center text-3xl mb-10 flex flex-col justify-center'
            >
                {menuItems.map((item, index) => (
                    <motion.li
                        key={index}
                        custom={index}
                        variants={itemVariants}
                        className='flex items-center justify-center'                       
                    >
                        <Link
                            href={ item.url }
                            target={ item.target ?? '' }
                            className='flex flex-row gap-5 items-center justify-center hover:text-highlight'
                            onClick={ toggleMenu }
                        >
                            <div className='text-3xl'>
                                { item.icon }
                            </div> 
                            {item.name}
                        </Link>
                    </motion.li>
                ))}
                </motion.ul>
            )}
      </motion.div>
    </div>
  );
};

export default MobileMenu;