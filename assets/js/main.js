/*==================== Partnership Section ====================*/
var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img, .about__img-right,
            .services__content, .logos, .wrapper,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 200
})

/*==================== TESTIMONI ====================*/
const reviews = [
    {
        author: 'CodeWithHarry',
        job: 'Programmer',
        text: 'Harry is also known as CodeWithHarry on youtube. He has a hude subscribers youtube channel. He had done his study in B.Tech Computer Science.',
        img: 'assets/img/about2.png'
    },
    {
        author: 'Jassi Sheoran',
        job: 'YouTuber',
        text: 'Jassi is also known as Jassi Sheoran on youtube. He has a huge subscribers youtube channel. He is pursuing B.A. from MDU Rohtak and Part Time Youtuber',
        img: 'assets/img/about1.png'
    },
    {
        author: 'Clever Programmer',
        job: 'JavaScript Developer',
        text: 'You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level.',
        img: 'assets/img/about2.png'
    },
    {
        author: 'Ishan Sharma',
        job: 'YouTube Creator',
        text: 'He is most popular YouTube Creator with 599K subscribers and 22M+ video views. He makes freelancing, career and tech related content for students. And he have also the chance to talk with entrepreneurs like Ankur Warikoo and Noah Kagan on his channel.',
        img: 'assets/img/about1.png'
    }

]
// Creating variables to get elements from our DOM.
const mainImage = document.getElementById('img');
const myAuthor = document.getElementById('author');
const myJob = document.getElementById('job');
const myText = document.getElementById('text');
const prev = document.getElementById('prev-btn');
const next = document.getElementById('next-btn');
const random = document.getElementById('randomBtn')

let indexNum = 0;
let length = reviews.length;

// Code for listening next button event
next.addEventListener('click', function () {
    indexNum++;
    if (indexNum > length-1) {
        indexNum = 0;
        mainImage.src = reviews[indexNum].img;
        myAuthor.innerHTML = reviews[indexNum].author;
        myJob.innerHTML = reviews[indexNum].job;
        myText.innerHTML = reviews[indexNum].text;
    }
    else {
        mainImage.src = reviews[indexNum].img;
        myAuthor.innerHTML = reviews[indexNum].author;
        myJob.innerHTML = reviews[indexNum].job;
        myText.innerHTML = reviews[indexNum].text;
    }
})

// Code for listening previous button event
prev.addEventListener('click', function () {
    indexNum--;
    if (indexNum < 0) {
        indexNum = 3;
        mainImage.src = reviews[indexNum].img;
        myAuthor.innerHTML = reviews[indexNum].author;
        myJob.innerHTML = reviews[indexNum].job;
        myText.innerHTML = reviews[indexNum].text;
    }
    else {
        mainImage.src = reviews[indexNum].img;
        myAuthor.innerHTML = reviews[indexNum].author;
        myJob.innerHTML = reviews[indexNum].job;
        myText.innerHTML = reviews[indexNum].text;
    }
})
