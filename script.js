var btn = document.getElementById("navbar");
var navbar = document.getElementsByTagName("ul")[0];

btn.addEventListener("click", function(){
    if (navbar.style.display == "none") {
    navbar.style.display = "block";
    } else {
    navbar.style.display = "none"
    }
});
