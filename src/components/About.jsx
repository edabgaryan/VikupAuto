import React from "react";
import aboutCar1x from "../assets/about/about-red-car.webp";
import Seo from "../seo/Seo";

export default function About() {
  return (
    <>
      <Seo
        title="О нас | VikupAuto39"
        description="VikupAuto39 — команда, которая помогает продать авто быстро и прозрачно. Работаем официально, без скрытых комиссий. Предварительная оценка, быстрый осмотр и оформление документов."
        url="https://vikupauto39.ru/about"
        image="https://vikupauto39.ru/images/og/about.jpg"
      />

      <section className="about" id="about">
        <div className="about__container">
          <div className="about__content">
            <h2 className="about__title">О нас</h2>
            <p className="about__text">
              VikupAuto39 — команда, которая помогает продать авто быстро и
              прозрачно. Работаем официально, без скрытых комиссий и
              навязываний.
            </p>
            <p className="about__text">
              Мы ценим ваше время: предварительная оценка по фото/описанию,
              быстрый осмотр и оформление документов. Деньги — в день сделки.
            </p>
            <p className="about__highlight">Выкупаем авто в любом состоянии.</p>
          </div>

          <div className="about__image">
            <img
              className="about__i-img"
              src={aboutCar1x}
              alt="Команда VikupAuto39 и выкупленные авто"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </>
  );
}
