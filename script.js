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
// const tabsCardContainerEA = document.getElementsById('EA123')
// const tabsCardContainerEAFC = document.getElementsById('EA-Sports')
// const tabsCardContainerApex = document.getElementsById('apex')
// const tabsCardContainerSims = document.getElementsById('thesims')
// const tabsCardContainerStarWars = document.getElementsById('StarWars')
// const tabsCardContainerF1 = document.getElementsById('F1')
// const tabsCardContainerBattlefield = document.getElementsById('Battlefield')
// const tabsCardContainerNeedForSpeed = document.getElementsById('NeedForSpeed')

// function showCardEA(){
//     tabsCardContainerEA.style.display = 'flex'
// }


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







// function mostraCard(id) {
//     chiudiCard();

//     let cards = document.querySelectorAll('.tabsCardContainer')
//     for (let i = 0; i < cards.length; i++) {
//         cards[i].style.display = 'none';
//     }
    
//     const cardDaAprire = cards.filter((el)=>{
//         console.log(el)
//     })
    
//     let cardDaMostrare = document.getElementById(id);
//     if (cardDaMostrare) {
//         cardDaMostrare.style.display = 'flex';
//     }

// }

// function chiudiCard() {
//     let cards = document.querySelectorAll('.tabsCardContainer')
//     for (let i = 0; i < cards.length; i++) {
//         cards[i].style.display = 'none';
//     }
// }

