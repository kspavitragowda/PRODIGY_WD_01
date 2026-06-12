//navbar scorll effect 
window.addEventListener("scroll",()=>{
    const navbar = document.getElementById("navbar");

        if(window.scrollY > 50){
            navbar.classList.add("scrolled");
        }
        else{
            navbar.classList.remove("scrolled");
        }
    }
);
// Mobile Menu toggle
function toggleMenu(){
    document.getElementById("menuList").classList.toggle("show");
}

//hover effect
const links = document.querySelectorAll("nav ul li a");

links.forEach(link => {
    link.addEventListener("mouseenter",() => {
        link.style.backgroundColor = "#d7b899";
        link.style.color = "#3b2f2f";
    });
    link.addEventListener("mouseleave",() => {
        link.style.backgroundColor = "transparent";
        link.style.color = "#f5f0e6";
    });
});
