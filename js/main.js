// DOCUMENT 
document.querySelector('#check').addEventListener('click', check)


// FUNCTIONS 
function check() {

  const day = document.querySelector('#day').value

  // CONDITIONALS 
  if (day === 'Tuesday') || (day === "Thursday") {
    alert("IT'S STUDY TIME");
  } else {
    if (day === "Saturday") || (day === "Sunday")
    alert("IT'S THE WEEKEND!!!");
  } else {
    if (day === undefined)
      alert("WHAT ARE YOU DOING WITH YOUR LIFE TODAY!!!");
  }