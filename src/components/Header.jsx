import React, { useState, useEffect, useRef } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

export default function Header({ onOpen }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  // Закрытие при ресайзе на десктоп
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 900) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Закрытие по клику вне меню и по Esc
  useEffect(() => {
    const onDocPointer = (e) => {
      if (!open) return;
      const menu = menuRef.current;
      const burger = burgerRef.current;
      const target = e.target;
      const clickInsideMenu = menu && menu.contains(target);
      const clickOnBurger = burger && burger.contains(target);
      if (!clickInsideMenu && !clickOnBurger) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onDocPointer);
    document.addEventListener("touchstart", onDocPointer, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocPointer);
      document.removeEventListener("touchstart", onDocPointer);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <div>
            <a href="#top" className="header__logo" />
          </div>

          <div className="header-cta">
            <div className="socials" aria-label="Социальные сети">
              <a
                className="phone"
                href="tel:+79969840162"
                aria-label="Позвонить"
              >
                <FaPhone className="header-social" />{" "}
                <span className="phone__text">+7 (996) 984-01-62</span>
              </a>
              <a
                href="https://t.me/vikupauto_39"
                target="_blank"
                rel="noreferrer"
                title="Telegram"
              >
                <FaTelegramPlane className="header-social" />
              </a>
              <a
                href="https://wa.me/79969840162"
                target="_blank"
                rel="noreferrer"
                title="WhatsApp"
              >
                <IoLogoWhatsapp className="header-social" />
              </a>
            </div>

            <button className="btn header-cta__cta" onClick={() => onOpen?.()}>
              Оставить заявку
            </button>

            <button
              ref={burgerRef}
              className={`burger ${open ? "is-active" : ""}`}
              aria-label={open ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* Выпадающее меню */}
        <div ref={menuRef} className={`mobile-menu ${open ? "is-open" : ""}`}>
          <div
            className="container header-inner-mob"
            style={{ padding: "10px 0", display: "grid", gap: "10px" }}
          >
            <a href="#about" onClick={() => setOpen(false)}>
              О нас
            </a>
            <a href="#benefits" onClick={() => setOpen(false)}>
              Преимущества
            </a>
            <a href="#services" onClick={() => setOpen(false)}>
              Услуги
            </a>
            <a href="#messengers" onClick={() => setOpen(false)}>
              Контакты
            </a>
            <button
              className="btn"
              onClick={() => {
                onOpen?.();
                setOpen(false);
              }}
            >
              Оставить заявку
            </button>
          </div>
        </div>
      </header>

      {/* Полупрозрачная/прозрачная подложка по всей странице — клик закрывает меню */}
      {open && <div className="menu-backdrop" onClick={() => setOpen(false)} />}
    </>
  );
}
