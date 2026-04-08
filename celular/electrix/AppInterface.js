import React, { useState, useEffect } from 'react';
import './AppInterface.css';

const AppInterface = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const screenshots = [
    './photos/print_CD1.jpeg',
    './photos/print_CD2.jpeg',
    './photos/print_CD3.jpeg',
    './photos/print_CD4.jpeg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [screenshots.length]);

  return (
    <div className="slider-container">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {screenshots.map((src, index) => (
          <div key={index} className="slide">
            <img
              src={src}
              alt={`Screenshot ${index + 1}`}
              className="app-screenshot"
            />
          </div>
        ))}
      </div>

      {/* Indicadores Avançados (Ping Vermelho Viajante) */}
      <div className="slider-dots-container">
        <div className="dots-wrapper">
          {screenshots.map((_, index) => (
            <div
              key={index}
              className="dot-bg"
              onClick={() => setCurrentSlide(index)}
            />
          ))}

          {/* O Ponto Vermelho que viaja entre as posições */}
          <div
            className="active-indicator"
            style={{
              left: `${12 + (currentSlide * 20)}px` // Ajuste dinâmico da posição
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AppInterface;