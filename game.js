let gamePattern = []
let userClickedPattern = []
let started = false;
let level = 0;

const buttonColors = ["red", "blue", "green", "yellow"]

const nextSequence = () => {
    userClickedPattern = []
    let randomChosenColor = buttonColors[Math.floor(Math.random() * 4)];
    gamePattern.push(randomChosenColor)
    $("#"+randomChosenColor).fadeOut(80).fadeIn(80) 

    playSound(randomChosenColor)
    $("h1").text("Level "+level)
    level += 1
}

$(".btn").click((e)=> {
    let userChosenColor = e.currentTarget.id
    userClickedPattern.push(userChosenColor)
    playSound(userChosenColor)
    animatePress(userChosenColor)
    checkAnswer(userClickedPattern.length - 1)
})

const playSound = (name) => {
    let audio = new Audio(`./sounds/${name}.mp3`)
    audio.play()
}

const animatePress = (currentColor) => {
    $("#"+currentColor).addClass("pressed")
    let i = setTimeout( () => {
        $("#"+currentColor).removeClass("pressed")
    }, 100)
}

$(document).keypress(() => {
    if(!started){
        started = !started;
        nextSequence()
    }
})

const checkAnswer = (currentLevel) => {
    if(userClickedPattern[currentLevel] == gamePattern[currentLevel]){
        if(currentLevel == gamePattern.length - 1){
            let i = setTimeout( () => {
                nextSequence()
            }, 1000)
        }
    }
    else {
        let audio = new Audio(`./sounds/wrong.mp3`)
        audio.play()

        $("body").addClass("game-over")
        
        let i = setTimeout( () => {
            $("body").removeClass("game-over")
        }, 200) 
    
        $("h1").text("Game Over, Press Any Key to Restart")
        startOver()
    }
}

const startOver = () => {
    level = 0
    gamePattern = []
    started = !started
}