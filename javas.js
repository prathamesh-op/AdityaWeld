const mybutton = document.querySelector("#myBtn");

window.addEventListener("scroll",scrollFunction());

function scrollFunction() {
  if (window.pageYOffset > 700) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function openNav() {
  var x = document.getElementById("mySidebar");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";

  } else {
    x.style.display = "none";
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

}

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {

    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
