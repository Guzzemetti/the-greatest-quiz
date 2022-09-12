const startPage = document.getElementById("startPage");
const quizPage = document.getElementById("quizPage");

// const timer = 120;
const currentQuestionIndex = 0;


function change(){
    startPage.setAttribute("class", "hide")
    quizPage.removeAttribute("class")
}
