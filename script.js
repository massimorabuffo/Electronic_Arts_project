//footer
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


// news
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

//navbar

const avatar = document.getElementById("avatar_section");
const question = document.getElementById("question_section")
const sidebar = document.getElementById("sidebar");
const logoSidebar = document.getElementById("logo_sidebar")
const logoNav = document.getElementById("logo_nav")
const questionNav = document.getElementById("question_nav")
const hamburger = document.getElementById("hamburger-section");
const logoHamburger = document.getElementById("close-side")

function showDivAvatar(){
    avatar.style.display = 'flex';
    avatar.style.height = '24rem';
  }

function showDivQuestion(){
    question.style.display = 'flex';
    question.style.height = '24rem';
  }

function showSidebar(){
    sidebar.style.display = 'block';
    sidebar.style.width = '26.5rem';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
}

function showSidebarTablet(){
  hamburger.style.display = 'flex'
  hamburger.style.width =  '24rem'
  document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
}

function closeSidebar(){
  sidebar.style.width = '0';
  document.body.style.backgroundColor = 'white'
}

logoSidebar.addEventListener("click", closeSidebar);

function closeAvatar(){
  avatar.style.height = '0';
}

logoNav.addEventListener("click", closeAvatar);

function closeQuestion(){
  question.style.height = '0';
}

questionNav.addEventListener("click", closeQuestion);

function closeSidebarTablet(){
  hamburger.style.display = 'none';
  hamburger.style.width =  '0';
  document.body.style.backgroundColor = 'white';
}

logoHamburger.addEventListener('click', closeSidebarTablet)
