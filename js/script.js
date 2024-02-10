const wordQuiz = document.querySelector(".word"),
clueQuiz = document.querySelector(".clue span"),
timeText = document.querySelector(".time b"),
inputArea = document.querySelector("input"),
skipBtn = document.querySelector(".refresh-word"),
shootBtn = document.querySelector(".shoot-word");

let correctWord;


const initTimer = maxTime => {
    let timer
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;
        }

        clearInterval(timer);
        alert("PRITT... FULLTIME!"),
        alert("Kamu berhasil menjawab " + totalScore + " dari 20 wordie!"),
        window.location.assign("startgame.html");

            
    }, 1000);

    
}

const initGame = () => {
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("")
    for(i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = wordArray[i];
        wordArray[i] = wordArray[j];
        wordArray[j] = temp;
    }
    
    wordQuiz.innerText = wordArray.join("");
    clueQuiz.innerText = randomObj.clue;
    correctWord = randomObj.answer.toLowerCase();
    
}

initGame();
initTimer(30);


var totalScore = 0;
let score = 0;
function playerScore() {
    score ++;
    totalScore = 0 + parseInt(score);
    
    console.log(totalScore)
}

function answerWord() {
    let playerWord = inputArea.value.toLowerCase();
    if (!playerWord) {
        return alert("Kamu belom masukkin jawaban!");
    }

    if (playerWord == correctWord) {
        playerScore();
        return alert("IHH JAGO!"),
        initGame();
    }
    else
        return alert("PRITTT.. PRITT.... JAWABANMU SALAH!");



}

skipBtn.addEventListener("click", initGame);
shootBtn.addEventListener("click", answerWord);













/* UNUSED CODE *\

/* function inputPlayer(gameIn) {
    gameIn = prompt("Masukkan namamu!");
    if (gameIn) {
        return alert("Hi " + gameIn + " siap bermain?");

    }

    if (!gameIn) {
        return alert("Masukkan nama player dengan benar! \nex: John Doe"),
            inputPlayer();
    }

    if (gameIn === false) {
        return alert("Oke take your time!"),
            inputPlayer();
    }

}
 */
/* inputPlayer(); */


/* function finalScore(){
    let totalScore;
    let gamePlayed
    let playerScore = (correctWord = 1)
    return totalScore = playerScore * gamePlayed;
}
 */
/* var noAnswer;
function walkOut () {
    noAnswer = playerScore();
    alert("PRITT... FULLTIME!"),
    alert("Yah sayang banget.. kamu belum jawab apapun!"),
    window.location.assign("startgame.html");

}
 */