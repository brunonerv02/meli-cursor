import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

import { logoMP, iconShape } from '../../assets/images';
import Portal from '../Portal/Portal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };
    if (isMenuOpen) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isMenuOpen]);

  const animationVariants = {
  navbar: {
    open: {
      backgroundColor: 'transparent',
      transition: { duration: 8, ease: 'easeInOut' }
    },
    // closed: {
    //   backgroundColor: '#ffe600',
    //   transition: { duration: 8, ease: 'easeInOut' }
    // }
  },
  menu: {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        // when: "beforeChildren",
        staggerChildren: 0.03
      }
    }
  },
  menuItem : {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }
};


  return (
    <div
      className="header"
    >
      <motion.div
        className="navbar"
        variants={animationVariants.navbar}
        animate={isMenuOpen ? 'open' : 'closed'}
        initial="closed"
      >
        <div
          className="navbar__container"
        >
          <div
            className="navbar__ctas-group"
          >
            <div
              className="navbar__logo"
            >
              <img alt="Mercado Pago Logo" className="navbar__logo-img" src={logoMP} />
            </div>
            <div
              className="navbar__cta-item"
              onClick={toggleMenu}
            >
              <div
                className="navbar__cta-text"
              >
                <p>
                  Conta Digital
                </p>
              </div>
              <div
                className="navbar__cta-icon"
              >
                <motion.img
                  alt="Arrow down"
                  className="navbar__cta-icon-img"
                  src={iconShape}
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
            <div
              className="navbar__cta-item"
              onClick={toggleMenu}
            >
              <div
                className="navbar__cta-text"
              >
                <p>
                  Conta Negócio
                </p>
              </div>
              <div
                className="navbar__cta-icon"
              >
                 <motion.img
                  alt="Arrow down"
                  className="navbar__cta-icon-img"
                  src={iconShape}
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </div>
          <div
            className="navbar__ctas-group"
          >
            <div
              className="navbar__cta-item"
            >
              <div
                className="navbar__cta-text"
              >
                <p>
                  Iniciar sessão
                </p>
              </div>
            </div>
            <div
              className="navbar__cta-item navbar__cta-item--primary"
            >
              <div
                className="navbar__cta-text navbar__cta-text--inverted"
              >
                <p>
                  Abrir conta grátis
                </p>
              </div>
            </div>
            <div
              className="navbar__cta-item"
            >
              <div
                className="navbar__cta-text"
              >
                <p>Ajuda</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Portal>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              layout
              transition={{ duration: 0.5, ease: [0.00, 0.56, 0.46, 1.00] }}
              className="menu"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={animationVariants.menu}
              onClick={closeMenu}
              onMouseLeave={closeMenu}
            >
              <div
                className="menu__container"
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className="menu__column"
                >
                  <div
                    className="menu__image-placeholder"
                  />
                  <div
                    className="menu__title"
                  >
                    <p>
                      A conta completa do Mercado Livre
                    </p>
                  </div>
                </div>
                <div
                  className="menu__column"
                >
                  <motion.div
                    className="menu__category"
                    variants={animationVariants.menuItem}
                  >
                    <p>
                      Rendimentos
                    </p>
                  </motion.div>
                  <motion.div
                    className="menu__item"
                    variants={animationVariants.menuItem}
                  >
                    <div
                      className="menu__item-title"
                    >
                      <p>{`Cofrinhos`}</p>
                    </div>
                    <div
                      className="menu__item-subtitle"
                    >
                      <p>
                        Dinheiro separado por objetivos
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="menu__item"
                    variants={animationVariants.menuItem}
                  >
                    <div
                      className="menu__item-title"
                    >
                      <p>{`Dinheiro na conta`}</p>
                    </div>
                    <div
                      className="menu__item-subtitle"
                    >
                      <p>
                        Rendimento desde o 1º dia
                      </p>
                    </div>
                  </motion.div>
                </div>
                <div
                  className="menu__column"
                >
                  <motion.div
                    className="menu__category"
                    variants={animationVariants.menuItem}
                  >
                    <p>
                      Crédito
                    </p>
                  </motion.div>
                  <motion.div
                    className="menu__item"
                    variants={animationVariants.menuItem}
                  >
                    <div
                      className="menu__item-title"
                    >
                      <p>
                        Cartão de crédito
                      </p>
                    </div>
                    <div
                      className="menu__item-subtitle"
                    >
                      <p>
                        Compras em até 18x sem juros
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="menu__item"
                    variants={animationVariants.menuItem}
                  >
                    <div
                      className="menu__item-title"
                    >
                      <p>
                        Linha de crédito
                      </p>
                    </div>
                    <div
                      className="menu__item-subtitle"
                    >
                      <p>
                        Rendimento desde o 1º dia
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="menu__item"
                    variants={animationVariants.menuItem}
                  >
                    <div
                      className="menu__item-title"
                    >
                      <p>
                        Empréstimos
                      </p>
                    </div>
                    <div
                      className="menu__item-subtitle"
                    >
                      <p>
                        Crédito 100% online e na hora
                      </p>
                    </div>
                  </motion.div>
                </div>
                <div
                  className="menu__column"
                >
                  <motion.div
                    className="menu__category"
                    variants={animationVariants.menuItem}
                  >
                    <p>
                      Serviços
                    </p>
                  </motion.div>
                  <motion.div
                    className="menu__item"
                    variants={animationVariants.menuItem}
                  >
                    <div
                      className="menu__item-title"
                    >
                      <p>
                        Pagamentos
                      </p>
                    </div>
                    <div
                      className="menu__item-subtitle"
                    >
                      <p>
                        Pix, boletos e transferências
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="menu__item"
                    variants={animationVariants.menuItem}
                  >
                    <div
                      className="menu__item-title"
                    >
                      <p>
                        Seguros
                      </p>
                    </div>
                    <div
                      className="menu__item-subtitle"
                    >
                      <p>
                        Proteção para o que importa
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="menu__item"
                    variants={animationVariants.menuItem}
                  >
                    <div
                      className="menu__item-title"
                    >
                      <p>
                        Investimentos e Cripto
                      </p>
                    </div>
                    <div
                      className="menu__item-subtitle"
                    >
                      <p>{`Opções a partir de R$ 1 `}</p>
                    </div>
                  </motion.div>
                </div>
                {/* <div
                  className="menu__column"
                >
                  <div
                    className="menu__category"
                  >
                    <p>
                      AJUDA
                    </p>
                  </div>
                  <div
                    className="menu__item"
                  >
                    <div
                      className="menu__item-title"
                    >
                      <p>
                        Atendimento
                      </p>
                    </div>
                    <div
                      className="menu__item-subtitle"
                    >
                      <p>
                        Ajuda e suporte
                      </p>
                    </div>
                  </div>
                  <div
                    className="menu__item"
                  >
                    <div
                      className="menu__item-title"
                    >
                      <p>
                        Tarifas
                      </p>
                    </div>
                    <div
                      className="menu__item-subtitle"
                    >
                      <p>
                        Taxas e custos
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Portal>
    </div>
  );
}
