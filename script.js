const quizData = [
    {
        question: "What year was the very first model of the iPhone released?",
        a: "2002",
        b: "2009",
        c: "2007",
        d: "2005",
        correct: "c"
    },
    {
        question: "What is often seen as the smallest unit of memory?",
        a: "kilobyte",
        b: "microbyte",
        c: "teenybyte",
        d: "decibyte",
        correct: "a"
    },
    {
        question: "What does “HTTP” stand for?",
        a: "HyperText Transfer Practice",
        b: "HyperText Transfer Protocol",
        c: "Hdroponic Transfer Timing Practice",
        d: "Hyperlink Text Tranfer Protocol",
        correct: "b"
    },
    {
        question: "Originally, Amazon only sold which product?",
        a: "Clothing",
        b: "Household Products",
        c: "Cosmetics",
        d: "Books",
        correct: "d"
    },
    {
        question: "What year was the electronics company Nintendo founded?",
        a: "1975",
        b: "1942",
        c: "1914",
        d: "1889",
        correct: "d"
    },
    {
        question: "Created in 1990, what was the name of the first internet search engine?",
        a: "Archie",
        b: "Ask Jeeves",
        c: "AltaVista",
        d: "DogPile",
        correct: "a"
    },
    {
        question: "What is the name of the British computer scientist who invented the World Wide Web in 1989?",
        a: "Edwin Hubble",
        b: "Tim Berns-Lee",
        c: "Wilbur Wright",
        d: "Isaac Asimov",
        correct: "b"
    },
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a-text')
const b_text = document.getElementById('b-text')
const c_text = document.getElementById('c-text')
const d_text = document.getElementById('d-text')
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
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score += 1
        }

        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score} / ${quizData.length} questions correctly!</h2>
                <button onClick="location.reload()">Restart</button>
            `
        }
    }
})