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
// development
