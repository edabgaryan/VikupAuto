import React from "react";
import Seo from "../seo/Seo";

// Подтянем все webp из папки (без подпапок)
const ctx = require.context("../assets/cars", false, /cars\d+\.webp$/);

// Сортируем по номеру, чтобы шло cars1, cars2, ...
const cars = ctx
  .keys()
  .sort((a, b) => {
    const na = parseInt(a.match(/cars(\d+)\./)?.[1] ?? "0", 10);
    const nb = parseInt(b.match(/cars(\d+)\./)?.[1] ?? "0", 10);
    return na - nb;
  })
  .map((k) => ({ image: ctx(k) }));

export default function BoughtCars() {
  return (
    <>
      <Seo
        title="Выкупленные автомобили | VikupAuto39"
        description="Примеры автомобилей, которые мы выкупили в Калининграде. Выкупаем авто в любом состоянии: новые, подержанные, после ДТП."
        url="https://vikupauto39.ru/bought-cars"
        image="https://vikupauto39.ru/images/og/bought-cars.jpg"
      />

      <section className="section" id="bought-cars">
        <div className="container">
          <h2 className="cars__title">Выкупленные автомобили</h2>
          <div className="cars__grid">
            {cars.map((car, i) => (
              <div className="cars__card" key={i}>
                <div className="cars__image">
                  <img
                    src={car.image}
                    alt={`Выкупленный автомобиль ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
