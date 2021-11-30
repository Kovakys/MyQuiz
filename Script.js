const quizData = [
    {
        question: "Quantos estados tem o Brasil ?",
        a: "26 estados e 1 DF",
        b: "28 estados e 1 DF",
        c: "30 estados e 1 DF",
        d: "29 estados e 1 DF",
        correct: "a",
    },
    {
        question: "Qual foi o primeiro nome do Brasil?",
        a: "terra de vera cruz",
        b: "terra de santa cruz",
        c: "ilha de vera cruz",
        d: "ilha de santa cruz",
        correct: "c",
    },
    {
        question: "Quem foi o primeiro presidente do Brasill?",
        a: "Teodoro da Fonseca",
        b: "Peixoto tavares",
        c: "Raposo Tavares",
        d: "Campos Salles",
        correct: "a",
    },
    {
        question: "Em que dia e ano o Brasil foi descoberto ?",
        a: "22 de abril de 1500",
        b: "25 de maio de 1550",
        c: "1 de abril de 1559",
        d: "7 de setembro de 1560",
        correct: "a",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
