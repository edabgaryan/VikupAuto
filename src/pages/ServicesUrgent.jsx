// src/pages/ServicesUrgent.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../seo/Seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LeadModal from "../components/LeadModal";

export default function ServicesUrgent() {
  const [openModal, setOpenModal] = useState(false);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Срочный выкуп авто за 1 день",
    provider: { "@type": "LocalBusiness", name: "ВЫКУПАВТО39" },
    areaServed: "Калининград и область",
    url: "https://vikupauto39.ru/uslugi/srochnyj-vykup",
    description:
      "Срочный выкуп автомобиля в Калининграде за 1 день. Оценка по фото, выезд, оформление и моментальная выплата.",
    serviceType: "Срочный выкуп автомобиля",
    offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
  };

  return (
    <>
      <Seo
        description="Срочный выкуп авто в Калининграде за 1 день. Оценка по фото, бесплатный выезд, оформление договора и моментальная выплата наличными или переводом."
        url="https://vikupauto39.ru/uslugi/srochnyj-vykup"
        image="https://vikupauto39.ru/og-image.jpg"
        jsonLd={jsonLd}
      />

      <Header onOpen={() => setOpenModal(true)} />

      <main className="page page--service">
        {/* Hero */}
        <section className="section section--hero">
          <div className="container">
            <h1 className="h1">Срочный выкуп автомобиля за 1 день</h1>
            <p className="lead">
              Дадим предложение <strong>за 10–15 минут по фото</strong>, приедем
              в удобное время, оформим и<strong> выплатим деньги сразу</strong>{" "}
              — наличными или переводом.
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
              <li>⚡ За 1 день</li>
              <li>✅ Официальный договор</li>
              <li>💳 Любой способ оплаты</li>
            </ul>
          </div>
        </section>

        {/* Преимущества */}
        <section className="section">
          <div className="container">
            <h2 className="h2">Почему это быстро и удобно</h2>
            <div className="grid grid--3">
              <div className="card">
                <h3>Оценка по фото</h3>
                <p>
                  Вы присылаете 5–7 фото + данные (год, пробег, комплектация) —
                  даём цену сразу.
                </p>
              </div>
              <div className="card">
                <h3>Выезд в день обращения</h3>
                <p>
                  Подстроимся под ваш график, оформим на месте. Авто «не на
                  ходу» — организуем эвакуатор.
                </p>
              </div>
              <div className="card">
                <h3>Моментальная выплата</h3>
                <p>
                  Наличные или перевод на карту/счёт сразу после подписания
                  договора.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Как это работает */}
        <section className="section section--alt">
          <div className="container">
            <h2 className="h2">Как проходит срочный выкуп</h2>
            <ol className="steps">
              <li>
                <strong>Оценка</strong> — фото + краткое описание (год, пробег,
                комплектация, состояние).
              </li>
              <li>
                <strong>Фиксация цены</strong> — согласуем сумму и время
                встречи.
              </li>
              <li>
                <strong>Осмотр и договор</strong> — проверяем VIN/документы,
                подписываем типовой договор.
              </li>
              <li>
                <strong>Выплата</strong> — выдаём деньги сразу. Забираем
                авто/эвакуатор по необходимости.
              </li>
            </ol>
            <div className="cta-row">
              <Link className="btn btn--ghost" to="/uslugi/momentnaya-vyplata">
                Моментальная выплата
              </Link>
              <Link
                className="btn btn--ghost"
                to="/uslugi/vykup-avto-posle-dtp"
              >
                Выкуп после ДТП
              </Link>
            </div>
          </div>
        </section>

        {/* Что нужно подготовить */}
        <section className="section">
          <div className="container">
            <h2 className="h2">Что нужно от вас</h2>
            <ul className="list">
              <li>Паспорт владельца, ПТС и СТС (если есть).</li>
              <li>Фото кузова с 4 сторон, салона, пробега на панели.</li>
              <li>Информация о комплектации и известных дефектах.</li>
            </ul>
          </div>
        </section>

        {/* Короткий FAQ */}
        <section className="section section--alt">
          <div className="container">
            <h2 className="h2">Частые вопросы</h2>
            <details className="faq">
              <summary>Можно ли сегодня?</summary>
              <p>
                Часто — да. Напишите фото и район, согласуем ближайшее время
                выезда.
              </p>
            </details>
            <details className="faq">
              <summary>Нужна предоплата?</summary>
              <p>
                Нет. Мы оплачиваем автомобиль сразу при оформлении договора.
              </p>
            </details>
            <details className="faq">
              <summary>Какой способ расчёта?</summary>
              <p>Наличные или безналичный перевод — на ваш выбор.</p>
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
