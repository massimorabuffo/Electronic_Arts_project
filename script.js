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


