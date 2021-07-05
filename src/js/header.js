//toggle Menu


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
    document.getElementById("header").style.transition = "all .5s ease-in";
  } else {
    document.getElementById("header").style.top = "-60px";
    document.getElementById("header").style.transition = "all .5s";
  }
  prevScrollpos = currentScrollPos;
}





//menu button hambergur
const menuBtn = document.querySelector('.hamburger');
    menuBtn.addEventListener('click',()=>{
    menuBtn.classList.toggle('is-active')
})

//header mobiles

function mobileMenu(toggle , nav){
    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}

const showMenu =(toggleId,naveId)=>{
    const toggle = document.getElementById(toggleId),
    nav =document.getElementById(naveId)

    mobileMenu(toggle,nav)
}
showMenu('menu-btn','nav-menu')


//navLinks toggle

let navLinks = document.querySelectorAll('.nav-link')
navLinks.forEach(
    (navLink) =>{
        navLink.addEventListener('click',()=>{
            const tog = document.querySelector('.nav_menu')
           const menuBtn = document.querySelector('.hamburger')
            menuBtn.classList.toggle('is-active'),
            tog.classList.toggle('show')
            
        })
    }
)

const reloadPageLogo = document.getElementById('logo');

function reload(){
    reloadPageLogo.addEventListener('click',()=>{
        window.location.reload();
    })
}
reload();
