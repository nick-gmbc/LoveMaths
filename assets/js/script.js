document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit");
            }
            else {
                let gameType = this.getAttribute("data-type");
                console.log(gameType);
                alert(`You clicked ${gameType}`);
            }

        })
    }
})

/**
 * Run game
 */
function runGame() {
    let num1 = Math.floor(Math.random()) + 1;
    let num2 = Math.floor(Math.random()) + 1;
}



function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {
    
}

function displayMultiplyQuestion() {
    
}