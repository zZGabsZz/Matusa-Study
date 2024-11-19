import React, { useState } from 'react';
import './exercicios.css';

function Prova({ questoes, minAcertosParaPassar, onVoltar }) {
  const [indiceQuestao, setIndiceQuestao] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [finalizada, setFinalizada] = useState(false);

  const questaoAtual = questoes[indiceQuestao];

  const handleResposta = (alternativa) => {
    setRespostaSelecionada(alternativa);
    if (alternativa === questaoAtual.respostaCorreta) {
      setAcertos(acertos + 1);
    }
    if (indiceQuestao + 1 < questoes.length) {
      setTimeout(() => {
        setIndiceQuestao(indiceQuestao + 1);
        setRespostaSelecionada(null);
      }, 1000);
    } else {
      setFinalizada(true);
    }
  };

  return (
    <div>
      {finalizada ? (
        <div className='result'>
          <h3>Resultado da Prova</h3>
          <p>Você acertou {acertos} de {questoes.length} questões.</p>
          {acertos >= minAcertosParaPassar ? (
            <p>Parabéns, você passou na prova!</p>
          ) : (
            <p>Infelizmente, você não passou. Tente novamente.</p>
          )}
        </div>
      ) : (
        <div>
          <h3 className='peg'>{questaoAtual.pergunta}</h3>
          <ul>
            {questaoAtual.alternativas.map((alternativa, index) => (
              <li key={index}>
                <button onClick={() => handleResposta(alternativa)}>
                  {alternativa}
                </button>
              </li>
            ))}
          </ul>
          <p>{respostaSelecionada && (respostaSelecionada === questaoAtual.respostaCorreta ? "Correto!" : "Errado!")}</p>
        </div>
      )}
    </div>
  );
}

export default Prova;
