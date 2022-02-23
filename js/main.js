// DOCUMENT 
document.querySelector('#check').addEventListener('click', check)


// FUNCTIONS 
function check() {
  const day = document.querySelector('#day').value;
    // CONDITIONALS 
    if (day.toLowerCase() === "tuesday" || day.toLowerCase() === "thursday") {
      console.log(document.getElementById('placeToSee'));
     document.getElementById('placeToSee').innerHTML = "Class day is today!!! Get ready to code!!";
    } else if {
      (day.toLowerCase() === "monday" || day.toLowerCase() === "wednesday" || day.toLowerCase() === "friday") {
        console.log(document.getElementById('placeToSee'));
       document.getElementById('placeToSee').innerHTML = "STUDY CODE ON YOUR OWN TODAY!";
    } else {
      (day.toLowerCase() === "saturday" || day.toLowerCase() === "sunday") {
        console.log(document.getElementById('placeToSee'));
       document.getElementById('placeToSee').innerHTML = "IT'S THE WEEKEND!!!";
    }
}