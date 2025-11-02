import React, { useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../seo/Seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LeadModal from "../components/LeadModal";

export default function FAQ() {
  const [openModal, setOpenModal] = useState(false);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Как быстро я получу деньги?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Как правило, сразу после подписания договора: наличными или переводом на карту. Вся встреча занимает 30–60 минут.",
        },
      },
      {
        "@type": "Question",
        name: "Покупаете ли авто после ДТП или не на ходу?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Покупаем автомобили после ДТП и не на ходу. При необходимости организуем эвакуатор по договорённости.",
        },
      },
      {
        "@type": "Question",
        name: "Какие документы нужны для сделки?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Паспорт владельца, ПТС и СТС (если есть). Желательно ключи/брелоки и сервисная книжка.",
        },
      },
      {
        "@type": "Question",
        name: "Как формируется цена выкупа?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Оцениваем состояние кузова и агрегатов, пробег, год, комплектацию, ликвидность модели и рыночную ситуацию. Предварительную цену даём по фото, финальную — после осмотра.",
        },
      },
      {
        "@type": "Question",
        name: "Нужно ли снимать авто с учёта?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет, это не обязательно для сделки купли-продажи. Мы оформляем договор и дальнейшие действия берём на себя.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли получить деньги на карту?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Вы выбираете способ расчёта: наличные или перевод на карту/счёт.",
        },
      },
    ],
  };

  return (
    <>
      <Seo
        title="FAQ — ответы на частые вопросы о срочном выкупе авто в Калининграде | VikupAuto39"
        description="Частые вопросы о срочном выкупе авто в Калининграде: сроки оценки, документы, оформление, деньги на карту или наличными, выкуп после ДТП и не на ходу."
        url="https://vikupauto39.ru/faq"
        image="https://vikupauto39.ru/og-image.jpg"
        jsonLd={jsonLd}
      />

      <Header onOpen={() => setOpenModal(true)} />

      <main className="page page--service">
        {/* Hero */}
        <section className="section section--hero">
          <div className="container">
            <h1 className="h1">Частые вопросы</h1>
            <p className="lead">
              Если не нашли ответ — позвоните или оставьте заявку, мы быстро
              подскажем.
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
          </div>
        </section>

        {/* Список вопросов */}
        <section className="section">
          <div className="container">
            <h2 className="h2">Популярные темы</h2>

            <details className="faq">
              <summary>Как быстро я получу деньги?</summary>
              <p>
                Сразу после подписания договора: наличными или переводом на
                карту. Встреча обычно занимает 30–60 минут.
              </p>
            </details>

            <details className="faq">
              <summary>Покупаете ли авто после ДТП или не на ходу?</summary>
              <p>
                Да, выкупаем такие автомобили. По договорённости предоставляем
                эвакуатор, его стоимость учитываем при расчёте.
              </p>
            </details>

            <details className="faq">
              <summary>Какие документы нужны?</summary>
              <p>
                Паспорт владельца, ПТС и СТС (если есть). Также пригодятся
                ключи/брелоки и сервисная книжка.
              </p>
            </details>

            <details className="faq">
              <summary>Как вы определяете цену?</summary>
              <p>
                Учитываем год, пробег, комплектацию, состояние кузова и
                агрегатов, ликвидность модели и рынок. Предварительную цену
                называем по фото, финальную — после осмотра.
              </p>
            </details>

            <details className="faq">
              <summary>Нужно ли снимать авто с учёта?</summary>
              <p>
                Нет, для сделки купли-продажи это не требуется. Мы оформляем
                договор, дальнейшие действия берём на себя.
              </p>
            </details>

            <details className="faq">
              <summary>Можно ли получить деньги на карту?</summary>
              <p>Да, возможны наличные и безналичный перевод на карту/счёт.</p>
            </details>

            <div className="cta-row" style={{ marginTop: 24 }}>
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
      </main>

      <Footer />

      {openModal && <LeadModal onClose={() => setOpenModal(false)} />}
    </>
  );
}
