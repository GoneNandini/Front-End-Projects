let gameseq=[];
let userseq=[];
let started=false;
let level=0,max=0;
let btns=["one","two","three","four"];
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(!started) {
        console.log("game started");
        h3.innerHTML="";
        started=true;
        levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIndx=Math.floor(Math.random()*4);
    let randColor=btns[randIndx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    gameFlash(randBtn);
}

function checkAns(idx){
    // let idx=level-1;
    if(userseq[idx]===gameseq[idx])
    {
        if(userseq.length==gameseq.length)
        {
            setTimeout(levelUp,1000);
        }
        
    }
    else
    {
        if(level>max){
            
            h3.innerHTML=`&#127881; <b>Congragulations</b> You beat the high score &#127881;`;
            h3.style.color="purple";

        }
        max=Math.max(level,max);
        
        h2.innerHTML=`Game Over!!!!! Your Score is <b>${level}</b> <br> Highest Score was ${max} <br>Press any key to continue`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
       
        reset();
    }
}

function btnPress(){
    // console.log(this);
    let btn=this;
    userFlash(btn);
    let userColor=btn.getAttribute("id");
    userseq.push(userColor);
    console.log(userseq);
    checkAns(userseq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click" ,btnPress);
}


function reset() {
    started=false;
    level=0;
    gameseq=[];
    userseq=[];
    
}