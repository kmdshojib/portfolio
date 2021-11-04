import anime from 'animejs';


const loader = anime.timeline();
const load = document.querySelector('.loader');



function showAnimation(){
  load.classList.remove('hidden')
}
loader.add({
    targets: '#shape',
    delay:200,
    duration: 1500,
    direction: 'alternate',
    loop: false,
    easing: 'easeInOutQuart',
  })
  
loader.add({
    targets: '#logo1 path',
    duration: 700,
    easing: 'easeInOutQuart',
    opacity: 1,
 })
  loader.add({
    targets: '#logo1',
    delay: 500,
    duration: 300,
    easing: 'easeInOutQuart',
    opacity: 0,
    scale: 0.1,
  })

showAnimation()
function showContent(){
  setTimeout( () =>{load.classList.add('hidden')},3200)
}
loader.add({
    targets:showContent(),
    duration:200,
    easing: 'easeInOutQuart',
    opacity: 0,
    zIndex:-1
})






