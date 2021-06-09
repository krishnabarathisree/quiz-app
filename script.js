const quizData = [{
    question: 'how pld is florin?',
    a: '10',
    b: '17',
    c: '26',
    d: '110',
    correct: 'c'
}, {
    question: 'what is the most uesed programming langauge in 2019?',
    a: 'java',
    b: 'c',
    c: 'python',
    d: 'javascript',
    correct: 'd'
}, {
    question: 'whos is the president of us?',
    a: 'florin pop',
    b: 'donald trump',
    c: 'ivan saldano',
    d: 'mahal sndrel',
    correct: 'b'
}, {
    question: 'what does html stands for?',
    a: 'Hyper text markup langauge',
    b: 'cascading style sheet',
    c: 'jason object natation',
    d: 'helicopters terminals motorboats lamborginins',
    correct: 'a'
}, {
    question: ' what year was javascript lanched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: '1992',
    correct: 'b'
}]

const quiz = document.getElementById('quiz')

const answerEls = document.querySelectorAll('.answer')

const questionEl = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {


    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}
submitBtn.addEventListener("click", () => {

    //checked to see the answer
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML =
                `<h2>  you answered correctly at${score}/${quizData.length}question.</h2>
            <button onclick="location.reload()">Reload</button>`
        }
    }
});