// Wait for the page to fully load
window.addEventListener('load', function () {
    // Initialize Swiper for the banner slider
    const bannerSlider = new Swiper('.homepage-slider', {
        loop: true, // Enables infinite looping
        slidesPerView: 1, // Display one slide at a time
        spaceBetween: 10, // Space between slides
        pagination: {
            el: '.swiper-pagination', // Pagination element
            clickable: true, // Allows pagination dots to be clickable
        },
        navigation: {
            nextEl: '.swiper-button-next', // Next button element
            prevEl: '.swiper-button-prev', // Previous button element
        },
        autoplay: {
            delay: 3000, // Automatically switch slides every 3 seconds
            disableOnInteraction: false, // Autoplay will not stop on interaction
        },
    });

    // Example for related-color-item slider or horizontal slider
    const relatedColorSlider = new Swiper('.related-color-item-main', {
        loop: false, // No looping
        slidesPerView: 2.5, // Show 2.5 slides by default
        spaceBetween: 10, // Space between slides
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // Responsive settings
            750: {
                slidesPerView: 4, // Show 4 slides on screens wider than 750px
                spaceBetween: 20, // Adjust space for wider screens
            },
        },
    });
});

// for new swiper at bottom 
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper('.swiper-container', {
        loop: true, // Enable infinite loop
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});
