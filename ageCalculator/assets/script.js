// Date Of Birth ( For Storing User Age )
const dob = {
  year: 0,
  month: 0,
  day: 0,
};

// Submit Button
let submitBtn = document.querySelector(".submitBtn");
// User Inputs Fileds
let userInputs = document.querySelectorAll(".dateInput input");


// Check User Input
function checkUserInput(){
  // Store User Date Of Birth From User Input 
  dob.year = parseInt(document.querySelector(".dateInput #year").value, 10);
  dob.month = parseInt(document.querySelector(".dateInput #month").value, 10);
  dob.day = parseInt(document.querySelector(".dateInput #day").value, 10);

  // Reset Inputs To Default ( In Every Check )
  for(let i = 0 ; i < 3; i++){
    userInputs[i].className = '';
  }
  
  // Check User DOB Year ( If Its Between )
  if(dob.year > 1500 && dob.year <= new Date().getFullYear()){
    console.log("year is ok");
    // Check Month 
    if(dob.month <=12 && dob.month > 0){
      console.log("Month Is OK");
      // Check Date
      if(dob.day <= new Date(dob.year, dob.month, 0).getDate() && dob.day > 0){
        console.log("Day is ok");
        calculateAge();
      }
      else{
        console.log("Day Err")
        userInputErr()
        // Day Error
        userInputs[0].classList.add("error")
      }

    }
    else{
      console.log("Month Err")
      userInputErr()
      // Month Error
      userInputs[1].classList.add("error")

    }
  }
  else{
    console.log("Year Err")
    userInputErr();
    // Year Error
    userInputs[2].classList.add("error")
  }

}

// User Input is incorrect
function userInputErr(){
  document.querySelector(".totalYears").innerHTML = "--";
  document.querySelector(".totalMonths").innerHTML = "--";
  document.querySelector(".totalDays").innerHTML = "--";
  
}

// Calculate User Age (if user input has no error)
function calculateAge(){
  // Get Current Date and Time
  let now = new Date();
  // Create Date Object for the Date of Birth
  let dobDate = new Date(dob.year, dob.month - 1, dob.day); // Months are 0-based in JS
  // Calculate Age
  let ageYears = now.getFullYear() - dobDate.getFullYear();
  let ageMonths = now.getMonth() - dobDate.getMonth();
  let ageDays = now.getDate() - dobDate.getDate();
  // Adjust for cases where the birthday hasn't occurred yet this year
  if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); // Days in the previous month
  }
  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }
  // Show The Output of user age ( Display Output )
  document.querySelector(".totalYears").innerHTML = ageYears;
  document.querySelector(".totalMonths").innerHTML = ageMonths;
  document.querySelector(".totalDays").innerHTML = ageDays;
}


// Main Function ( Check User Inputs and age )
submitBtn.addEventListener("click", () => {
  checkUserInput();
});
for(let i = 0; i < 3 ; i++){
  userInputs[i].addEventListener("keydown", (event)=>{
    if(event.key == "Enter"){
      checkUserInput();
    }
  })
}