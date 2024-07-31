function startCourse() {
    const buttonContainer = document.querySelector('.start-button-container');
    const todayElement = document.querySelector('.today');
    const messages = document.querySelectorAll('.message');
    const questionsContainer = document.querySelector('.questions');

    buttonContainer.style.display = 'none';
    
    todayElement.style.display = 'block';
    setTimeout(() => {
        todayElement.style.opacity = 1;

        messages.forEach((message, index) => {
            setTimeout(() => {
                message.style.opacity = 1;

                if (index === messages.length - 1) {
                    setTimeout(() => showQuestion(0), 1500); 
                }
            }, (index + 1) * 1000); 
        });
    }, 10); 
}

function showQuestion(questionIndex) {
    const questionsContainer = document.querySelector('.questions');

    const questions = [
        {
            question: "Хочете дізнатися більше?",
            answers: ["Так", "Ні"]
        },
        {
            question: "Чи був у вас досвід пов'язаний із Арбітражем трафіку?",
            answers: ["Так", "Ні", "Чув про це"]
        },
        {
            question: "Скільки часу ви могли б приділяти на день?",
            answers: ["Одна година", "2-3 години", "5 і більше"]
        }
    ];

    if (questionIndex < questions.length) {
        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        questionElement.textContent = questions[questionIndex].question;

        const answersContainer = document.createElement('div');
        answersContainer.className = 'answers';

        questions[questionIndex].answers.forEach(answer => {
            const answerElement = document.createElement('button');
            answerElement.className = 'answer';
            answerElement.textContent = answer;

            answerElement.addEventListener('click', () => {
                if (answerElement.disabled) return; 

                const allAnswers = answersContainer.querySelectorAll('.answer');
                allAnswers.forEach(btn => btn.disabled = true);

                const userAnswer = document.createElement('div');
                userAnswer.className = 'user-answer';
                userAnswer.textContent = `${answer}`;
                questionsContainer.appendChild(userAnswer);

                if (questionIndex === 0 && answer === "Ні") {
                    const finalMessage = document.createElement('div');
                    finalMessage.className = 'final-message';
                    finalMessage.textContent = "Дякую за вашу відповідь, чекаємо на ваше повернення!";
                    questionsContainer.appendChild(finalMessage);
                } else {

                    setTimeout(() => showQuestion(questionIndex + 1), 1000);
                }
            });

            answersContainer.appendChild(answerElement);
        });

        questionsContainer.appendChild(questionElement);
        questionsContainer.appendChild(answersContainer);
    } else {
        setTimeout(() => {
            const finalMessage = document.createElement('div');
            finalMessage.className = 'final-message';
            finalMessage.textContent = "Дякую! Наша компанія дуже зацікавлена ​​вами, для подальшої підтримки зв'язку, будь ласка, заповніть форму.";
            questionsContainer.appendChild(finalMessage);

            setTimeout(showForm, 1500);
        }, 1000);
    }
}

function showForm() {
    const formContainer = document.querySelector('.form-container');
    formContainer.style.display = 'flex'; 
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const successUrl = `success.html?firstName=${encodeURIComponent(firstName)}&lastName=${encodeURIComponent(lastName)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}`;

    window.location.href = successUrl;
});
