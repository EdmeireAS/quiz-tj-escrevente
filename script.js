const questions = [
  {
    text: "Qual a forma correta do plural de 'cidadão'?",
    options: ["Cidadãos", "Cidadães", "Cidadãoss", "Cidadões"],
    correctIndex: 0,
    explanation: "O plural correto é 'cidadãos'."
  },
  {
    text: "O que é verbo transitivo?",
    options: [
      "Verbo que não necessita de complemento",
      "Verbo que necessita de complemento",
      "Verbo de ligação",
      "Verbo intransitivo"
    ],
    correctIndex: 1,
    explanation: "Verbo transitivo exige complemento para completar sentido."
  },
  // ... continue aqui com as outras perguntas ...
];

let currentQuestionIndex = 0;

function showQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById("question-text").textContent = question.text;

  const optionsList = document.getElementById("options-list");
  optionsList.innerHTML = ""; // Limpa opções anteriores

  question.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<label><input type="radio" name="option" value="${index}"> ${option}</label>`;
    optionsList.appendChild(li);
  });

  document.getElementById("feedback").textContent = "";
  document.getElementById("submit-button").textContent = "Responder";
  document.getElementById("submit-button").disabled = false;
}

document.getElementById("submit-button").addEventListener("click", () => {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  const feedback = document.getElementById("feedback");
  const submitButton = document.getElementById("submit-button");

  if (submitButton.textContent === "Próxima") {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      // Quiz finalizado
      document.getElementById("question-container").innerHTML = "<p>Parabéns! Você concluiu o quiz.</p>";
    }
    return;
  }

  if (!selectedOption) {
    feedback.textContent = "Por favor, selecione uma opção.";
    feedback.style.color = "orange";
    return;
  }

  const selectedIndex = parseInt(selectedOption.value, 10);
  const question = questions[currentQuestionIndex];

  if (selectedIndex === question.correctIndex) {
    feedback.textContent = "Correto! " + question.explanation;
    feedback.style.color = "green";
  } else {
    feedback.textContent = "Incorreto. " + question.explanation;
    feedback.style.color = "red";
  }

  submitButton.textContent = "Próxima";
  submitButton.disabled = false;
});

showQuestion();
