// DOCUMENT 
document.querySelector('#check').addEventListener('click', check)


// FUNCTIONS 
function check() {
  const day = document.querySelector('#day').value
    // CONDITIONALS 
    if (day.toUpperCase() === "Tuesday") || (day.toLowerCase() === "Thursday") {
     document.getElementById('#placeToSee').innerHTML = "Class day is today!!! Get ready to code!!";
    } else if {
      (day.toUpperCase() === "Saturday") || (day.toLowerCase() === "Sunday")
      document.getElementById('#placeToSee').innerHTML = "It's the weekend let's party!";
    } else {
      document.getElementById('#placeToSee').innerHTML = "Class day is today!!! Get ready to code!!";
    }
  }

  