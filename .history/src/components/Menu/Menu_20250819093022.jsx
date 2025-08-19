import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Portal from '../Portal/Portal';
import menuImage from '../../assets/images/img-menu-01.png';
import iconArrow from '../../assets/images/arrow_02.svg';
import './Menu.css';

const animationVariants = {
  menu: {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.03
      }
    }
  },
  videoItem: {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4, // Você pode controlar a duração do vídeo aqui
        ease: "easeOut",
        delay: 0.2 // Atraso para o vídeo aparecer
      }
    }
  }
};

export default function Menu({ isOpen, closeMenu }) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <Portal>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            transition={{ duration: 0.5, ease: [0.00, 0.56, 0.46, 1.00] }}
            className="menu"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={animationVariants.menu}
            onMouseLeave={closeMenu}
          >
            <div
              className="menu__container"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                className="menu__column menu__column--new"
                variants={animationVariants.videoItem}
              >
                <div
                  className="menu__image"
                  style={{ backgroundImage: `url('${menuImage}')` }}
                />
                <div className="menu__title-new">
                  <p>A conta completa do Mercado Livre</p>
                </div>
                <div className="menu__cta">
                  <p>Conhecer Conta Digital</p>
                  <img src={iconArrow} alt="arrow icon" />
                </div>
              </motion.div>
              <div
                className="menu__column"
              >
                <div
                  className="menu__category"
                >
                  <p>
                    Rendimentos
                  </p>
                </div>
                <div
                  className="menu__item"
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
                    Rendem até 120% do CDI
                    </p>
                  </div>
                </div>
                <div
                  className="menu__item"
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
                    Rende até 105% do CDI
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="menu__column"
              >
                <div
                  className="menu__category"
                >
                  <p>
                    Crédito
                  </p>
                </div>
                <div
                  className="menu__item"
                >
                  <div
                    className="menu__item-title"
                  >
                    <p>
                      Cartão
                    </p>
                  </div>
                  <div
                    className="menu__item-subtitle"
                  >
                    <p>
                      Até 18x sem juros
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
                      Linha de crédito
                    </p>
                  </div>
                  <div
                    className="menu__item-subtitle"
                  >
                    <p>
                    Compras sem cartão
                    </p>
                  </div>
                </div>
                <div
                  className="menu__item"
                >
                  <div
                    className="menu__item-subtitle"
                  >
                    <p>
                      Crédito 100% online e na hora
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="menu__column"
              >
                <div
                  className="menu__category"
                >
                  <p>
                    Serviços
                  </p>
                </div>
                <div
                  className="menu__item"
                >
                  <div
                    className="menu__item-title"
                  >
                    <p>
                    Pagamentos e tarifas
                    </p>
                  </div>
                  <div
                    className="menu__item-subtitle"
                  >
                    <p>
                      Pix e boletos
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
                </div>
                <div
                  className="menu__item"
                >
                  <div
                    className="menu__item-subtitle"
                  >
                    <p>{`Opções a partir de R$ 1 `}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
}
