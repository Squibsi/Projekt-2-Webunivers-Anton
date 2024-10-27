/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  let x = document.getElementById("myLinks");
  if (x.classList.contains("show")) {
      x.classList.remove("show"); // Hide the links
  } else {
      x.classList.add("show"); // Show the links
  }
}