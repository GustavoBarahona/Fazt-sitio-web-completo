//console.log("Hello world");
document.querySelector('.menu-btn').addEventListener('click', () =>{
    //console.log("Click!!!");
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase', { delay: 300});
ScrollReveal().reveal('.news-cards', { delay: 300});
ScrollReveal().reveal('.cards-banner-one', { delay: 300});
ScrollReveal().reveal('.cards-banner-two', { delay: 300});
