let userDateOfBirth = {
    day : '0',
    month :'0',
    year :'0' ,
}

// Submit Button
let submitBtn = document.querySelector(".submitBtn");
submitBtn.addEventListener("click", ()=>{
    // Store User DOB
    userDateOfBirth.day = document.querySelector(".dateInput #day").value ;
    userDateOfBirth.month = document.querySelector(".dateInput #month").value;
    userDateOfBirth.year = document.querySelector(".dateInput #year").value;
});

function currentAge(){
    
}