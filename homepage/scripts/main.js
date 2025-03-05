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

// Cards
const cardContainer = document.querySelector('.card-container');

const addClasses = (element, ...classes) => {
    classes.forEach(CSSclass => {
        return element.classList.add(CSSclass);
    });
};

const addAttribute = (element, name, value) => {
    return element.setAttribute(name, value);
};

const createElement = element => {
    return document.createElement(element);
};

const appendElements = (container, ...contents) => {
    contents.forEach(content => {
        return container.append(content);
    });
};

const createCard = () => {
    const col = createElement('div');
    addClasses(col, 'col', 'col-md-6', 'col-lg-4', 'col-xxl-2');

    const customCard = createElement('div');
    addClasses(customCard, 'custom-card');

    const carousel = createElement('div');
    addClasses(carousel, 'carousel', 'slide');
    addAttribute(carousel, 'id', 'carouselExampleIndicators');
};

// cardsArray.forEach(card => {
//     const col = createElement('div');
//     addClasses(col, 'col', 'col-md-6', 'col-lg-4', 'col-xxl-2');

//     col.innerHTML = `<div class="custom-card d-flex flex-column">
//                         <div id="carouselExampleIndicators" class="carousel slide">
//                             <div class="carousel-indicators">
//                                 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
//                                     class="active" aria-current="true" aria-label="Slide 1"></button>
//                                 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
//                                     aria-label="Slide 2"></button>
//                                 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
//                                     aria-label="Slide 3"></button>
//                             </div>
//                             <div class="carousel-inner position-relative">
//                                 <div class="carousel-item active">
//                                     <img src="${card.imageOne}"
//                                         class="d-block w-100 rounded-3" alt="${card.imageAltOne}">
//                                 </div>
//                                 <div class="carousel-item">
//                                     <img src="${card.imageTwo}"
//                                         class="d-block w-100 rounded-3" alt="${card.imageAltTwo}">
//                                 </div>
//                                 <div class="carousel-item">
//                                     <img src="${card.imageThree}"
//                                         class="d-block w-100 rounded-3" alt="${card.imageAltThree}">
//                                 </div>
//                                 <div class="card-most-loved position-absolute">
//                                     <a href="#" class="fw-medium">Amato dagli ospiti</a>
//                                 </div>
//                                 <div class="heart-icon position-absolute">
//                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
//                                         stroke-width="1.5" stroke="currentColor" class="size-6">
//                                         <path stroke-linecap="round" stroke-linejoin="round"
//                                             d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
//                                     </svg>

//                                 </div>
//                             </div>
//                             <button class="carousel-control-prev" type="button"
//                                 data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//                                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                                 <span class="visually-hidden">Previous</span>
//                             </button>
//                             <button class="carousel-control-next" type="button"
//                                 data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//                                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                                 <span class="visually-hidden">Next</span>
//                             </button>
//                         </div>
//                         <div class="card-text py-2">
//                             <div class="card-location d-flex align-items-center justify-content-between">
//                                 <h6 class="mb-0">${card.location}</h6>
//                                 <div class="card-rating d-flex align-items-center gap-1">
//                                     <div class="star-icon d-flex align-items-center">
//                                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
//                                             class="size-6">
//                                             <path fill-rule="evenodd"
//                                                 d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
//                                                 clip-rule="evenodd" />
//                                         </svg>
//                                     </div>
//                                     <p class="mb-0">${card.rating}</p>
//                                 </div>
//                             </div>
//                             <div class="card-info">
//                                 <p class="mb-0">Host: ${card.host}</p>
//                                 <p class="mb-2">${card.date}</p>
//                             </div>
//                             <div class="card-price">
//                                 <p class="mb-0"><span class="fw-medium">${card.price} €</span> notte</p>
//                             </div>
//                         </div>
//                     </div>`;

//     appendElement(cardContainer, col);
// });

// Footer
const isoleContainer = document.getElementById('nav-isole');
const montagneContainer = document.getElementById('nav-montagne');
const attivitaContainer = document.getElementById('nav-attivita');
const popolariContainer = document.getElementById('nav-popolari');
const litoraleContainer = document.getElementById('nav-litorale');
const categorieContainer = document.getElementById('nav-categorie');
const destinazioniStoricheContainer = document.getElementById(
    'nav-destinazioni-storiche'
);

const createLocationList = (appender, array) => {
    const grid = createElement('div');
    addClasses(grid, 'display-grid');

    array.forEach(location => {
        const title = createElement('h6');
        addClasses(title, 'footer-location-title');
        title.innerHTML = location.location;

        const text = createElement('p');
        addClasses(text, 'footer-location-type');
        text.innerHTML = location.propertyType;

        const locationContainer = createElement('div');
        addClasses(locationContainer, 'footer-location');
        appendElements(locationContainer, title, text);

        appendElements(grid, locationContainer);

        return appendElements(appender, grid);
    });
};

createLocationList(popolariContainer, popolariLocations);
createLocationList(litoraleContainer, popolariLocations);
createLocationList(destinazioniStoricheContainer, popolariLocations);
createLocationList(isoleContainer, popolariLocations);
createLocationList(montagneContainer, popolariLocations);
createLocationList(categorieContainer, popolariLocations);
createLocationList(attivitaContainer, popolariLocations);
