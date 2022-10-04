import React from "react";
import './index.css';
import topo from './../../assets/icones/topo-pag.svg';
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function ListDesktop(props) {
    return (
        <div>
            <div className="container-lista" id='lista'>
                <div>
                    <h1>LISTA DE CADASTRO</h1>
                    <div className="quadro-header">
                        <div className="div-id">ID</div>
                        <div className="border-left"> NOME</div>
                        <div className="border-left"> E-MAIL</div>
                        <div className="border-left"> NASCIMENTO</div>
                        <div className="border-left"> TELEFONE</div>
                    </div>
                    {props.pessoas.map(item => {
                        return (<div className="quadro" key={item.id}>
                            <div className="div-id">{item.id}</div>
                            <div className="border-left">{item.nome}</div>
                            <div className="border-left">{item.email}</div>
                            <div className="border-left">{item.nascimento}</div>
                            <div className="border-left">{item.telefone}</div>
                        </div>
                        )
                    })}

                </div>
            </div>
            <AnchorLink href='#home'><img className="btn-topo" src={topo} alt="botão topo" /></AnchorLink>
            
        </div>

    );
}