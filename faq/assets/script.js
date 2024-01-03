let faq = document.querySelector(".faq");
let questions = document.querySelectorAll(".question");
let answers = document.querySelectorAll(".answer");
let faqActive = false;
let lastActiveFaq ;
questions.forEach((question, index)=>{
  question.addEventListener("click",()=>{
    if(faqActive){
      if(lastActiveFaq == index){
        answers[lastActiveFaq].classList.toggle("hide")
        faqActive = false ;
        questions[index].style.setProperty('--icon', 'url("images/icon-plus.svg")')
        questions[index].style.color = "#000";
      }
      else{
        answers[lastActiveFaq].classList.toggle("hide")
        answers[index].classList.toggle("hide");
        questions[lastActiveFaq].style.setProperty('--icon', 'url("images/icon-plus.svg")')
        questions[index].style.setProperty('--icon', 'url("images/icon-minus.svg")')
        questions[lastActiveFaq].style.color = "#000";
        questions[index].style.color = "#AD28EB";
        lastActiveFaq = index ;
      }
    }
    else{
      answers[index].classList.toggle("hide");
      faqActive = true ;
      lastActiveFaq = index;
      questions[index].style.setProperty('--icon', 'url("images/icon-minus.svg")')
      questions[index].style.color = "#AD28EB";
    }
  });
})