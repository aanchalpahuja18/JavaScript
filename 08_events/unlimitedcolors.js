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
const startChangingColor = function(){
    //here we first check that if the intervalId is null then only we want to start the process of setInterval & generating colors. 
    if(!intervalId){
        intervalId = setInterval(changeColor, 500)
    }

    function changeColor(){
        document.body.style.backgroundColor = randomColor()
    }
}

const stopChangingColor = function(){
    clearInterval(intervalId)
    //Here we are resetting our intervalId to null since we don't want it to retain its value of setInterval. Its just for better code optimization.
    intervalId = null
}

document.querySelector("#start").addEventListener("click", startChangingColor)

document.querySelector("#stop").addEventListener("click", stopChangingColor)