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
