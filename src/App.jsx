<<<<<<< HEAD
import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Benefits from "./components/Benefits";
import MessengerCTA from "./components/MessengerCTA";
import Services from "./components/Services";
import Footer from "./components/Footer";
import LeadModal from "./components/LeadModal";
import Cars from "./components/Cars";

export default function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
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
=======
// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import ServicesBuyDamaged from "./pages/ServicesBuyDamaged";
import ServicesUrgent from "./pages/ServicesUrgent";
import Vyplata from "./pages/Vyplata";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* вот тут */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route
          path="/uslugi/vykup-avto-posle-dtp"
          element={<ServicesBuyDamaged />}
        />
        <Route path="/uslugi/srochnyj-vykup" element={<ServicesUrgent />} />
        <Route path="/uslugi/momentnaya-vyplata" element={<Vyplata />} />
      </Routes>
    </BrowserRouter>
>>>>>>> 7274d14 (VikupAuto03112025)
  );
}
