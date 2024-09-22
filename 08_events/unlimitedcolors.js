const randomColor = function (){
    const hex = "0123456789ABCDEF"

    let color = "#"

    for (let i = 0; i < 6; i++) {
       color += hex[Math.floor(Math.random() * 16)]
    }

    return color
}

console.log(randomColor());


let intervalId;
let bgColor;
const startChangingColor = function(){
    //here we first check that if the intervalId is null then only we want to start the process of setInterval & generating colors. 
    if(!intervalId){
        intervalId = setInterval(changeColor, 700)
    }

    function changeColor(){
       bgColor = document.body.style.backgroundColor = randomColor()
    }
}


function checkRightColor() {
    if(bgColor == rightGuess){
        alert("Congratulations!!! You won!!")
    }
    else{
        alert("Better Luck next time!")
    }
}
const stopChangingColor = function(){
    clearInterval(intervalId)
    //Here we are resetting our intervalId to null since we don't want it to retain its value of setInterval. Its just for better code optimization.
    intervalId = null
    checkRightColor()
}

document.querySelector("#start").addEventListener("click", startChangingColor)

document.querySelector("#stop").addEventListener("click", stopChangingColor)


const rightGuess = document.querySelector('#color').style.backgroundColor = randomColor()
console.log(rightGuess);
