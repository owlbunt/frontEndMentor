// Date Of Birth
const dob = {
  year: "0000",
  month: "00",
  day: "00",
};

// User Age 
const userAge = {
  year: "0000",
  month: "00",
  day: "00",
}

// Calculate Age 
let submitBtn = document.querySelector(".submitBtn");
submitBtn.addEventListener("click", () => {
  // Get Current Date and Time
  let newDate = new Date();
  let currentTime = newDate.getTime();

  // Get User Date Of Birth
  dob.year = document.querySelector(".dateInput #year").value;
  dob.month = document.querySelector(".dateInput #month").value;
  dob.day = document.querySelector(".dateInput #day").value;

  // Calculate Age 
  let dobInMs = new Date(`${dob.year}-${dob.month}-${dob.day}T00:00:00`).getTime();
  let currentAgeInMs = currentTime - dobInMs;

  let seconds = currentAgeInMs / 1000;
  let minutes = seconds / 60;
  let hours = minutes / 60;
  let days = hours / 24;
  

  userAge.year = Math.floor(days / 365.25);
  userAge.month = Math.floor((days % 365.25) / 30.4375);
  userAge.day = Math.floor(days % 30.4375);

  // Update The Age
  document.querySelector(".totalYears").innerHTML = userAge.year;
  document.querySelector(".totalMonths").innerHTML = userAge.month;
  document.querySelector(".totalDays").innerHTML = userAge.day;
})