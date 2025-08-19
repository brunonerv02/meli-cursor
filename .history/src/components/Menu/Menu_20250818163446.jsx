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
            className="menu"
            onClick={closeMenu}
            variants={animationVariants.menu}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="menu__container"
              onClick={(e) => e.stopPropagation()}
              layout
            >
              <motion.div className="menu__column" variants={animationVariants.menuItem}>
                {/* Coluna 1: Vídeo */}
                <motion.div className="menu__video-container" variants={animationVariants.videoItem}>
                  <video
                    ref={videoRef}
                    className="menu__video"
                    src={videoSrc}
                    muted
                    loop
                    playsInline
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  />
                </motion.div>
              </motion.div>

              <motion.div className="menu__column" variants={animationVariants.menuItem}>
                {/* Coluna 2 */}
                <motion.div className="menu__title" variants={animationVariants.menuItem}>Para você</motion.div>
                <motion.div className="menu__category" variants={animationVariants.menuItem}>Comece a usar sua conta</motion.div>
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
                <motion.div
                  className="menu__item"
                  variants={animationVariants.menuItem}
                >
                  <div className="menu__item-title">Ver todos os descontos</div>
                  <div className="menu__item-subtitle">Aproveite ofertas exclusivas</div>
                </motion.div>
              </motion.div>

              <motion.div className="menu__column" variants={animationVariants.menuItem}>
                {/* Coluna 3 */}
                <motion.div className="menu__title" variants={animationVariants.menuItem}>Mais produtos</motion.div>
                <motion.div className="menu__category" variants={animationVariants.menuItem}>Para seu dia a dia</motion.div>
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
                <motion.div
                  className="menu__item"
                  variants={animationVariants.menuItem}
                >
                  <div className="menu__item-title">Ver todos os produtos</div>
                  <div className="menu__item-subtitle">Soluções para o que precisar</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
}
