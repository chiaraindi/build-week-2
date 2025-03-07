const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 50,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const addClasses = (element, ...classes) => {
    classes.forEach(CSSclass => {
        return element.classList.add(CSSclass);
    });
};

const removeClasses = (element, ...classes) => {
    classes.forEach(CSSclass => {
        return element.classList.remove(CSSclass);
    });
};

const toggleClasses = (element, ...classes) => {
    classes.forEach(CSSclass => {
        return element.classList.toggle(CSSclass);
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
const topCentralBar = document.querySelector('.barra-centrale-top');
const bottomCentralBar = document.querySelector('.barra-centrale-bottom');

window.addEventListener('scroll', () => {
    const isScrollYZero = window.scrollY === 0;

    if (isScrollYZero) {
        addClasses(navbar, 'nav-height');
        addClasses(topCentralBar, 'd-flex');
        removeClasses(topCentralBar, 'd-none');
        addClasses(bottomCentralBar, 'position-absolute');
    } else {
        removeClasses(navbar, 'nav-height');
        removeClasses(topCentralBar, 'd-flex');
        addClasses(topCentralBar, 'd-none');
        removeClasses(bottomCentralBar, 'position-absolute');
    }
});

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

const createCard = () => {
    cardsText.forEach(card => {
        const col = createElement('div');
        addClasses(col, 'col-12', 'col-md-6', 'col-lg-4', 'col-xxl-2');

        const customCard = createElement('div');
        addClasses(customCard, 'custom-card', 'd-flex', 'flex-column');

        const carousel = createElement('div');
        addClasses(carousel, 'carousel', 'slide');
        addAttribute(carousel, 'id', `${card.ID}`);

        // Carousel Indicators
        const carouselIndicators = createElement('div');
        addClasses(carouselIndicators, 'carousel-indicators');
        carouselIndicators.innerHTML = `<button type="button" data-bs-target="#${card.ID}" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#${card.ID}" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#${card.ID}" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>`;

        // Carousel Inner
        const carouselInner = createElement('div');
        addClasses(carouselInner, 'carousel-inner', 'position-relative');

        // Images
        cardsImages.forEach((cardImage, i) => {
            const carouselItem = createElement('div');
            const isItemActive = i === 0 ? 'active' : 'not-active';
            addClasses(carouselItem, 'carousel-item', `${isItemActive}`);
            carouselItem.innerHTML += `<img src="${cardImage.image}" class="d-block w-100 rounded-3" alt="...">`;

            return appendElements(carouselInner, carouselItem);
        });

        const heartIcon = createElement('div');
        addClasses(heartIcon, 'heart-icon', 'position-absolute');
        heartIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>`;

        // Buttons
        const buttonPrev = createElement('button');
        addClasses(buttonPrev, 'carousel-control-prev');
        addAttribute(buttonPrev, 'type', 'button');
        addAttribute(buttonPrev, 'data-bs-target', `#${card.ID}`);
        addAttribute(buttonPrev, 'data-bs-slide', 'prev');
        buttonPrev.innerHTML = `<span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>`;

        const buttonNext = createElement('button');
        addClasses(buttonNext, 'carousel-control-next');
        addAttribute(buttonNext, 'type', 'button');
        addAttribute(buttonNext, 'data-bs-target', `#${card.ID}`);
        addAttribute(buttonNext, 'data-bs-slide', 'next');
        buttonNext.innerHTML = `<span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>`;

        // Card Text
        const cardtext = createElement('div');
        addClasses(cardtext, 'card-text', 'py-2');

        const cardLocation = createElement('div');
        addClasses(cardLocation, 'card-location');

        // Inside CardLocation
        const locationTitle = createElement('h6');
        addClasses(locationTitle, 'mb-0');
        locationTitle.innerHTML = card.location;

        const cardRating = createElement('div');
        addClasses(cardRating, 'card-rating');

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

        // Card Info
        const cardInfo = createElement('div');
        addClasses(cardInfo, 'card-info');

        // Inside Card Info
        const host = createElement('p');
        addClasses(host, 'mb-0');
        host.innerHTML = card.host;

        const date = createElement('p');
        addClasses(date, 'mb-2');
        date.innerHTML = card.date;

        appendElements(cardInfo, host, date);

        // Card Price
        const cardPrice = createElement('div');
        addClasses(cardPrice, 'card-price');

        // Inside Card Price
        const price = createElement('p');
        addClasses(price, 'mb-0');

        const priceSpan = createElement('span');
        addClasses(priceSpan, 'fw-medium');
        priceSpan.innerHTML = card.price;

        appendElements(price, priceSpan, ' notte');
        appendElements(cardPrice, price);

        appendElements(cardtext, cardLocation, cardInfo, cardPrice);

        // Append Carousel
        appendElements(col, customCard);
        appendElements(customCard, carousel, cardtext);
        appendElements(carouselInner, heartIcon);
        appendElements(
            carousel,
            carouselIndicators,
            carouselInner,
            buttonPrev,
            buttonNext
        );

        appendElements(cardContainer, col);
    });
};

createCard();
