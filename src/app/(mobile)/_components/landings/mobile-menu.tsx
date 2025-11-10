'use client';

import '../../../styles/menu.scss';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { apexFont, rubikFont } from '@/assets/fonts';
import { menuItems } from '@/utils/menu/menu-items';
import LandingsMobileMenuButton from './mobile-menu-button';
import { IoBusinessOutline } from 'react-icons/io5';
import { industryItems } from '@/utils/menu/industry-items';

const LandingsMobileMenu = (
  {
      onMenuClick,
      handleScroll
  } :
  {
      onMenuClick: any,
      handleScroll: any
  }
) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const [openDropdown, setOpenDropdown] = useState(false); 

  const toggleDropdown = () => setOpenDropdown(!openDropdown);

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

  const extendedMenu = [
    ...menuItems.slice(0, 2),
    { name: 'industries', url: '', icon: <IoBusinessOutline />, dropdown: true },
    ...menuItems.slice(2)
  ];
    
  
  return (
    <div className={`menu-container ${rubikFont.className}`}>
      <LandingsMobileMenuButton onClick={toggleMenu} isOpen={isOpen} />
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 0.9, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.7 }}
            className="menu-landings items-center align-middle"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="text-center mb-10 flex flex-col justify-center"
            >
              {extendedMenu.map((item, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex flex-col items-center justify-center"
                >
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={toggleDropdown}
                        className="flex flex-row gap-3 items-center justify-center hover:text-landing-violet text-black focus:outline-none"
                      >
                        <div className="text-3xl">{item.icon}</div>
                        <span className="text-3xl">{item.name}</span>
                        <svg
                          className={`w-5 h-5 transform transition-transform duration-300 ${
                            openDropdown ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {openDropdown && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col text-3xl mt-2 overflow-hidden subitems"
                          >
                            {industryItems.map((subItem, idx) => (
                              <li key={idx}>
                                <a
                                  href={subItem.url}
                                  className="block text-3xl text-black hover:text-landing-violet transition-all duration-300"
                                  onClick={() => toggleMenu()}
                                >
                                  {subItem.name}
                                </a>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : item.url.startsWith('#') ? (
                    <a
                      href={item.url}
                      onClick={(e) => {
                        e.preventDefault();
                        handleScroll(item.url.slice(1));
                        toggleMenu();
                      }}
                      className="flex flex-row gap-5 items-center justify-center hover:text-landing-violet text-black"
                    >
                      <div className="text-3xl">{item.icon}</div>
                      <span className="text-3xl">{item.name}</span>
                    </a>
                  ) : (
                    <a
                      href={item.url}
                      className="flex flex-row gap-5 items-center justify-center hover:text-landing-violet text-3xl text-black"
                      onClick={(event) => {
                        if (item.name !== 'careers') onMenuClick(event);
                        toggleMenu();
                      }}
                    >
                      <div className="text-3xl">{item.icon}</div>
                      <span className="text-3xl">{item.name}</span>
                    </a>
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

export default LandingsMobileMenu;
