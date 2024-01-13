// Rating Button
let ratingBtns = document.querySelectorAll(".rating .btn");
let submitBtn = document.querySelector(".submitBtn");
// Add Click function to all 5 buttons 
ratingBtns.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove Active Class From All Buttons
    ratingBtns.forEach((button)=>{
      button.classList.remove("active")
    });
    // Add Active Class On Clicked Button 
    button.classList.add("active");
    // Active Sumbit Button with little delay 
    setTimeout(function() {
      submitBtn.classList.add("active")
    }, 200);
  });
});
