let homeCount = 0
let guestCount = 0
document.getElementById("score").textContent = homeCount
document.getElementById("guestnumber").textContent = guestCount
 
function add1(){
    homeCount +=1
    document.getElementById("score").textContent = homeCount
}
function add2(){
    homeCount +=2
    document.getElementById("score").textContent = homeCount
}
function add3(){
    homeCount +=3
    document.getElementById("score").textContent = homeCount
}
function add1guest(){
    guestCount +=1
    document.getElementById("guestnumber").textContent = guestCount
}
function add2guest(){
    guestCount +=2
    document.getElementById("guestnumber").textContent = guestCount
}
function add3guest(){
    guestCount +=3
    document.getElementById("guestnumber").textContent = guestCount
}
function newgame(){
    document.getElementById("score").textContent = 0
    document.getElementById("guestnumber").textContent = 0
}
