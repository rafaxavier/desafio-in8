import React from 'react';
import './App.css';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Lista from './pages/Lista';
import SobreMim from './pages/SobreMim';

function App() {
  return (
    [<Home />,
    <Cadastro />,
    <Lista />,
    <SobreMim />,
    ]
  );
}

export default App;

