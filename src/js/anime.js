import anime from 'animejs';



const loader = anime.timeline();
const load = document.querySelector('.loader');



function showAnimation(){
  load.classList.remove('hidden')
}
loader.add({
    targets: '#shape',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutQuart',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: false,
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



