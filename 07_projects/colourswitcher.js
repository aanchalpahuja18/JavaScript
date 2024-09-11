const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach(function (btn){
    btn.addEventListener('click', function(e){
        if(e.target.id === "grey"){
            body.style.backgroundColor = e.target.id
        }
        else if(e.target.id === "yellow"){
            body.style.backgroundColor = e.target.id
        }
        else if(e.target.id === "purple"){
             body.style.backgroundColor = e.target.id
        }
        else if(e.target.id === "green"){
            body.style.backgroundColor = e.target.id
        }
    })

})