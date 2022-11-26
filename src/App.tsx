import React from 'react';
import './App.css';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { Skills } from './Skills/Skills';

function App() {
  return (
    <>
      <Header />
      <main className="page">
        <Hero />
        <Skills />
      </main>
    </>
    );
}

export default App;
