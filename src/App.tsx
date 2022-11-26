import React from "react";
import "./App.css";
import { Contacts } from "./Contacts/Contacts";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { Hero } from "./Hero/Hero";
import { Hire } from "./Hire/Hire";
import { Projects } from "./Projects/Projects";
import { Skills } from "./Skills/Skills";

function App() {
  return (
    <>
      <Header />
      <main className="page">
        <Hero />
        <Skills />
        <Projects />
        <Hire />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}

export default App;
