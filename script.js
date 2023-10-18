const initSlider = () => {
    const imageList = document.querySelector(".tabs");
    const slideButtons = document.querySelectorAll(".tabs-arrow");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    };

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            console.log(slideButtons)
            const direction = button.id === "button-left" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

};



window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);
// FINE PARTE CAROSELLO




function mostraCard(id) {
    chiudiCard();

    const cardDaMostrare = document.getElementById(id);
    if (cardDaMostrare) {
        cardDaMostrare.style.display = 'flex';
    }
}

function chiudiCard() {
    const cards = document.querySelectorAll('.tabs-card-container');
    cards.forEach(card => {
        card.style.display = 'none';
    });
}







