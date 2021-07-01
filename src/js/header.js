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

// //toggle Menu
// var doc = document.getElement;
// var w =window;

// var currentScroll = prevScroll = w.scrollY || doc.scrollTop;
// var currDriection = prevDir = 0;

// const header =document.querySelector('.header')

// const checkScroll = ()=>{
//     currentScroll = w.scrollY || doc.scrollTop

//     if(currentScroll > prevScroll){
//         //scroll down to
//         currDriection =2
//     }else{
//         currDriection =1
//     }

//     if(currDriection !== prevDir){
//         toggleHeader()
//     }
//     prevDir = currDriection;
//     prevScroll =currentScroll;
// }
// const toggleHeader = ()=>{
//     if(currDriection === 2){
//         header.classList.add('hide')
//     }else if(currDriection ===1){
//         header.classList.remove('hide')
//     }
// }

// window.addEventListener('scroll', checkScroll);



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

const showMobileNav = document.querySelector('.hamburger')

// function burgurMenu(){
//     document.addEventListener('click',()=>{
//         showMobileNav.classList.toggle('is-active')
//     })
// }
// burgurMenu()



// const navLink =document.querySelectorAll('.nav_link')

// function linkActive() {
//     //active menu 

//     navLink.forEach(n => n.classList.remove('active'))
//     this.classList.add('active')

//     //remove menu 

//     const navMenu =document.getElementById('nav-menu')
//     navMenu.classList.remove('show')
// }
// navLink.forEach(n => n.addEventListener('click',linkAction))

