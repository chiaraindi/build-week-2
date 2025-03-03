const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 50,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Carousel Icons
const carouselContainer = document.querySelector('.carousel-wrapper');

carouselIcons.forEach(icon => {
    carouselContainer.innerHTML += `<div class="swiper-slide">
                                            <a href="#" class="text-decoration-none fw-medium">
                                            <div class="swiper-icon">
                                                ${icon.svg}
                                            </div>
                                        ${icon.text}</a>
                                    </div>`;
});
