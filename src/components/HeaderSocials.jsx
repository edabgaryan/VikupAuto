// Hero.jsx
import React from "react";
import hero from "../assets/hero/hero-phone-orig.webp";
import Seo from "../seo/Seo";

export default function Hero({ onOpen }) {
  return (
    <>
      <Seo
        title="VikupAuto39 — срочный выкуп авто в Калининграде"
        description="Быстрый и честный выкуп автомобилей в Калининграде. Оценка за 5 минут по фото, оформление и деньги в день сделки."
        url="https://vikupauto39.ru/"
        image="https://vikupauto39.ru/images/og/home.jpg"
      />

      <section className="hero" id="top">
        <picture className="hero__bg" aria-hidden="true">
          <img
            src={hero}
            alt="Фон с автомобилем для срочного выкупа"
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
    </>
  );
}
