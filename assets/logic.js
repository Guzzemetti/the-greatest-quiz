const startPage = document.getElementById("startPage");
const quizPage = document.getElementById("quizPage");

function change(){
    startPage.setAttribute("class", "hide")
    quizPage.removeAttribute("class")
}
