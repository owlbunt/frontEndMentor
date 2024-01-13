// Rating Button
let ratingBtns = document.querySelectorAll(".rating .btn");
let submitBtn = document.querySelector(".submitBtn");
let userRating = 0;
// Add Click function to all 5 buttons 
ratingBtns.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove Active Class From All Buttons
    ratingBtns.forEach((button)=>{
      button.classList.remove("active")
    });
    // Add Active Class On Clicked Button 
    button.classList.add("active"); 
    // Store the user rating value 
    userRating =  parseInt(button.innerHTML);
    // Active Sumbit Button with little delay 
    setTimeout(function() {
      submitBtn.classList.add("active")
    }, 100);
  });
});

// Confirmation Screen
submitBtn.addEventListener("click", ()=>{
  if(userRating!= 0){
    setTimeout(()=>{
      document.querySelector(".userValue").innerHTML = userRating ;
      document.querySelector(".confirm").classList.add("active")
    }, 200)
  }
})