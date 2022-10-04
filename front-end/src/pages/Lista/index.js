import { useEffect, useState } from "react";
import ListDesktop from "../../componets/ListDesktop";
import ListMobile from "../../componets/ListMobile";
import api from "../../services/api"

function getLar() {
  var lar = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

  return lar;
}

function Lista() {
  const [pessoas, setPessoas] = useState('');
  const [largura, setLargura] = useState();

  window.onresize = function () {
    setLargura(getLar());
  };

  useEffect(() => {
    setLargura(getLar());
  }, []);

  //fazendo a chama para api
  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/users', {})
      setPessoas(response.data);
    }

    //chamada da func
    loadUsers();
  }, [pessoas]);

  {
    return (pessoas === '' ?
      <div className="container-lista-mobile" id='lista'>
        <h1>LISTA DE CADASTRO</h1>
        <h1>Não há usuários cadastrados no momento ):</h1>
      </div>
      :
      <div>
        {
          largura < 800 ?
            (
              <div>
                <ListMobile pessoas={pessoas} />
              </div>
            )
            :
            (

              <div><ListDesktop pessoas={pessoas} /></div>
            )
        }
      </div>)
  }
}

export default Lista;