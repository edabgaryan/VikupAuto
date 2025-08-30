// Hero.jsx
import React from "react";
import hero from "../assets/hero/hero-phone-orig.webp";

export default function Hero({ onOpen }) {
  return (
    <section className="hero" id="top">
      <picture className="hero__bg" aria-hidden="true">
        <img
          src={hero}
          alt=""
          width="1600"
          height="900"
          loading="eager"
          fetchpriority="high" // один-единственный high на странице
          decoding="async"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </picture>

      <div className="container hero__inner">
        <h1 className="hero__title">Срочный выкуп авто</h1>
        <p className="hero__text">
          Быстрый и честный выкуп автомобилей в Калининграде. Предварительная
          оценка онлайн, оформление в течение дня.
        </p>
        <div className="hero__actions">
          <button className="btn" onClick={() => onOpen?.()}>
            Оставить заявку
          </button>
          <a
            className="btn outline"
            href="tel:+79969840162"
            aria-label="Позвонить"
          >
            +7 (996) 984-01-62
          </a>
        </div>
      </div>
    </section>
  );
}
