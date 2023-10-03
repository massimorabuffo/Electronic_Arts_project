// const linguaButton = document.getElementById("linguaButton");
// const linguaOptions = document.getElementById("linguaOptions");
// const arrow = document.querySelector(".arrow")
// let linguaOptionsVisible = false;
// let rotation = 0;

// linguaButton.addEventListener("click", () => {
//     rotation += 180;
//     arrow.style.transform = `rotate(${rotation}deg)`;

//     if (linguaOptionsVisible) {
//         linguaOptions.style.display = "none"; 
//         linguaOptionsVisible = false;
//     } else {
//         linguaOptions.style.display = "block"; 
//         linguaOptionsVisible = true;
//     }
// });

// const regioneButton = document.getElementById("regioneButton");
// const regioneOption = document.getElementById("regioneOption");
// const regioneArrow = document.querySelector(".regioneArrow")
// let regioneOpsionVisible = false;

// regioneButton.addEventListener("click", () =>{
//     rotation += 180;
//     regioneArrow.style.transform = `rotate(${rotation}deg)`;

//     if(regioneOpsionVisible){
//         regioneOption.style.display = "none";
//         regioneOpsionVisible = false;
//     } else{
//         regioneOption.style.display = "block";
//         regioneOpsionVisible = true;
//     }
// });





// Funzione per gestire il comportamento di apertura/chiusura dei pannelli
function togglePanel(button, content, arrow) {
    const isVisible = content.style.display === "block";
    
    // Chiudi tutti i pannelli
    document.querySelectorAll(".toggle-content").forEach((panel) => {
        panel.style.display = "none";
    });

    // Ripristina la rotazione dell'indicatore di freccia
    document.querySelectorAll(".toggle-button .arrow").forEach((arrow) => {
        arrow.style.transform = "rotate(0deg)";
    });

    // Inverti la rotazione dell'indicatore di freccia
    arrow.style.transform = isVisible ? "rotate(0deg)" : "rotate(180deg)";
    
    // Mostra o nascondi il pannello
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
