import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Header.css';

import { logoMP, iconShape } from '../../assets/images';
import Menu from '../Menu/Menu';
import Menu2 from '../Menu2/Menu2';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  const closeMenu = () => {
    setActiveMenu(null);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };
    if (activeMenu) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [activeMenu]);

  const animationVariants = {
    navbar: {
      open: {
        backgroundColor: 'transparent',
        transition: { duration: 8, ease: 'easeInOut' }
      },
    },
  };

  return (
    <div className="header">
      <motion.div
        className={`navbar ${activeMenu ? 'navbar--menu-open' : ''}`}
        variants={animationVariants.navbar}
        animate={activeMenu ? 'open' : 'closed'}
        initial="closed"
      >
        <div className="navbar__container">
          <div className="navbar__ctas-group">
            <div className="navbar__logo">
              <img alt="Mercado Pago Logo" className="navbar__logo-img" src={logoMP} />
            </div>
            <div
              className={`navbar__cta-item ${activeMenu === 'menu1' ? 'navbar__cta-item--active' : ''}`}
              onClick={() => toggleMenu('menu1')}
            >
              <div className="navbar__cta-text">
                <p>Conta Digital</p>
              </div>
              <div className="navbar__cta-icon">
                <motion.img
                  alt="Arrow down"
                  className="navbar__cta-icon-img"
                  src={iconShape}
                  animate={{ rotate: activeMenu === 'menu1' ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
            <div 
              className={`navbar__cta-item ${activeMenu === 'menu2' ? 'navbar__cta-item--active' : ''}`}
              onClick={() => toggleMenu('menu2')}
            >
              <div className="navbar__cta-text">
                <p>Conta Negócio</p>
              </div>
              <div className="navbar__cta-icon">
                <motion.img 
                  alt="Arrow down" 
                  className="navbar__cta-icon-img" 
                  src={iconShape} 
                  animate={{ rotate: activeMenu === 'menu2' ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </div>
          <div className="navbar__ctas-group">
            <div className="navbar__cta-item">
              <div className="navbar__cta-text">
                <p>Ajuda</p>
              </div>
            </div>
            <div className="navbar__cta-item">
              <div className="navbar__cta-text">
                <p>Iniciar sessão</p>
              </div>
            </div>
            <div className="navbar__cta-item navbar__cta-item--primary">
              <div className="navbar__cta-text navbar__cta-text--inverted">
                <p>Abrir conta grátis</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Menu isOpen={activeMenu === 'menu1'} closeMenu={closeMenu} />
      <Menu2 isOpen={activeMenu === 'menu2'} closeMenu={closeMenu} />
    </div>
  );
}
