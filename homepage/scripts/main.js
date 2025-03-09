const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 35,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Carousel Icons
const carouselContainer = document.querySelector('.carousel-wrapper');

const createBadgeIcon = () => {
    carouselIcons.forEach(icon => {
        const swiperSlide = createElement('div');
        addClasses(swiperSlide, 'swiper-slide');

        const swiperLink = createElement('a');
        addAttribute(swiperLink, 'href', '#');
        addClasses(swiperLink, 'text-decoration-none', 'fw-medium');

        // Inside Swiper Link
        const swiperIcon = createElement('div');
        addClasses(swiperIcon, 'swiper-icon');
        swiperIcon.innerHTML = `${icon.svg}`;

        // Append elements
        appendElements(swiperLink, swiperIcon, `${icon.text}`);
        appendElements(swiperSlide, swiperLink);

        appendElements(carouselContainer, swiperSlide);
    });
};

createBadgeIcon();

// Navbar
const navbar = document.querySelector('nav');
const centralBar = document.querySelector('.barra-centrale');
const bigSearchBar = document.querySelector('.spread-search-bar');
const smallSearchBar = document.querySelector('.short-search-bar');
const topCentralBar = document.querySelector('.barra-centrale-top');
const bottomCentralBar = document.querySelector('.barra-centrale-bottom');

const growNavbar = () => {
    addClasses(topCentralBar, 'd-flex');
    addClasses(centralBar, 'slide-down');
    removeClasses(centralBar, 'slide-up');
    addClasses(smallSearchBar, 'visually-hidden');
    removeClasses(bigSearchBar, 'visually-hidden');
    removeClasses(topCentralBar, 'visually-hidden');
    addClasses(navbar, 'nav-height', 'nav-md-height');
    addClasses(bottomCentralBar, 'position-absolute', 'left-position');
};

const shrinkNavbar = () => {
    addClasses(centralBar, 'slide-up');
    removeClasses(topCentralBar, 'd-flex');
    removeClasses(centralBar, 'slide-down');
    addClasses(bigSearchBar, 'visually-hidden');
    addClasses(topCentralBar, 'visually-hidden');
    removeClasses(smallSearchBar, 'visually-hidden');
    removeClasses(navbar, 'nav-height', 'nav-md-height');
    removeClasses(bottomCentralBar, 'position-absolute', 'left-position');
};

const editNavbarOnScroll = () => {
    const isScrollYZero = window.scrollY === 0;

    if (isScrollYZero) {
        growNavbar();
    } else {
        shrinkNavbar();
    }
};

window.addEventListener('scroll', editNavbarOnScroll);

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

// Cards
const cardContainer = document.querySelector('.card-container');

const createColumn = () => {
    const col = createElement('div');
    addClasses(col, 'col-12', 'col-md-6', 'col-lg-4', 'col-xxl-3');

    return col;
};

const createCustomCard = () => {
    const customCard = createElement('div');
    addClasses(customCard, 'custom-card', 'd-flex', 'flex-column');

    return customCard;
};

const createCarousel = (element, ...contents) => {
    const carousel = createElement('div');
    addClasses(carousel, 'carousel', 'slide');
    addAttribute(carousel, 'id', `${element.ID}`);

    contents.forEach(content => {
        appendElements(carousel, content);
    });

    return carousel;
};

const createIndicators = element => {
    const carouselIndicators = createElement('div');
    addClasses(carouselIndicators, 'carousel-indicators');
    carouselIndicators.innerHTML = `<button type="button" data-bs-target="#${element.ID}" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#${element.ID}" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#${element.ID}" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>`;

    return carouselIndicators;
};

const createImages = (element, i) => {
    const carouselItem = createElement('div');
    const isItemActive =
        element.image.indexOf(element.image[i]) === 0 ? 'active' : 'not-active';
    addClasses(carouselItem, 'carousel-item', `${isItemActive}`);
    carouselItem.innerHTML = `<img src="${element.image[i]}" class="d-block w-100 rounded-3" alt="...">`;

    return carouselItem;
};

