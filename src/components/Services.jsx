import React from "react";
const services = [
  {
    title: "Бесплатная выездная оценка",
    text: "Наш специалист приедет в удобное для вас место и оценит автомобиль на месте.",
  },
  {
    title: "Онлайн оценка",
    text: "Отправьте фото и описание — получите предварительное предложение в мессенджере.",
  },
  {
    title: "Консультация",
    text: "Ответим на вопросы по документам, налогообложению и процедуре сделки.",
  },
];
export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <h2>Наши услуги</h2>
        <div className="services">
          {services.map((s, i) => (
            <div className="service__block" key={i}>
              <h3 className="service__block-title">{s.title}</h3>
              <p className="service__block-text">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
