// Hero.jsx
import React from "react";
import hero from "../assets/hero/hero-phone-orig.webp";
<<<<<<< HEAD

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
=======
import Seo from "../seo/Seo";

const SITE = "https://vikupauto39.ru";
const PAGE_URL = SITE;

// 1) Абсолютный URL публичной копии изображения
const SERP_IMAGE = `${SITE}/images/og-image.jpg`;

// JSON-LD: Хлебные крошки
function breadcrumbJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: PAGE_URL },
    ],
  };
}

// JSON-LD: WebPage
function webPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "Срочный выкуп авто в Калининграде | VikupAuto39",
    description:
      "Быстрый и честный выкуп автомобилей в Калининграде. Предварительная оценка онлайн, оформление в течение дня.",
    image: SERP_IMAGE, // ← указываем ту же картинку
  };
}

// 2) JSON-LD: Локальный бизнес (AutoDealer/LocalBusiness)
function autoDealerJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    "@id": `${SITE}/#business`,
    name: "VikupAuto39",
    url: SITE,
    image: SERP_IMAGE, // ← та же hero-картинка
    logo: `${SITE}/logo-512x512.png`, // можно оставить логотип параллельно
    address: { "@type": "PostalAddress", addressLocality: "Калининград" },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Калининградская область",
    },
    telephone: "+7-996-984-01-62",
  };
}

// JSON-LD: Service (как у тебя было)
function serviceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Срочный выкуп авто в Калининграде",
    description:
      "Быстрый выкуп автомобилей в любом состоянии, оценка онлайн и выплата денег в день сделки.",
    provider: { "@id": "https://vikupauto39.ru/#business" },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Калининградская область",
    },
    serviceType: "Выкуп автомобилей",
    image: SERP_IMAGE, // ← добавим на всякий случай
  };
}

export default function Hero({ onOpen }) {
  return (
    <>
      {/* 3) SEO: каноникал, robots с max-image-preview, OG/Twitter + JSON-LD */}
      <Seo
        description="Быстрый и честный выкуп автомобилей в Калининграде. Предварительная оценка онлайн, оформление в течение дня."
        url={PAGE_URL}
        image={SERP_IMAGE} // ← OG/Twitter берут то же изображение
        ogType="website"
        robots="index,follow,max-image-preview:large" // ← важно для миниатюры
        canonical={PAGE_URL}
        jsonLdExtra={[
          breadcrumbJsonLd(),
          webPageJsonLd(),
          autoDealerJsonLd(),
          serviceJsonLd(),
        ]}
      />

      {/* 4) Видимое изображение на странице — Google должен его "увидеть" */}
      <section className="hero" id="top">
        <picture className="hero__bg" aria-hidden="true">
          <img
            src={hero}
            alt="Срочный выкуп авто в Калининграде — наличные в день обращения"
            width="1600"
            height="900"
            loading="eager"
            fetchpriority="high"
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
>>>>>>> 7274d14 (VikupAuto03112025)
  );
}
