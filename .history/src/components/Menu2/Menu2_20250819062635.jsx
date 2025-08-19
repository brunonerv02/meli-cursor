import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Portal from '../Portal/Portal';
import menuImage from '../../assets/images/img-menu-02.png';
import iconArrow from '../../assets/images/arrow_02.svg';
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
              <div className="menu__column">
                <div className="menu__column-scrollable">
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
                    <div className="menu__item-subtitle"><p>Venda mais e pague menos taxas</p></div>
                  </motion.div>
                  <motion.div className="menu__item" variants={animationVariants.menuItem}>
                    <div className="menu__item-title"><p>Point Tap</p></div>
                    <div className="menu__item-subtitle"><p>Venda usando só o celular</p></div>
                  </motion.div>
                  <motion.div className="menu__item" variants={animationVariants.menuItem}>
                    <div className="menu__item-title"><p>Tap to Pay no iPhone</p></div>
                    <div className="menu__item-subtitle"><p>Receba por aproximação no iPhone</p></div>
                  </motion.div>
                  <motion.div className="menu__item" variants={animationVariants.menuItem}>
                    <div className="menu__item-title"><p>Link de pagamento </p></div>
                    <div className="menu__item-subtitle"><p>Cobre nas nas redes sociais</p></div>
                  </motion.div>
                  <motion.div className="menu__item" variants={animationVariants.menuItem}>
                    <div className="menu__item-title"><p>Pix </p></div>
                    <div className="menu__item-subtitle"><p>Receba no app ou maquininha</p></div>
                  </motion.div>
                  <motion.div className="menu__item" variants={animationVariants.menuItem}>
                    <div className="menu__item-title"><p>Checkout para loja virtual </p></div>
                    <div className="menu__item-subtitle"><p>Soluções sob medida para sua loja </p></div>
                  </motion.div>
                  <motion.div className="menu__item" variants={animationVariants.menuItem}>
                    <div className="menu__item-title"><p>Planos de assinatura </p></div>
                    <div className="menu__item-subtitle"><p>Faça cobranças automáticas</p></div>
                  </motion.div>
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
                    Peça sem anuidade
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
                    Pague em até 24x 
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
                    Rendimentos e investimentos
                    </p>
                  </div>
                  <div
                    className="menu__item-subtitle"
                  >
                    <p>
                    Rende até 120% do CDI
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
                    Mercado Livre Negócios
                    </p>
                  </div>
                  <div
                    className="menu__item-subtitle"
                  >
                    <p>
                      
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
                      Ser revendedor Point
                    </p>
                  </div>
                  <div
                    className="menu__item-subtitle"
                  >
                    <p>
                    Conhecer o Programa de parcerias
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
                    Developers
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
