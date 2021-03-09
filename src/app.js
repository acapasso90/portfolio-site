
const htmllabel = document.getElementById("html");
const html = document.querySelector(".fa-html5");
const csslabel = document.getElementById("css");
const css = document.querySelector(".fa-css3-alt");
const javascriptlabel = document.getElementById("javascript");
const javascript = document.querySelector(".fa-js-square");
const reactlabel = document.getElementById("react");
const react = document.querySelector(".fa-react");
const githublabel = document.getElementById("github");
const github = document.querySelector(".fa-github-square");
const bootstraplabel = document.getElementById("bootstrap");
const bootstrapIcon = document.querySelector(".fa-bootstrap");
const npmlabel = document.getElementById("npm");
const npm = document.querySelector(".fa-npm");
const visuallabel = document.getElementById("visualstudiocode");
const visual = document.querySelector(".devicon-visualstudio-plain");
// "hover" effects for Currently Utilizing icons.
html.addEventListener("mouseenter", e => {
    htmllabel.style.opacity = '100%';})
html.addEventListener("mouseleave", e => {
    htmllabel.style.opacity = '0%';});
css.addEventListener("mouseenter", e => {
        csslabel.style.opacity = '100%';})
css.addEventListener("mouseleave", e => {
       csslabel.style.opacity = '0%';});
javascript.addEventListener("mouseenter", e => {
        javascriptlabel.style.opacity = '100%';})
javascript.addEventListener("mouseleave", e => {
    javascriptlabel.style.opacity = '0%';});
react.addEventListener("mouseenter", e => {
       reactlabel.style.opacity = '100%';})
react.addEventListener("mouseleave", e => {
    reactlabel.style.opacity = '0%';});
github.addEventListener("mouseenter", e => {
        githublabel.style.opacity = '100%';})
github.addEventListener("mouseleave", e => {
    githublabel.style.opacity = '0%';});
    bootstrapIcon.addEventListener("mouseenter", e => {
    bootstraplabel.style.opacity = '100%';})
    bootstrapIcon.addEventListener("mouseleave", e => {
    bootstraplabel.style.opacity = '0%';});
npm.addEventListener("mouseenter", e => {
        npmlabel.style.opacity = '100%';})
npm.addEventListener("mouseleave", e => {
    npmlabel.style.opacity = '0%';});
visual.addEventListener("mouseenter", e => {
        visuallabel.style.opacity = '100%';})
visual.addEventListener("mouseleave", e => {
    visuallabel.style.opacity = '0%';})

//Sets intervel for carousel to change slides
    var myCarousel = document.querySelector('#myCarousel')
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 500000000000000000000000,
      wrap: false
    })

//Adds nextSlide/previousSlide functionality to next and previous arrows on carousel
    const next = document.getElementById('next')
    const previous = document.getElementById('previous')

    function nextSlide(){$('.carousel').carousel('next')}
    function previousSlide(){$('.carousel').carousel('prev')}

    next.addEventListener("click", nextSlide)
    previous.addEventListener("click", previousSlide)


//Sets Intersection_Observer_API margin, threshold and area 
    let options = {
        root: document.querySelector('#scrollArea'),
        rootMargin: '0px',
        threshold: 0.25
      }
      
const headers = document.querySelectorAll('.headers')

//Sets Intersection_Observer_API to add headerShown classlist when scrolled to
observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0){
        entry.target.classList.add('headerShown');
        observer.unobserve(entry.target);}
        else {
            entry.target.classList.remove('headerShown');
        }
    });
  });
//Observes all the headers
    headers.forEach(h1 => { observer.observe(h1)});


// Adds display:none from hiddenInfo and removes shown class
function closePopup(){
    const hidden = document.querySelector('.shown');
    hidden.classList.remove('shown');
    hidden.classList.add('hiddenInfo');
    }

    // Adds display:none from hiddenInfo and removes shown class
function closePopupTwo(){
    const hidden = document.querySelector('.shown');
    hidden.classList.remove('shown');
    hidden.classList.add('hiddenInfoTwo');
    }

    // Adds display:none from hiddenInfo and removes shown class
    function closePopupThree(){
        const hidden = document.querySelector('.shown');
        hidden.classList.remove('shown');
        hidden.classList.add('hiddenInfoThree');
        }

// Adds display:none from hiddenInfo and removes shown class
    function closePopupFour(){
        const hidden = document.querySelector('.shown');
        hidden.classList.remove('shown');
        hidden.classList.add('hiddenInfoFour');
        }

    

// on click closePopup
const exitButton = document.querySelector('.closeButton');
exitButton.addEventListener("click", closePopup)

// on click closePopup
const exitButtonTwo = document.querySelector('.closeButtonTwo');
exitButtonTwo.addEventListener("click", closePopupTwo)

// on click closePopup
const exitButtonThree = document.querySelector('.closeButtonThree');
exitButtonThree.addEventListener("click", closePopupThree)

// on click closePopup
const exitButtonFour = document.querySelector('.closeButtonFour');
exitButtonFour.addEventListener("click", closePopupFour)



// Removes display:none from hiddenInfo and adds shown class
function showPopup(){
const hidden = document.querySelector('.hiddenInfo');
hidden.classList.remove('hiddenInfo');
hidden.classList.add('shown');
}

// Removes display:none from hiddenInfo and adds shown class
function showPopupTwo(){
    const hidden = document.querySelector('.hiddenInfoTwo');
    hidden.classList.remove('hiddenInfoTwo');
    hidden.classList.add('shown');
    }

// Removes display:none from hiddenInfo and adds shown class
function showPopupThree(){
    const hidden = document.querySelector('.hiddenInfoThree');
    hidden.classList.remove('hiddenInfoThree');
    hidden.classList.add('shown');
    }

    // Removes display:none from hiddenInfo and adds shown class
function showPopupFour(){
    const hidden = document.querySelector('.hiddenInfoFour');
    hidden.classList.remove('hiddenInfoFour');
    hidden.classList.add('shown');
    }
    


// on click triggers showPopup function
const popupLink = document.querySelector('.popupLink');
popupLink.addEventListener("click", showPopup);  

// on click triggers showPopup function
const popupLinkTwo = document.querySelector('.popupLinkTwo');
popupLinkTwo.addEventListener("click", showPopupTwo);  

// on click triggers showPopup function
const popupLinkThree = document.querySelector('.popupLinkThree');
popupLinkThree.addEventListener("click", showPopupThree);  

// on click triggers showPopup function
const popupLinkFour = document.querySelector('.popupLinkFour');
popupLinkFour.addEventListener("click", showPopupFour);  

