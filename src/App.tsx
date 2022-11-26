import React from 'react';
import './App.css';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { Projects } from './Projects/Projects';
import { Skills } from './Skills/Skills';

function App() {
  return (
    <>
      <Header />
      <main className="page">
        <Hero />
        <Skills />
        <Projects />
      </main>
    </>
    );
}

export default App;
