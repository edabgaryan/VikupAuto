// src/pages/ServicesBuyDamaged.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../seo/Seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LeadModal from "../components/LeadModal";

export default function ServicesBuyDamaged() {
  const [openModal, setOpenModal] = useState(false);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Выкуп авто после ДТП",
    provider: { "@type": "LocalBusiness", name: "ВЫКУПАВТО39" },
    areaServed: "Калининград и область",
    url: "https://vikupauto39.ru/uslugi/vykup-avto-posle-dtp",
    description:
      "Покупаем аварийные автомобили в любом состоянии. Быстрая оценка по фото, бесплатный выезд и эвакуатор, выплата на месте.",
    serviceType: "Выкуп авто после ДТП",
    offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
  };

  return (
    <>
      <Seo
        description="Выкуп авто после ДТП в Калининграде. Берём аварийные и не на ходу, с запретами. Бесплатная оценка за 15 минут, эвакуатор и моментальная выплата."
        url="https://vikupauto39.ru/uslugi/vykup-avto-posle-dtp"
        image="https://vikupauto39.ru/og-image.jpg"
        jsonLd={jsonLd}
      />

      <Header onOpen={() => setOpenModal(true)} />

      <main className="page page--service">
        {/* Hero */}
        <section className="section section--hero">
          <div className="container">
            <h1 className="h1">Выкуп авто после ДТП в Калининграде</h1>
            <p className="lead">
              Покупаем автомобили в аварийном состоянии, даже если они{" "}
              <strong>не на ходу</strong>. Бесплатный выезд и эвакуатор. Деньги
              — сразу после оформления договора.
            </p>
            <div className="cta-row">
              <a className="btn btn--primary" href="tel:+79969840162">
                Позвонить
              </a>
              <button
                className="btn btn--secondary"
                onClick={() => setOpenModal(true)}
              >
                Оставить заявку
              </button>
            </div>
            <ul className="badges">
              <li>🚗 Любое состояние</li>
              <li>⚡ Быстрое оформление</li>
              <li>💳 Выплата на месте</li>
            </ul>
          </div>
        </section>

        {/* Преимущества */}
        <section className="section">
          <div className="container">
            <h2 className="h2">Что мы предлагаем</h2>
            <div className="grid grid--3">
              <div className="card">
                <h3>Покупаем без ограничений</h3>
                <p>
                  После ДТП, сгоревшие, не на ходу, с запретами на регистрацию —
                  рассмотрим любой вариант.
                </p>
              </div>
              <div className="card">
                <h3>Эвакуатор бесплатно</h3>
                <p>
                  Если авто не на ходу — организуем транспортировку за наш счёт.
                </p>
              </div>
              <div className="card">
                <h3>Честная оценка</h3>
                <p>
                  Предварительно оцениваем по фото за 10–15 минут, окончательная
                  цена фиксируется при встрече.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Как проходит сделка */}
        <section className="section section--alt">
          <div className="container">
            <h2 className="h2">Как проходит выкуп</h2>
            <ol className="steps">
              <li>
                <strong>Присылаете фото</strong> и данные (год, пробег,
                комплектация, известные повреждения).
              </li>
              <li>
                <strong>Согласуем цену</strong> и договариваемся о времени
                встречи.
              </li>
              <li>
                <strong>Выезд и осмотр</strong> — приезжаем на место, если нужно
                — привозим эвакуатор.
              </li>
              <li>
                <strong>Оформление и выплата</strong> — подписываем договор,
                выдаём деньги сразу.
              </li>
            </ol>
            <div className="cta-row">
              <Link className="btn btn--ghost" to="/uslugi/momentnaya-vyplata">
                Моментальная выплата
              </Link>
              <Link className="btn btn--ghost" to="/faq">
                FAQ
              </Link>
            </div>
          </div>
        </section>

        {/* Документы */}
        <section className="section">
          <div className="container">
            <h2 className="h2">Что нужно подготовить</h2>
            <ul className="list">
              <li>Паспорт владельца.</li>
              <li>ПТС и СТС (если сохранились).</li>
              <li>Фото кузова, салона, пробега.</li>
              <li>Ключи и сервисная книжка (по возможности).</li>
            </ul>
          </div>
        </section>

        {/* FAQ мини-блок */}
        <section className="section section--alt">
          <div className="container">
            <h2 className="h2">Частые вопросы</h2>
            <details className="faq">
              <summary>А если машина не на ходу?</summary>
              <p>Мы приедем с эвакуатором и заберём её бесплатно.</p>
            </details>
            <details className="faq">
              <summary>Сколько времени займёт сделка?</summary>
              <p>В среднем 30–60 минут, включая оформление договора.</p>
            </details>
            <details className="faq">
              <summary>Как я получу деньги?</summary>
              <p>Наличными или переводом на карту — выбираете сами.</p>
            </details>
            <div className="cta-row">
              <a className="btn btn--primary" href="tel:+79969840162">
                Позвонить сейчас
              </a>
              <button
                className="btn btn--secondary"
                onClick={() => setOpenModal(true)}
              >
                Оставить заявку
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {openModal && <LeadModal onClose={() => setOpenModal(false)} />}
    </>
  );
}
