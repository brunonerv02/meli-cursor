import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Preloader from './components/Preloader/Preloader';
import PasswordProtection from './components/PasswordProtection/PasswordProtection';

// Import assets to be preloaded
import imgBg5 from './assets/images/img-bg5.png';
import moedasVideo from './assets/videos/moedas.mp4';
import maquininhaVideo from './assets/videos/maquininha2.mp4';

const assetsToPreload = [
  imgBg5,
  moedasVideo,
  maquininhaVideo,
];

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) return;

    const preloadAssets = async () => {
      try {
        const promises = assetsToPreload.map((src) => {
          return new Promise((resolve, reject) => {
            if (src.endsWith('.mp4')) {
              const video = document.createElement('video');
              video.src = src;
              video.oncanplaythrough = resolve;
              video.onerror = reject;
            } else {
              const img = new Image();
              img.src = src;
              img.onload = resolve;
              img.onerror = reject;
            }
          });
        });

        await document.fonts.ready;
        await Promise.all(promises);

        setTimeout(() => {
          setLoading(false);
        }, 500);

      } catch (error) {
        console.error("Failed to preload assets", error);
        setLoading(false);
      }
    };

    preloadAssets();
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <PasswordProtection onAuthenticate={() => setIsAuthenticated(true)} />;
  }

  return (
    <>
      <div 
        className="preloader-container" 
        style={{ 
          opacity: loading ? 1 : 0, 
          visibility: loading ? 'visible' : 'hidden' 
        }}
      >
        <Preloader />
      </div>
      <div 
        className="App" 
        style={{ 
          opacity: loading ? 0 : 1,
          visibility: loading ? 'hidden' : 'visible'
        }}
      >
        <div className="background-container" />
        <Header />
      </div>
    </>
  );
}

export default App;
