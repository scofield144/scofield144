
window.addEventListener('scroll', onScroll);

onScroll()

function onScroll() {
   
   showNavOnScroll();
   showBackToTopButtonOnScroll();

   activateMenuAtCurrentSection(services);
   activateMenuAtCurrentSection(services);
   activateMenuAtCurrentSection(about);
   activateMenuAtCurrentSection(contact); 

}

function  activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + (innerHeight/2);

        /*Verificar se a seção passou da linha
        Quais dados eu vou usar? */
    
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight

    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
       
     // verificar se a base esta abaixo da linha
     
    const sectionEndsAt = sectionTop + sectionHeight
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
       

            /* Limites da seção */
    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine
        
    const sectionId = section.getAttribute('id')
    /* console.log(sectionId) */

    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)
 
     menuElement.classList.remove('active')  
        if(sectionBoundaries){
             console.log('estou na seça ',sectionId); 
           menuElement.classList.add('active')
        }
}





















function showNavOnScroll () {
        if(scrollY > 0){
            navigation.classList.add('scroll') 
        }
        else {
            navigation.classList.remove('scroll');
        }
    }
function showBackToTopButtonOnScroll () {
        //console.log(scrollY)
        if(scrollY > 700){
            backToTopButton.classList.add('show') 
        }
        else {
            backToTopButton.classList.remove('show');
        }
    }



/* open and closer */
let openMenu = (()=> document.body.classList.add('menu-expanded'))
let closeMenu= (()=> document.body.classList.remove('menu-expanded'))

/* Smooth scrolling */
ScrollReveal({
    origin:'top',
    distance: '30px',
    duration: 700,

}).reveal('#home, #home img, #home .stats,#services, #services header,#services .card,#about,#about header, #about content');