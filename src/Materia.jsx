import React, { useState } from 'react';
import Atividade from './Atividade';
import Prova from './Prova';
import './exercicios.css';

function Materia({ nome, atividades, onVoltar, tipo }) {
  const [atividadeSelecionada, setAtividadeSelecionada] = useState(null);

  const atualizarPontos = (pontos) => {
    let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado')) || { username: 'Convidado', pontos: 0 };

    // Atualiza os pontos do usuário logado
    usuarioLogado.pontos += pontos;
    localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));

    // Também atualiza a lista de usuários
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentUser = users.find(user => user.username === usuarioLogado.username);

    if (currentUser) {
        currentUser.pontos = usuarioLogado.pontos;
    } else {
        users.push(usuarioLogado);
    }

    localStorage.setItem('users', JSON.stringify(users));
};
  return (
    <div>
      <h2 className='materia'>{nome}</h2>
      {atividadeSelecionada ? (
        <>
          {tipo === 'prova' ? (
            <Prova
              questoes={atividadeSelecionada.questoes}
              minAcertosParaPassar={atividadeSelecionada.minAcertosParaPassar}
              onConcluir={(acertos) => atualizarPontos(acertos * 10)} // 10 pontos por acerto
            />
          ) : (
            <Atividade
              pergunta={atividadeSelecionada.pergunta}
              alternativas={atividadeSelecionada.alternativas}
              respostaCorreta={atividadeSelecionada.respostaCorreta}
              onConcluir={() => atualizarPontos(5)} // 5 pontos por exercício
            />
          )}
        </>
      ) : (
        <ul>
          {atividades.map((atividade) => (
            <li key={atividade.id}>
              <button onClick={() => setAtividadeSelecionada(atividade)}>
                {atividade.tipo === 'prova' ? 'Prova' : 'Exercício'}: {atividade.pergunta}
              </button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={onVoltar}>Voltar</button>
    </div>
  );
}

export default Materia;
