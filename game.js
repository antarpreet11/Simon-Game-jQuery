let gamePattern = []
let userClickedPattern = []

const buttonColors = ["red", "blue", "green", "yellow"]

const nextSequence = () => {
    // let randomNumber = 
    let randomChosenColor = buttonColors[Math.floor(Math.random() * 4)];
    gamePattern.push(randomChosenColor)

    $("#"+randomChosenColor).fadeOut(80).fadeIn(80) 

    playSound(randomChosenColor)
}

$(".btn").click((e)=> {
    let userChosenColor = e.currentTarget.id
    userClickedPattern.push(userChosenColor)
    playSound(userChosenColor)
    animatePress(userChosenColor)
})

const playSound = (name) => {
    let audio = new Audio(`./sounds/${name}.mp3`)
    audio.play()
}

const animatePress = (currentColor) => {
    $("#"+currentColor).addClass("pressed")
    const i = setTimeout( () => {
        $("#"+currentColor).removeClass("pressed")
    }, 100)
}

nextSequence()