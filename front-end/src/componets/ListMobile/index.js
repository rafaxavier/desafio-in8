import React, { useState } from "react";
import './index.css'


export default function ListMobile(props) {

    const [itensPerPage, setItensPerPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(0);
    const pages = Math.ceil(props.pessoas.length / itensPerPage);
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const currenteItens = props.pessoas.slice(startIndex, endIndex);

    return (
        <div className="container-lista-mobile" id='lista'>
            <h1>LISTA DE CADASTRO</h1>
            <div className="box-mobile" >
                <div className=" box-mobile-index"  >{Array.from(Array(pages), (item, index) => {
                    return <button onClick={() => setCurrentPage(index)}>{index + 1}</button>
                })}</div>
                {currenteItens.map(item => {
                    return (<div className="box-mobile-div"  key={item.id}>
                        <p><span className="span">NOME </span>{item.nome}</p>
                        <p><span className="span">E-MAIL </span> {item.email}</p>
                        <p><span className="span">NASC. </span> {item.nascimento}</p>
                        <p><span className="span">TEL. </span> {item.telefone}</p>
                    </div>
                    )
                })}
            </div>
        </div>
    );
}