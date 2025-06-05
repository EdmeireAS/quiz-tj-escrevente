const questions = [
  {
    text: "Qual é a função principal do Poder Judiciário?",
    options: [
      "Elaborar leis",
      "Executar políticas públicas",
      "Julgar conflitos de interesse",
      "Fiscalizar o Poder Executivo",
      "Administrar recursos públicos"
    ],
    correctIndex: 2,
    explanation: "O Poder Judiciário tem como função principal julgar conflitos de interesse, garantindo a aplicação das leis."
  },
  {
    text: "Qual o principal objetivo do Código de Processo Civil?",
    options: [
      "Garantir a efetiva aplicação do direito",
      "Aumentar a burocracia judicial",
      "Regular apenas os recursos especiais",
      "Estabelecer normas para crimes federais"
    ],
    correctIndex: 0,
    explanation: "O CPC tem como objetivo garantir a efetiva aplicação do direito e a justiça nas decisões."
  },
  {
    text: "Qual das alternativas apresenta uma palavra com erro de ortografia?",
    options: [
      "Exceção",
      "Paralelamente",
      "Precedente",
      "Excessão"
    ],
    correctIndex: 3,
    explanation: "A forma correta é 'exceção', não 'excessão'."
  },
  {
    text: "Em informática, qual é a função do software antivírus?",
    options: [
      "Proteger o computador contra vírus e malwares",
      "Acelerar a conexão de internet",
      "Atualizar o sistema operacional",
      "Gerenciar arquivos de texto"
    ],
    correctIndex: 0,
    explanation: "Software antivírus protege o computador contra ameaças digitais como vírus e malwares."
  },
  {
    text: "Qual é o resultado da expressão matemática: 15% de 200?",
    options: [
      "20",
      "30",
      "25",
      "35"
    ],
    correctIndex: 1,
    explanation: "15% de 200 = (15/100)*200 = 30."
  }
];

let currentQuestionIndex = 0;

const questionText = document.getElementById("question-text");
const optionsList = document.getElementById("options-list");
const feedback = document.getElementById("feedback");
const submitButton = document.getElementById("submit-button");
const nextButton = document.getElementById("next-button");

function loadQuestion(index) {
  feedback.textContent = "";
  questionText.textContent = questions[index].text;
  optionsList.innerHTML = "";
  
  questions[index].options.forEach((option, i) => {
    const li = document.createElement("li");
    li.innerHTML = `<label><input type="radio" name="option" value="${i}"> ${option}</label>`;
    optionsList.appendChild(li);
  });
  
  submitButton.disabled = false;
  nextButton.style.display = "none";
}

submitButton.addEventListener("click", () => {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (!selectedOption) {
    feedback.textContent = "Por favor, selecione uma opção.";
    feedback.style.color = "orange";
    return;
  }
  
  const selectedIndex = parseInt(selectedOption.value, 10);
  const currentQuestion = questions[currentQuestionIndex];
  
  if (selectedIndex === currentQuestion.correctIndex) {
    feedback.textContent = "Correto! " + currentQuestion.explanation;
    feedback.style.color = "green";
  } else {
    feedback.textContent = "Incorreto. " + currentQuestion.explanation;
    feedback.style.color = "red";
  }
  
  submitButton.disabled = true;
  nextButton.style.display = "inline-block";
});

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion(currentQuestionIndex);
  } else {
    questionText.textContent = "Quiz finalizado! Obrigado por participar.";
    optionsList.innerHTML = "";
    feedback.textContent = "";
    submitButton.style.display = "none";
    nextButton.style.display = "none";
  }
});

// Inicializa o quiz
loadQuestion(currentQuestionIndex);
