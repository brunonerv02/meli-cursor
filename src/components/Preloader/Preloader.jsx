import React from 'react';
import './Preloader.css';
import { logoMP } from '../../assets/images';

export default function Preloader() {
  return (
    <div className="preloader">
      <img src={logoMP} alt="Loading..." className="preloader__logo" />
    </div>
  );
}
