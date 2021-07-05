import assignProps from './assignProps';

export default function() {
      const headerProps={
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        distance: '30px',
        duration: 1000,
        desktop: true,
        mobile: false,
      }
      const defaultProps = {
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        distance: '30px',
        duration: 1000,
        desktop: true,
        mobile: true,
      };
      
      /* header Section */
      setTimeout( () =>{
        ScrollReveal().reveal('.logo ',{ mobile: false },
        assignProps(
          {
      
            delay:500,
            origin:'bottom',
            
          }))
          
      ScrollReveal().reveal('.a',
      assignProps(
        { 
          delay:500,
          origin:'bottom'
        },headerProps))

        ScrollReveal().reveal('.b',
      assignProps(
        {
          delay:600,
          origin:'bottom'
        },headerProps))
        ScrollReveal().reveal('.c',
      assignProps(
        {
          delay:700,
          origin:'bottom'
        },headerProps))
        ScrollReveal().reveal('.d',
      assignProps(
        {
          delay:800,
          origin: 'bottom'
        },headerProps))

      },2500)
      /* Section Title */

      ScrollReveal().reveal('.section-title', 
        assignProps(
          {
            delay:300,distance:'0px', 
            origin:'bottom'
          }, defaultProps),
          
      );
      
    
      /* Hero Section */
     
      setTimeout( () =>{
    
      ScrollReveal().reveal('.hero-title', 
      assignProps(
        { 
          delay: 1000, 
         
          origin: window.innerWidth > 768 ? 'left' : 'bottom'
        }, defaultProps)
    );
      ScrollReveal().reveal('.hero-titleh2', 
        assignProps(
          { 
            delay: 700, 
            origin: window.innerWidth > 768 ? 'left' : 'bottom'
          }, defaultProps)
      );
      
      ScrollReveal().reveal('.hero-cta', 
        assignProps(
          {
            delay: 1100, 
            origin: window.innerWidth > 768 ? 'left' : 'bottom'
          }, defaultProps)
      )},2700)
     
    
      /* About Section */
      ScrollReveal().reveal('.about-wrapper__image', 
        assignProps(
          {
            delay: 600,
            origin: 'bottom'
          }, defaultProps)
      );
    
      ScrollReveal().reveal('.about-wrapper__info', 
        assignProps(
          {
            delay: 1000,
            origin: window.innerWidth > 768 ? 'left' : 'bottom'
          }, defaultProps)
      );
    
      /* Projects Section */
      ScrollReveal().reveal('.project-wrapper__text', 
        assignProps(
          {
            delay: 500,
            origin: window.innerWidth > 768 ? 'left' : 'bottom'
          }, defaultProps)
      );
    
      ScrollReveal().reveal('.project-wrapper__image', 
        assignProps(
          {
            delay: 1000,
            origin: window.innerWidth > 768 ? 'right' : 'bottom'
          }, defaultProps)
      );
    
      /* Contact Section */
      ScrollReveal().reveal('.contact-wrapper', 
        assignProps(
          {
            delay: 800,
            origin: 'bottom'
          }, defaultProps)
      ); 

    
  
}
