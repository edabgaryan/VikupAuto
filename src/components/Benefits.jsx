import React from "react";
import Seo from "../seo/Seo";

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

export default function Benefits() {
  return (
    <>
      <Seo
        title="Наши преимущества | VikupAuto39"
        description="Почему клиенты выбирают VikupAuto39: быстрая оценка авто за 5 минут, прозрачная цена без комиссий, выезд и помощь в оформлении документов."
        url="https://vikupauto39.ru/benefits"
        image="https://vikupauto39.ru/images/og/benefits.jpg"
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
