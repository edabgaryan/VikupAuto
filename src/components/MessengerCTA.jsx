import React from "react";
import phone1x from "../assets/messengers/phone.webp";

export default function MessengerCTA() {
  return (
    <section className="messengers" id="messengers">
      <div className="messengers__container">
        <div className="messengers__band">
          <div className="messengers__content">
            <h3 className="messengers__title">
              Узнайте цену своего авто в мессенджер
            </h3>
            <div className="messengers__buttons">
              <a
                className="btn"
                href="https://t.me/vikupauto_39"
                target="_blank"
                rel="noreferrer"
              >
                Оценить в Telegram
              </a>
              <a
                className="btn outline"
                href="https://wa.me/79969840162"
                target="_blank"
                rel="noreferrer"
              >
                Оценить в WhatsApp
              </a>
            </div>
          </div>

          <div className="messengers__phone">
            <img
              className="messengers__img"
              src={phone1x}
              srcSet={phone1x}
              alt="Телефон с мессенджерами"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
