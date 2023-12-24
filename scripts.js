function rotateFrontCard () {
    const frontCard = document.getElementById("FrontImage");
    addClass(frontCard, "Rotated");

    const backCard = document.getElementById("BackImage");
    removeClass(backCard, "Rotated");

    const frontCardButton = document.getElementById("FrontCardButton");
    addClass(frontCardButton, "Hidden");

    const backCardButton = document.getElementById("BackCardButton");
    removeClass(backCardButton, "Hidden");
};

function rotateBackCard () {
    const backCard = document.getElementById("BackImage");
    addClass(backCard, "Rotated");

    const frontCard = document.getElementById("FrontImage");
    removeClass(frontCard, "Rotated");

    const backCardButton = document.getElementById("BackCardButton");
    addClass(backCardButton, "Hidden");

    const frontCardButton = document.getElementById("FrontCardButton");
    removeClass(frontCardButton, "Hidden");
};

function addClass (element, className) {
    if (!element.classList.contains(className)) {
        element.classList.add(className);
    }
};

function removeClass (element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className);
    }
};
