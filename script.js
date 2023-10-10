const section = document.getElementById("container");
const sidebar = document.getElementById("sidebar");
const logoSidebar = document.getElementById("logo_sidebar")
const logoNav = document.getElementById("logo_nav")
let display = 1;

function showDiv(){
  if(display == 1){
    section.style.display = 'flex';
    display = 0;
  }else{
    section.style.display = 'none';
    display = 1;
  }
}

function showSidebar(){
  if(display == 1){
    sidebar.style.display = 'block';
    display = 0;
  }else{
    sidebar.style.display = 'none';
    display = 1;
  }
}

function closeSidebar(){
  sidebar.style.display = 'none';
}

logoSidebar.addEventListener("click", closeSidebar);

function closeNav(){
  section.style.display = 'none';
}

logoNav.addEventListener("click", closeNav)