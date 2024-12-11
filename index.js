let container ;
let i ;
let plantContainer ;
let gameOver= false;
let scoreReading =0 ;
let myTimeOut;
let myTimeOut2;
let time=0;
let scoreReadingOver;
time=Number(time)
  scoreReading = Number(scoreReading)

window.onload=function(){
    setGame();
}

function setGame() {
    for ( i = 0; i <9; i++) {
        let pipe = document.createElement("div");
        pipe.id = i.toString();
        pipe.addEventListener('click', gamingActivities)
        document.getElementById("board").appendChild(pipe);
        
        
    }
    myTimeOut =  setInterval(setMonty,1000)
    myTimeOut2 =   setInterval(setPlant , 2000)
    
    
    
}
function numCount1() {

    let num = Math.floor(Math.random()*9)
    
    
    return num.toString()
    
    
}


function setMonty(){
    if (gameOver) {
        return;
        
    }
    
    if (container) {
        container.innerHTML=""
        
    }
    let monty = document.createElement("img");
    monty.src = "images/monty-mole.png";
    let num = numCount1();
    if(plantContainer && plantContainer.id === num){
        return;
    }
    container = document.getElementById(num);
    
    
    
    container.appendChild(monty);
} 
function numCount2() {
    let num = Math.floor(Math.random()*9)
    
    return num.toString()
    
    
}


function setPlant(){
    if (gameOver) {
        return;
        
    }
    
    if (plantContainer) {
        plantContainer.innerHTML=""
        
    }
    let plant = document.createElement("img");
    plant.src = "images/piranha-plant.png";
    let num = numCount2();
    if(container && container.id === num){
        return;
    }
    
    plantContainer = document.getElementById(num);
    
    
    plantContainer.appendChild(plant);
} 


function   gamingActivities() {
    if(gameOver){
        
        return;
    }
    
    if(this===container){
     scoreReading +=  100
     scoreReadingOver = scoreReading
     if (gameOver) {
        scoreReading=0
     }
     document.getElementById("score").innerText=scoreReading
     
     
    }else if ( this===plantContainer){
        gameOver = true
        
        let overRide = document.getElementsByClassName("gameOver")
        overRide.innerText="Game Over  "
        let replayButton2 = document.createElement("button")
        replayButton2.textContent="replay Game"
        replayButton2.classList.add("btn")

        replayButton2.addEventListener("click",()=>{
            
            gameOver=false
            scoreReading=0
            let overRide = document.getElementById("score")
            overRide.innerText=  scoreReading
            replayButton2.classList.add("hidden")
            

        })
        let scoreReadingDiv = document.getElementById("scoreReader")
        scoreReadingDiv.appendChild(replayButton2)
        
    }
    winner()
    
}
function winner() {
    if( scoreReading == 100){
        gameOver=true
        scoreReading=0
        alert("great job")

        let replayButton = document.createElement("button")
        replayButton.textContent="replay Game"
        replayButton.classList.add("btn")
        replayButton.addEventListener("click",()=>{
           
            gameOver=false
            scoreReading=0
            let overRide = document.getElementById("score")
            overRide.innerText=  scoreReading
            replayButton.classList.add("hidden")
        

        })
        let scoreReadingDiv = document.getElementById("scoreReader")
        scoreReadingDiv.appendChild(replayButton)
    }
    
    
}

   let timingSection= setInterval(()=>{
        time=time +1
        time=Number(time)
        if (time===60) {
            gameOver=true
        let overRide = document.getElementById("score")
            overRide.parentElement.innerText="Game Over  "+  scoreReading
            
        }
    },1000)

    
    // function textContent() {
    //     if(gameOver===false){
    //         let scoreTaker = document.getElementById("scoreReader")
    //         scoreTaker.innerText="score :"
    //     }
    
    // }
    // textContent()

    
    
    




