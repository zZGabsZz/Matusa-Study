import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Materia from './Materia'; 
import materiasData from './dados'; 
import './exercicios.css';
import logo from './assets/logo matusa study.jpg';

function exercicios() {
  const [materiaSelecionada, setMateriaSelecionada] = useState(null);
  const [tipoSelecionado, setTipoSelecionado] = useState(null); 

  const selecionarMateria = (materia, tipo) => {
    setMateriaSelecionada(materia);
    setTipoSelecionado(tipo);
  };

  const completarAtividade = (materia, tipo) => {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

    if (!usuarioLogado) {
        alert("Nenhum usuário logado encontrado!");
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const currentUserIndex = users.findIndex(user => user.username === usuarioLogado.username);

    if (currentUserIndex !== -1) {
        const pontos = tipo === 'exercicio' ? 10 : 20; 
        users[currentUserIndex].pontos += pontos;
        usuarioLogado.pontos = users[currentUserIndex].pontos;

        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));

        alert(`Você completou um(a) ${tipo} e ganhou ${pontos} pontos!`);
    } else {
        alert("Usuário logado não encontrado no banco de usuários.");
    }
};


  return (
    <div>
      <div className="barra">
        <img src={logo} alt="" />
        <Link to="/menu">
          <h1>HOME</h1>
        </Link>
      </div>
      <h1 className="titulo">Matérias</h1>  
      {materiaSelecionada ? (
        <Materia
          nome={materiaSelecionada.nome}
          atividades={
            tipoSelecionado === 'exercicio'
              ? materiaSelecionada.atividades.filter((atv) => atv.tipo === 'exercicio')
              : materiaSelecionada.atividades.filter((atv) => atv.tipo === 'prova')
          }
          onVoltar={() => setMateriaSelecionada(null)}
          tipo={tipoSelecionado}
          className="mat"
        />
      ) : (
        <div className="conteudo">
          <div className="secao">
            <h2 className='tatv'>Exercícios</h2>
            <ul className="atvs">
              {materiasData.map((materia) => (
                <li key={materia.id}>
                  <button onClick={() => selecionarMateria(materia, 'exercicio')}>
                    {materia.nome}
                  </button>
                  <button onClick={() => completarAtividade(materia, 'exercicio')}>
                    Concluir Exercício
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="secao">
            <h2 className='tpro'>Provas</h2>
            <ul className="provas">
              {materiasData.map((materia) => (
                <li key={materia.id}>
                  <button onClick={() => selecionarMateria(materia, 'prova')}>
                    {materia.nome}
                  </button>
                  <button onClick={() => completarAtividade(materia, 'prova')}>
                    Concluir Prova
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>

  );
}

export default exercicios;
