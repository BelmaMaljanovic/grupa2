import { useEffect } from 'react';
import './avdo.css';

function Stranica() {
  useEffect(() => {
    const interval = setInterval(() => {
      document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const sparkles = Array.from({ length: 100 }, (_, i) => (
    <div key={i} className="sparkle" style={{
      left: `${1}vw`,
      top: `${1}vh`,
      animationDelay: `${Math.random() * 2}s`
    }} />
  ));

  return (
    <div className="insanity">
      <h1 className="rainbow-text">💫 Ovo je stranica Avdoo 💫</h1>
      {sparkles}
    </div>
  );
}

export default Stranica;
