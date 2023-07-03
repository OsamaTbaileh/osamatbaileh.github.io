// This function adds stars in front of each skill in the Experience Section in index.html 
// based on the 'data-ratng' attribute of the skill.

document.addEventListener("DOMContentLoaded", function() {
var skillItems = document.querySelectorAll(".skill-item");
skillItems.forEach(function(item) {
    var rating = parseInt(item.getAttribute("data-rating"));
    var stars = "";
    for (var i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fa-solid fa-star fa-sm"></i>';
        } 
        else {
            stars += '<i class="fa-regular fa-star fa-sm"></i>';
        }
    }
    item.querySelector(".star-rating").innerHTML = stars;
});
});


// This function enables or disables dark mode based on the user's interaction with the dark mode toggle, 
// and it also checks and sets the initial dark mode state based on the user's system preference.
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("change", function() {
  if (darkModeToggle.checked) {
    document.documentElement.classList.add("dark-mode");
  } 
  else {
    document.documentElement.classList.remove("dark-mode");
  }
});

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  darkModeToggle.checked = true;
  document.documentElement.classList.add("dark-mode");
}