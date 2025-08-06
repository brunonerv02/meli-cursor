import React, { useState } from 'react';
import './PasswordProtection.css';

export default function PasswordProtection({ onAuthenticate }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const correctPassword = '0252';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setError(false);
      onAuthenticate();
    } else {
      setError(true);
      setPassword('');
    }
  };

  return (
    <div className="password-protection">
      <div className="password-protection__modal">
        <h2>Acesso Restrito</h2>
        <p>Por favor, insira a senha para continuar.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`password-protection__input ${error ? 'password-protection__input--error' : ''}`}
            autoFocus
          />
          <button type="submit" className="password-protection__button">Entrar</button>
        </form>
        {error && <p className="password-protection__error-message">Senha incorreta. Tente novamente.</p>}
      </div>
    </div>
  );
}
