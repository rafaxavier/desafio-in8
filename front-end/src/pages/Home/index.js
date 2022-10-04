import React from 'react';
import Nav from '../../componets/Nav';
import '../../index.css';

function Home() {
  return (
    <div id='home' className="container">
      <Nav/>
      <div className='title'>
        <h1>
          ESTÁGIO
        </h1>
        <h2>PROVA DE SELEÇÃO</h2>
      </div>

    </div>
  );
}

export default Home;
