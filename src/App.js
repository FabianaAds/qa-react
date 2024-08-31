import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SobreMim from './components/SobreMim';
import Experiencia from './components/Experiencia';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <SobreMim />
      <Experiencia />
      <Projetos />
      <Contato />
    </div>
  );
};

export default App;
