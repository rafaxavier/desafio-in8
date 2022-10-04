import '../../index.css';
import api from '../../services/api';
import { useState } from 'react';
import {mask, unMask} from 'remask';

function Cadastro() {
  
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [nascimento, setNascimento] = useState();
  const [telefone, setTelefone] = useState();
  const [ msg, setMsg ] = useState();

  async function handleSubmit(e) {
    e.preventDefault();

    const response =  await api.post('/users', {
      nome: nome,
      email: email,
      nascimento: nascimento,
      telefone: telefone
    });
    
    setMsg(response.data.msg);
  }

  return (
    <div id='cadastro' className="container-cadastro">
      <div className='box'>
        <h1>CADASTRO</h1>
        <form className='form' onSubmit={handleSubmit}>
          <label>Nome
            <input required value={nome}
              onChange={e => setNome(e.target.value)}></input>
          </label>
          <label>E-mail
            <input required type={'email'} value={email}
              onChange={e => setEmail(e.target.value)}></input>
          </label>
          <label>Nascimento
            <input required value={nascimento}
              onChange={e => setNascimento(mask(unMask(e.target.value), ['99/99/9999']))}></input>
          </label>
          <label>Telefone
            <input required value={telefone}
              onChange={e => setTelefone(mask(unMask(e.target.value), ['(99) 9 9999-9999'])) }></input>
          </label>
          <div className='btn'>
            <button type='submit'>CADASTRAR</button>
          </div>
          <div>
            {msg}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;