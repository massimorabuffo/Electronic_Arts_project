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

//<p class="button-tabs">Notizie EA</p>
// function showDivAvatar(){
//     if(display == 1){
//       avatar.style.display = 'flex';
//       display = 0;
//     }else{
//       avatar.style.display = 'none';
//       display = 1;
//     }
//   }
// const buttonEA = document.getElementById('EA')
// const buttonEAFC = document.getElementById('EA-FC')
// const buttonApex = document.getElementById('Apex')
// const buttonSims = document.getElementById('The-Sims')
// const buttonStarWars = document.getElementById('Star-Wars')
// const buttonF1 = document.getElementById('F1')
// const buttonBattlefield = document.getElementById('Battlefield')
// const buttonNeedForSpeed = document.getElementById('NeedForSpeed')
// //Riferimento dei tabs-card-container
const tabsCardContainerEA = document.getElementsByClassName('EA')
const tabsCardContainerEAFC = document.getElementsByClassName('EA-Sports')
const tabsCardContainerApex = document.getElementsByClassName('apex')
const tabsCardContainerSims = document.getElementsByClassName('thesims')
const tabsCardContainerStarWars = document.getElementsByClassName('StarWars')
const tabsCardContainerF1 = document.getElementsByClassName('F1')
const tabsCardContainerBattlefield = document.getElementsByClassName('Battlefield')
const tabsCardContainerNeedForSpeed = document.getElementsByClassName('NeedForSpeed')

// let displayButton = false
// const buttonTabs = document.querySelectorAll('.button-tabs')

// buttonTabs.forEach((button) => {
//     console.log(button)
//     button.addEventListener('click', function() {
//         const tabsCardContainer = document.getElementsByClassName('tabs-card-container')
//         if (displayButton === true) {
//             tabsCardContainer.style.display = 'flex'
//         } else {
//             tabsCardContainer.style.display = 'none'
//         }
//     })
// })
// function showCardEAFC() {
//     if (displayButton === true) {
//         tabsCardContainerEAFC.style.display = 'flex'
//     } else {
//         tabsCardContainerEAFC.style.display = 'none'
//     }
// }
// function showCardApex() {
//     if (displayButton === true) {
//         tabsCardContainerApex.style.display = 'flex'
//     } else {
//         tabsCardContainerApex.style.display = 'none'
//     }
// }
// function showCardSims() {
//     if (displayButton === true) {
//         tabsCardContainerSims.style.display = 'flex'
//     } else {
//         tabsCardContainerSims.style.display = 'none'
//     }
// }
// function showCardStarWars() {
//     if (displayButton === true) {
//         tabsCardContainerStarWars.style.display = 'flex'
//     } else {
//         tabsCardContainerStarWars.style.display = 'none'
//     }
// }
// function showCardF1() {
//     if (displayButton === true) {
//         tabsCardContainerF1.style.display = 'flex'
//     } else {
//         tabsCardContainerF1.style.display = 'none'
//     }
// }
// function showCardBattlefield() {
//     if (displayButton === true) {
//         tabsCardContainerBattlefield.style.display = 'flex'
//     } else {
//         tabsCardContainerBattlefield.style.display = 'none'
//     }
// }
// function showCardNeedForSpeed() {
//     if (displayButton === true) {
//         tabsCardContainerNeedForSpeed.style.display = 'flex'
//     } else {
//         tabsCardContainerNeedForSpeed.style.display = 'none'
//     }
// }


// buttonEA.addEventListener('click', function showCardEA() {
//     if (displayButton === true) {
//         tabsCardContainer.style.display = 'flex'
//         displayButton = false
//     } else {
//         tabsCardContainer.style.display = 'none'
//         displayButton = true
//     }
// })
