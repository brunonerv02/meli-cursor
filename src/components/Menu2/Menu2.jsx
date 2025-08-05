import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Portal from '../Portal/Portal';
import videoSrc from '../../assets/videos/maquininha2.mp4';
import './Menu2.css';

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
  }
};

export default function Menu2({ isOpen, closeMenu }) {
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
              <div
                className="menu__column"
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
              </div>
              <div
                className="menu__column"
              >
                <motion.div
                  className="menu__category"
                  variants={animationVariants.menuItem}
                >
                  <p>
                  Soluções de vendas
                  </p>
                </motion.div>
                <motion.div className="menu__item" variants={animationVariants.menuItem}>
                  <div className="menu__item-title"><p>Maquininhas point</p></div>
                  <div className="menu__item-subtitle"><p>Dinheiro separado por objetivos</p></div>
                </motion.div>
                <motion.div className="menu__item" variants={animationVariants.menuItem}>
                  <div className="menu__item-title"><p>Point Tap</p></div>
                  <div className="menu__item-subtitle"><p>Rendimento desde o 1º dia</p></div>
                </motion.div>
                <motion.div className="menu__item" variants={animationVariants.menuItem}>
                  <div className="menu__item-title"><p>Link de pagamento</p></div>
                  <div className="menu__item-subtitle"><p>Dinheiro separado por objetivos</p></div>
                </motion.div>
                <motion.div className="menu__item" variants={animationVariants.menuItem}>
                  <div className="menu__item-title"><p>Pix</p></div>
                  <div className="menu__item-subtitle"><p>Rendimento desde o 1º dia</p></div>
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
                  Serviços financeiros
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
                  Benefícios e parceiros
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
}
