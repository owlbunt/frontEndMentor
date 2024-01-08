// Total Score
let totalScoreElement = document.querySelector(".totalScore h2")
let totalScore = 76 ;
// Total Score Animation 
let i = 20;
let scoreAnimation = setInterval(()=>{
    if(i >= 0 ){
        totalScoreElement.innerHTML = totalScore - i ;
        i --;
    }
    else{
        clearInterval(scoreAnimation)
    }
}, 100)