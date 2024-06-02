document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    createSurvey();
});

function addQuestion() {
    const questionsContainer = document.getElementById('questionsContainer');
    const questionCount = questionsContainer.children.length + 1;
    
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('form-group', 'question');
    questionDiv.innerHTML = `
        <label>Question ${questionCount}</label>
        <input type="text" placeholder="Enter your question" required>
        <button type="button" class="remove-question" onclick="removeQuestion(this)">Remove</button>
    `;
    questionsContainer.appendChild(questionDiv);
}

function removeQuestion(button) {
    const questionDiv = button.parentElement;
    questionDiv.remove();
    updateQuestionLabels();
}

function updateQuestionLabels() {
    const questions = document.querySelectorAll('.question label');
    questions.forEach((label, index) => {
        label.textContent = `Question ${index + 1}`;
    });
}

function createSurvey() {
    const title = document.getElementById('surveyTitle').value;
    const questions = document.querySelectorAll('#questionsContainer .question input[type="text"]');
    
    const outputTitle = document.getElementById('outputTitle');
    const outputQuestions = document.getElementById('outputQuestions');
    
    outputTitle.textContent = title;
    outputQuestions.innerHTML = '';
    
    questions.forEach((input, index) => {
        const li = document.createElement('li');
        li.textContent = `Q${index + 1}: ${input.value}`;
        outputQuestions.appendChild(li);
    });
    
    document.getElementById('surveyOutput').classList.remove('hidden');
    document.getElementById('surveyForm').scrollIntoView({ behavior: 'smooth' });
}
