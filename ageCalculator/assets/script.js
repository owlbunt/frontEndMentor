// Date Of Birth
const dob = {
    year:"00",
    month :"00",
    day :"0000",
};

// Calculate Age 
let submitBtn = document.querySelector(".submitBtn");
submitBtn.addEventListener("click", ()=>{
  // Get Current Date and Time
  let newDate = new Date();
  let currentTime = newDate.getTime();
  
  // Get User Date Of Birth
  dob.year = document.querySelector(".dateInput #year").value;
  dob.month = document.querySelector(".dateInput #month").value;
  dob.day = document.querySelector(".dateInput #day").value;
  
  // Calculate Age 
  let dobInMs = new Date(`${dob.year}-${dob.month}-${dob.day}T00:00:00`).getTime();
  let currentAgeInDays = currentTime - dobInMs ;
  currentAgeInDays = Math.floor(currentAgeInDays /1000/60/60/24);
  console.log(currentAgeInDays)
  
  
  // Update The Age
  document.querySelector(".totalYears").innerHTML = currentAgeInYear ;

})