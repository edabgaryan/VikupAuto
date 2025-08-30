import React from "react";
import { FaInstagram, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand header__logo"></div>
          <a className="footer__phone" href="tel:+79969840162">
            +7 (996) 984-01-62
          </a>
        </div>

        <div className="footer__socials">
          <a
            href="https://t.me/vikupauto_39"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="https://wa.me/79969840162"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>

        <p className="footer__copy">© 2025 VikupAuto39. Все права защищены.</p>
      </div>
      <a href="tel:+79969840162" aria-label="Позвонить" rel="noreferrer">
        <span className="online__zapis-button ">
          <div className="online__zapis-text ">Позвонить нам</div>
        </span>
      </a>
    </footer>
  );
}
