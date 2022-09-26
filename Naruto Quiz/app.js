// change so you cant choose the same one twice use append and check the list of answers you appended to 

//Variables
const startBtnID = document.getElementById('start-btn');
const nextBtnID = document.getElementById('next-btn');
const questionContainerID = document.getElementById('question-container');
const resultBtnID = document.getElementById('result-btn')
const restartBtnID = document.getElementById('restart-btn')
const openingID = document.getElementById('opening')
const questionID = document.getElementById('question');
const answerBtnID = document.getElementById('answer-buttons');
const endingID = document.getElementById('ending')
let questionIndex = 0;
let score = 0;

//Event Listener
startBtnID.addEventListener('click', start)
nextBtnID.addEventListener('click', () =>{
    questionIndex++
    next()
})
resultBtnID.addEventListener('click', result)
restartBtnID.addEventListener('click', retry)

function start(){
    startBtnID.classList.add('hide')
    openingID.classList.add('hide')
    nextBtnID.classList.remove('hide')
    questionContainerID.classList.remove('hide')
    next();
}
function next(){
    reset();
    const bg = `Photos/q${questionIndex}.jpg`
    document.body.style.backgroundImage = `url(${bg})` ;
    question = questions[questionIndex];
    questionID.innerText = question.question;
    question.answers.forEach(answer =>{
        const button = document.createElement('button');
        button.innerText = answer.text;
        if (answer.correct){
            correctAnswer = answer.text
        }
        button.classList.add('btn');
        button.addEventListener('click', check);
        answerBtnID.appendChild(button);
    })
    
}
function check(chose){
    const choseBtn = chose.target;
    if (choseBtn.innerText == correctAnswer){
        score += 2
        choseBtn.classList.add('correct')
    }
    else{
        score--
        choseBtn.classList.add('wrong')
    }
    if (questions.length > questionIndex + 1){
        nextBtnID.classList.remove('hide')
    }
    else{
        resultBtnID.classList.remove('hide')
    }
    console.log(score)
}

function result(){
    reset();
    questionID.classList.add('hide')
    resultBtnID.classList.add('hide')
    endingID.classList.remove('hide');
    endingID.innerText = "Your score is: "  + score;
    restartBtnID.classList.remove('hide')
}
function retry(){
    questionID.classList.remove('hide')
    endingID.classList.add('hide')
    restartBtnID.classList.add('hide')
    questionIndex = 0;
    score = 0;
    start();
}

function reset(){
    nextBtnID.classList.add('hide');
    while(answerBtnID.firstChild){
        answerBtnID.removeChild(answerBtnID.firstChild)
    }
}


const questions = [
    {
        question:'Q1: Whom did Kakashi receive his sharingan from',
        answers: [
            {text:'Itachi', correct:false},
            {text:'Shisui', correct:false},
            {text:'Obito', correct:true},
            {text:'Sasuke', correct:false}
        ]
    },
    {
        question: 'Q2: When does Sasuke\'s Kekkai Genkai Awaken',
        answers: [
            {text:'Meeting Sakura', correct:false},
            {text:'Chunin Exams', correct:false},
            {text:'Massacre of Uchihas', correct:false},
            {text:'Battle with Haku', correct:true}
        ]
    },
    {
        question: 'Q3. How many answers did Naruto answer correctly in the first Chunin Exam',
        answers: [
            {text:'All of them (he cheated)', correct:false},
            {text:'Zero', correct:true},
            {text:'Same score as Sasuke', correct:false},
            {text:'Twenty-one', correct:false}
        ]
    },
    {
        question: 'Q4. How many hearts does Kakuzu have',
        answers: [
            {text:'Five', correct:true},
            {text:'Three', correct:false},
            {text:'Four', correct:false},
            {text:'Six', correct:false}
        ]
    },
    {
        question: 'Q5. Which one of these weapons is not part of the seven swordsman of the mist',
        answers: [
            {text:'Samehada', correct:false},
            {text:'Kusanagi', correct:true},
            {text:'Kubikiribōchō', correct:false},
            {text:'Kiba', correct:false}
        ]
    }
]
