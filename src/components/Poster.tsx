import type { FC } from "react";
import urus from '../public/URUS.png';
import '../styles/Poster.css';

export const Poster: FC = () => {
  return (
    <section className="poster">
      <div className="poster-content">
        <div className="poster-text">
          <div className="poster-discount">20% Скидка</div>
          <div className="poster-subtitle">Это бестселлер 2024</div>
          <h1 className="poster-title">Тормозные колодки для<br />Lamborgini Urus</h1>
          <button className="poster-button">Купить сейчас</button>
        </div>
        <div className="poster-image">
          <img src={urus} alt="Lamborghini Urus" className="car-image" />
        </div>
      </div>
    </section>
  );
};