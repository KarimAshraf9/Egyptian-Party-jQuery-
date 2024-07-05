const navbarBurgerMenu = $('.navbarBurgerMenu');
const navbarCloseIcon = $('.navbar .fa-xmark');
const navbar = $('.navbar');
const navbarWidth = $('.navbar').outerWidth(true);
const singerNumber = $('.detailsSection h3')
const singerDetail = $('.detailsSection p')



// closing the navbar from close icon
navbarCloseIcon.click(() =>{
    navbar.animate({left:-navbarWidth},500)
    navbarBurgerMenu.animate({left:0},500)

})

// open the nabar from burger menu
navbarBurgerMenu.click(() =>{
    if(navbar.offset().left != 0){
        navbar.animate({left:0},500)
        navbarBurgerMenu.animate({left:navbarWidth},500)
    }
})

// show details of each singer and hide all details of rest singers
singerNumber.click((e) =>{
    $(e.target).next().slideToggle(500)
    $(e.target).parent().siblings().children().not('h3').slideUp(500)
})



// counter Section
const countDownDate = new Date("Jul 3, 2025 00:00:00").getTime();
const countDownDays = $('.days span');
const countDownHours = $('.hours span');
const countDownMinutes = $('.minutes span');
const countDownSeconds = $('.seconds span');

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countDownDays.text(Math.max(days, 0) + ' D')
    countDownHours.text(Math.max(hours, 0) + ' h')
    countDownMinutes.text(Math.max(minutes, 0) + ' m')
    countDownSeconds.text(Math.max(seconds, 0) + ' s')

    if(Math.floor(distance / 1000) <= 0 ){
        clearInterval(x)
    }

},1000);


// textarea count charachters
const textArea = $('.contactSectionForm textarea');
const availableCharachters  =$('.contactSectionForm p span');
const formbtn = $('.contactSectionForm button')

textArea.keyup(() =>{

    const charCount = textArea.val().length
    if(charCount >= 100 ){
        availableCharachters.text("your available character finished");
        formbtn.addClass('disabled')
    }
    else{

        availableCharachters.text(100-charCount);
        if(formbtn.hasClass('disabled')){
            formbtn.removeClass('disabled')
        }

    }
})



// scrolling to section when navbar anchor clicked
$('.navbar a').click((e) =>{
    const sectionID = $(e.target).attr('href');
    const sectionTopOffset = $(sectionID).offset().top;
    $('html,body').animate({scrollTop:sectionTopOffset},1500)

})
