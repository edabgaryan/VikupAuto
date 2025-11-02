import React from "react";
<<<<<<< HEAD
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
=======
import { Link } from "react-router-dom";

const services = [
  {
    title: "Срочный выкуп",
    link: "/uslugi/srochnyj-vykup",
  },
  {
    title: "Выкуп авто после ДТП",
    link: "/uslugi/vykup-avto-posle-dtp",
  },
  {
    title: "Моментальная выплата",
    link: "/uslugi/momentnaya-vyplata",
  },
];

>>>>>>> 7274d14 (VikupAuto03112025)
export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <h2>Наши услуги</h2>
        <div className="services">
          {services.map((s, i) => (
            <div className="service__block" key={i}>
              <h3 className="service__block-title">{s.title}</h3>
<<<<<<< HEAD
              <p className="service__block-text">{s.text}</p>
=======
              <Link className="service__block-btn" to={s.link}>
                Перейти
              </Link>
>>>>>>> 7274d14 (VikupAuto03112025)
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
