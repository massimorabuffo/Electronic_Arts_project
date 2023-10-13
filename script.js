function togglePanel(button, content, arrow) {
    const isVisible = content.style.display === "block";
    
    document.querySelectorAll(".toggle-content").forEach((panel) => {
        panel.style.display = "none";
    });

    document.querySelectorAll(".toggle-button .arrow").forEach((arrow) => {
        arrow.style.transform = "rotate(0deg)";
    });

    arrow.style.transform = isVisible ? "rotate(0deg)" : "rotate(180deg)";
    
    content.style.display = isVisible ? "none" : "block";
}

const linguaButton = document.getElementById("linguaButton");
const linguaOptions = document.getElementById("linguaOptions");
const linguaArrow = document.querySelector(".arrow");
let linguaOptionsVisible = false;

linguaButton.addEventListener("click", () => {
    togglePanel(linguaButton, linguaOptions, linguaArrow);
});

const regioneButton = document.getElementById("regioneButton");
const regioneOptions = document.getElementById("regioneOption");
const regioneArrow = document.querySelector(".regioneArrow");
let regioneOptionsVisible = false;

regioneButton.addEventListener("click", () => {
    togglePanel(regioneButton, regioneOptions, regioneArrow);
});



const svgs = document.querySelectorAll(".checked");
const casella = document.querySelectorAll(".spazio")
svgs[15].style.display = "inline-block"; 

casella.forEach((spazio) => {
    spazio.addEventListener("click", () => {
        
        svgs.forEach(s => s.style.display = "none");
        
        const selectedIndex = parseInt(spazio.getAttribute("data-index"));
        
        svgs[selectedIndex].style.display = "inline-block";
    });
});



const svgRegione = document.querySelectorAll(".checkedRegione");
const casellaRegione = document.querySelectorAll(".spazioRegione");


svgRegione[5].style.display = "inline-block";

casellaRegione.forEach((casella, index) => {
    casella.addEventListener("click", () => {
    
        svgRegione.forEach(svg => svg.style.display = "none");

        svgRegione[index].style.display = "inline-block";
    });
});






  




