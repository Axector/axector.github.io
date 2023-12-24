function rotateFrontCard () {
    const frontCard = document.getElementById("FrontImage");
    addClass(frontCard, "FrontRotated");

    const backCard = document.getElementById("BackImage");
    removeClass(backCard, "BackRotated");

    const frontCardButton = document.getElementById("FrontCardButton");
    frontCardButton.style.display = 'none';

    const backCardButton = document.getElementById("BackCardButton");
    backCardButton.style.display = 'block';
};

function rotateBackCard () {
    const backCard = document.getElementById("BackImage");
    addClass(backCard, "BackRotated");

    const frontCard = document.getElementById("FrontImage");
    removeClass(frontCard, "FrontRotated");

    const backCardButton = document.getElementById("BackCardButton");
    backCardButton.style.display = 'none';

    const frontCardButton = document.getElementById("FrontCardButton");
    frontCardButton.style.display = 'block';
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
