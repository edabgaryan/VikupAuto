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
  );
}