const createInner = (element, content) => {
    const carouselInner = createElement('div');
    addClasses(carouselInner, 'carousel-inner', 'position-relative');

    const imageOne = createImages(element, 0);
    const imageTwo = createImages(element, 1);
    const imageThree = createImages(element, 2);

    appendElements(carouselInner, imageOne, imageTwo, imageThree, content);

    return carouselInner;
};

const createHeartIcon = () => {
    const heartIcon = createElement('div');
    addClasses(heartIcon, 'heart-icon', 'position-absolute');
    heartIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>`;

    return heartIcon;
};

const createButtonPrev = element => {
    const buttonPrev = createElement('button');
    addClasses(buttonPrev, 'carousel-control-prev');
    addAttribute(buttonPrev, 'type', 'button');
    addAttribute(buttonPrev, 'data-bs-target', `#${element.ID}`);
    addAttribute(buttonPrev, 'data-bs-slide', 'prev');
    buttonPrev.innerHTML = `<span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>`;

    return buttonPrev;
};

const createButtonNext = element => {
    const buttonNext = createElement('button');
    addClasses(buttonNext, 'carousel-control-next');
    addAttribute(buttonNext, 'type', 'button');
    addAttribute(buttonNext, 'data-bs-target', `#${element.ID}`);
    addAttribute(buttonNext, 'data-bs-slide', 'next');
    buttonNext.innerHTML = `<span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>`;

    return buttonNext;
};

const createCardText = (...contents) => {
    const cardText = createElement('div');
    addClasses(cardText, 'card-text', 'py-2');

    contents.forEach(content => {
        appendElements(cardText, content);
    });

    return cardText;
};

const createCardLocation = element => {
    const cardLocation = createElement('div');
    addClasses(cardLocation, 'card-location');

    const locationTitle = createElement('h6');
    addClasses(locationTitle, 'mb-0');
    locationTitle.innerHTML = element.location;

    const cardRating = createElement('div');
    addClasses(cardRating, 'card-rating');
    cardRating.innerHTML = `${element.rating}`;

    const starIcon = createElement('div');
    addClasses(starIcon, 'star-icon');
    starIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path fill-rule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clip-rule="evenodd" />
                    </svg>`;

    const cardRatingNum = createElement('div');
    addClasses(cardRatingNum, 'mb-0');

    appendElements(cardRating, starIcon, cardRatingNum);
    appendElements(cardLocation, locationTitle, cardRating);

    return cardLocation;
};

const createCardInfo = element => {
    const cardInfo = createElement('div');
    addClasses(cardInfo, 'card-info');

    const host = createElement('p');
    addClasses(host, 'mb-0');
    host.innerHTML = `Host: ${element.host}`;

    const date = createElement('p');
    addClasses(date, 'mb-2');
    date.innerHTML = element.date;

    appendElements(cardInfo, host, date);

    return cardInfo;
};

const createCardPrice = element => {
    const cardPrice = createElement('div');
    addClasses(cardPrice, 'card-price');

    const price = createElement('p');
    addClasses(price, 'mb-0');

    const priceSpan = createElement('span');
    addClasses(priceSpan, 'fw-medium');
    priceSpan.innerHTML = element.price;

    appendElements(price, priceSpan, ' notte');
    appendElements(cardPrice, price);

    return cardPrice;
};

const createCard = array => {
    array.forEach(card => {
        const col = createColumn();
        const customCard = createCustomCard();
        appendElements(col, customCard);

        const carousel = createCarousel(
            card,
            createIndicators(card),
            createInner(card, createHeartIcon()),
            createButtonPrev(card),
            createButtonNext(card)
        );
        const cardText = createCardText(
            createCardLocation(card),
            createCardInfo(card),
            createCardPrice(card)
        );
        appendElements(customCard, carousel, cardText);

        appendElements(cardContainer, col);
    });
};

createCard(destinationCards);
