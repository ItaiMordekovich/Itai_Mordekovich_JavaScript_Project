const btnCheck = document.getElementById('btn-check');
const inputResult = document.getElementById('input-result');
const pExercise = document.getElementById('exercise');
const summery = document.getElementById('summery');

let points = 0;
let currentQuestion = '';
let currentAnswer = null;

function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function getRandomOperator() {
    const operatorsArray = ['+', '-', '*', '/'];
    let randomOperatorIndex = Math.floor(Math.random() * operatorsArray.length);
    return operatorsArray[randomOperatorIndex];
}

function generateQuestion() {
    let randomNum1 = getRandomNumber();
    let randomNum2 = getRandomNumber();
    let randomOperator = getRandomOperator();
    let question = `${randomNum1} ${randomOperator} ${randomNum2}`;

    if (randomOperator === '*') {
        let result;
        do {
            randomNum1 = getRandomNumber();
            randomNum2 = getRandomNumber();
            result = randomNum1 * randomNum2;
        } while (result > 300);
        question = `${randomNum1} ${randomOperator} ${randomNum2}`;
    }

    if (randomOperator === '-') {
        let result;

        if (randomNum1 < randomNum2) {
            [randomNum1, randomNum2] = [randomNum2, randomNum1];
        }
        result = randomNum1 - randomNum2;
        question = `${randomNum1} ${randomOperator} ${randomNum2}`;
    }

    if (randomOperator === '/') {
        let result;
        do {
            randomNum1 = getRandomNumber();
            randomNum2 = getRandomNumber();
            result = Math.floor(randomNum1 / randomNum2);
        } while (result * randomNum2 !== randomNum1);
        question = `${randomNum1} ${randomOperator} ${randomNum2}`;
    }

    pExercise.innerHTML = `Question: ${question}`;
    currentQuestion = question;
    currentAnswer = eval(question);
}

btnCheck.addEventListener('click', () => {
    let yourAnswer = inputResult.value;

    if (parseFloat(yourAnswer) === currentAnswer) {
        points += 10;
    }

    summery.innerHTML += `Question: ${currentQuestion} --- Answer: ${currentAnswer} --- your Answer: ${yourAnswer} --- Your Score: ${points} <br><hr>`;

    inputResult.value = '';
    generateQuestion();
});

generateQuestion();
