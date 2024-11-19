const materiasData = [
    {
      id: 1,
      nome: "Matemática",
      atividades: [
        {
          id: 101,
          tipo: "exercicio", // Tipo exercício
          pergunta: "Qual é o resultado de 2 + 2?",
          alternativas: ["3", "4", "5", "6"],
          respostaCorreta: "4"
        },
        {
          id: 102,
          tipo: "prova", // Tipo prova
          minAcertosParaPassar: 2, // Quantidade mínima de acertos
          questoes: [
            {
              pergunta: "Quanto é 5 x 5?",
              alternativas: ["20", "25", "30", "35"],
              respostaCorreta: "25"
            },
            {
              pergunta: "Qual é a raiz quadrada de 16?",
              alternativas: ["2", "4", "8", "16"],
              respostaCorreta: "4"
            },
            {
              pergunta: "Qual é o quadrado de 6?",
              alternativas: ["30", "32", "36", "40"],
              respostaCorreta: "36"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      nome: "Ciências",
      atividades: [
        {
          id: 201,
          tipo: "exercicio",
          pergunta: "Qual é o estado da água em temperaturas abaixo de 0°C?",
          alternativas: ["Líquido", "Sólido", "Gasoso", "Plasma"],
          respostaCorreta: "Sólido"
        },
        {
          id: 202,
          tipo: "prova",
          minAcertosParaPassar: 2,
          questoes: [
            {
              pergunta: "Qual é o planeta mais próximo do Sol?",
              alternativas: ["Terra", "Vênus", "Mercúrio", "Marte"],
              respostaCorreta: "Mercúrio"
            },
            {
              pergunta: "Qual é a principal função das folhas das plantas?",
              alternativas: ["Fotossíntese", "Respiração", "Reprodução", "Transporte"],
              respostaCorreta: "Fotossíntese"
            }
          ]
        }
      ]
    }
  ];
  
  export default materiasData;