import initTilt from './js/tilt';
import initSr from './js/sr';
import header from './js/header';
import anime from './js/anime';



import './style/main.scss';

$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: target.offset().top
        },
        1000
      );
  }
});
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

initSr();
initTilt();
