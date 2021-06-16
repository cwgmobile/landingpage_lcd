import React from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import PerfilCharles from './components/PerfilCharles';
import Perfilleo from './components/PerfilLeo';
import PerfilDani from './components/PerfilDani';



function App() {
  return (
    <div className="Filtro">
        <div className="App">
      <Header/> 
      <PerfilCharles/>
      <Perfilleo/>
      <PerfilDani/>
      <Form/>
       </div>
    </div>
    
  );
}

export default App;
