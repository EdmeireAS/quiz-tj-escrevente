const question = {
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
};

document.getElementById("question-text").textContent = question.text;

const optionsList = document.getElementById("options-list");

question.options.forEach((option, index) => {
  const li = document.createElement("li");
  li.innerHTML = `<label><input type="radio" name="option" value="${index}"> ${option}</label>`;
  optionsList.appendChild(li);
});

document.getElementById("submit-button").addEventListener("click", () => {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  const feedback = document.getElementById("feedback");
  if (selectedOption) {
    const selectedIndex = parseInt(selectedOption.value, 10);
    if (selectedIndex === question.correctIndex) {
      feedback.textContent = "Correto! " + question.explanation;
      feedback.style.color = "green";
    } else {
      feedback.textContent = "Incorreto. " + question.explanation;
      feedback.style.color = "red";
    }
  } else {
    feedback.textContent = "Por favor, selecione uma opção.";
    feedback.style.color = "orange";
  }
});
