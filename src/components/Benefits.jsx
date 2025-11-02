import React from "react";
import Seo from "../seo/Seo";

<<<<<<< HEAD
=======
const SITE = "https://vikupauto39.ru";
const PAGE_URL = `${SITE}/benefits`;

>>>>>>> 7274d14 (VikupAuto03112025)
const items = [
  {
    paragraph: "*",
    title: "Быстро",
    text: "Мы оцениваем автомобиль за 5 минут и проводим сделку в тот же день.",
  },
  {
    paragraph: "*",
    title: "Честно",
    text: "Прозрачная рыночная цена без скрытых комиссий и неожиданных вычетов.",
  },
  {
    paragraph: "*",
    title: "Удобно",
    text: "Мы сами приедем к вам и поможем оформить все документы.",
  },
];

<<<<<<< HEAD
=======
// --- JSON-LD (только SEO, UI не трогаем)
function breadcrumbJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: SITE },
      {
        "@type": "ListItem",
        position: 2,
        name: "Наши преимущества",
        item: PAGE_URL,
      },
    ],
  };
}

function webPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "Наши преимущества | VikupAuto39",
    description:
      "Почему клиенты выбирают VikupAuto39: быстрая оценка авто за 5 минут, прозрачная цена без комиссий, выезд и помощь в оформлении документов.",
  };
}

function itemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.title,
    })),
  };
}

>>>>>>> 7274d14 (VikupAuto03112025)
export default function Benefits() {
  return (
    <>
      <Seo
        title="Наши преимущества | VikupAuto39"
        description="Почему клиенты выбирают VikupAuto39: быстрая оценка авто за 5 минут, прозрачная цена без комиссий, выезд и помощь в оформлении документов."
<<<<<<< HEAD
        url="https://vikupauto39.ru/benefits"
        image="https://vikupauto39.ru/images/og/benefits.jpg"
=======
        url={PAGE_URL}
        image="https://vikupauto39.ru/images/og/benefits.jpg"
        ogType="website"
        jsonLdExtra={[breadcrumbJsonLd(), webPageJsonLd(), itemListJsonLd()]}
>>>>>>> 7274d14 (VikupAuto03112025)
      />

      <section className="section" id="benefits">
        <div className="container">
          <h2>Наши преимущества</h2>
          <div className="grid grid-3">
            {items.map((it, i) => (
              <div className="card" key={i}>
                <h3 style={{ margin: 0, fontSize: "26px" }}>{it.paragraph}</h3>
                <h3 style={{ marginTop: 0, fontSize: "29px" }}>{it.title}</h3>
                <p>{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
