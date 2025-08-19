import React, { useRef } from 'react';
import Portal from '../Portal/Portal';
import videoSrc from '../../assets/videos/moedas.mp4';
import './Menu.css';

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

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
          <div
            className="menu"
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
                      Dinheiro separado por objetivos
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
                      Rendimento desde o 1º dia
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
                      Rendimento desde o 1º dia
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
                </div>
              </div>
            </div>
          </div>
    </Portal>
  );
}
