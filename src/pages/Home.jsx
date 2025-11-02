// src/pages/Home.jsx
import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Benefits from "../components/Benefits";
import MessengerCTA from "../components/MessengerCTA";
import Services from "../components/Services";
import Cars from "../components/Cars";
import Footer from "../components/Footer";
import LeadModal from "../components/LeadModal";
import Seo from "../seo/Seo";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Seo
        description="Срочный выкуп авто в Калининграде и области. Бесплатная онлайн-оценка за 15 минут, выезд, оформление и моментальная выплата наличными или на карту."
        url="https://vikupauto39.ru/"
        image="https://vikupauto39.ru/og-image.jpg"
      />

      <Header onOpen={() => setOpenModal(true)} />
      <main>
        <Hero onOpen={() => setOpenModal(true)} />
        <About />
        <Benefits />
        <MessengerCTA />
        <Services />
        <Cars />
      </main>
      <Footer />
      {openModal && <LeadModal onClose={() => setOpenModal(false)} />}
    </>
  );
}
