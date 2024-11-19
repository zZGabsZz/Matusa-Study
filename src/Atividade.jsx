import React, { useState } from 'react';
import './exercicios.css';

function Atividade({ pergunta, alternativas, respostaCorreta, onVoltar }) {
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [respostaCorretaMsg, setRespostaCorretaMsg] = useState("");

  const handleResposta = (alternativa) => {
    setRespostaSelecionada(alternativa);
    setRespostaCorretaMsg(alternativa === respostaCorreta ? "Correto!" : "Errado! Tente novamente.");
  };

  return (
    <div>
      <h3 className='peg'>{pergunta}</h3>
      <ul>
        {alternativas.map((alternativa, index) => (
          <li key={index}>
            <button onClick={() => handleResposta(alternativa)}>
              {alternativa}
            </button>
          </li>
        ))}
      </ul>
      {respostaSelecionada && <p>{respostaCorretaMsg}</p>}
    </div>
  );
}

export default Atividade;
