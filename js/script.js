var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});





var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 6,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    speed: 1000,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});




var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 6,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    freeMode: true,
    freeModeMomentum: false,
    freeModeMomentumBounce: false,
    speed: 1000,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        reverseDirection: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});




var swiper = new Swiper(".mySwiper4", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    centeredSlides: true,
    loop: true,
    freeMode: true,
    freeModeMomentum: false,
    freeModeMomentumBounce: false,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: -120,
        depth: 600,
        modifier: 1,
        slideShadows: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});


var swiper = new Swiper(".mySwiper5", {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,

    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


$(document).ready(function() {
    $('.popup-youtube').magnificPopup({
        type: 'iframe'
    });
});

$(document).ready(function() {
    $('.popup-youtube').magnificPopup({
        type: 'iframe'
    });
});



var button1 = document.getElementById("top");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button1.style.display = "block";
  } else {
    button1.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}