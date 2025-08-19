import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Portal from '../Portal/Portal';
import videoSrc from '../../assets/videos/moedas.mp4';
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
  },
  subtitle: {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
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
            onClick={closeMenu}
            onMouseLeave={closeMenu}
          >
            <div
              className="menu__container"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                className="menu__column"
                variants={animationVariants.videoItem}
              >
                <video 
                  ref={videoRef}
                  className="menu__video"
                  src={videoSrc} 
                  onMouseEnter={handleMouseEnter} 
                  onMouseLeave={handleMouseLeave}
                  muted 
                  loop 
                  playsInline
                >
                </video>
              </motion.div>
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
                  <motion.div
                    className="menu__item-subtitle"
                    variants={animationVariants.subtitle}
                  >
                    <p>
                      Dinheiro separado por objetivos
                    </p>
                  </motion.div>
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
                  <motion.div
                    className="menu__item-subtitle"
                    variants={animationVariants.subtitle}
                  >
                    <p>
                      Rendimento desde o 1º dia
                    </p>
                  </motion.div>
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
                  <motion.div
                    className="menu__item-subtitle"
                    variants={animationVariants.subtitle}
                  >
                    <p>
                      Compras em até 18x sem juros
                    </p>
                  </motion.div>
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
                  <motion.div
                    className="menu__item-subtitle"
                    variants={animationVariants.subtitle}
                  >
                    <p>
                      Rendimento desde o 1º dia
                    </p>
                  </motion.div>
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
                  <motion.div
                    className="menu__item-subtitle"
                    variants={animationVariants.subtitle}
                  >
                    <p>
                      Crédito 100% online e na hora
                    </p>
                  </motion.div>
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
                  <motion.div
                    className="menu__item-subtitle"
                    variants={animationVariants.subtitle}
                  >
                    <p>
                      Pix, boletos e transferências
                    </p>
                  </motion.div>
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
                  <motion.div
                    className="menu__item-subtitle"
                    variants={animationVariants.subtitle}
                  >
                    <p>
                      Proteção para o que importa
                    </p>
                  </motion.div>
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
                  <motion.div
                    className="menu__item-subtitle"
                    variants={animationVariants.subtitle}
                  >
                    <p>{`Opções a partir de R$ 1 `}</p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
}
