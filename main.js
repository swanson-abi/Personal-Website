/* Toggle between hide/show for the navigation menu when the user clicks on
 the hamburger menu icon */
function toggleMenu() {
    var menu = document.getElementById("myLinks");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }
