const avatar = document.getElementById("avatar_section");
const question = document.getElementById("question_section")
const sidebar = document.getElementById("sidebar");
const logoSidebar = document.getElementById("logo_sidebar")
const logoNav = document.getElementById("logo_nav")
const questionNav = document.getElementById("question_nav")
let display = 1;

function showDivAvatar(){
  if(display == 1){
    avatar.style.display = 'flex';
    display = 0;
  }else{
    avatar.style.display = 'none';
    display = 1;
  }
}

function showDivQuestion(){
  if(display == 1){
    question.style.display = 'flex';
    display = 0;
  }else{
    question.style.display = 'none';
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
  avatar.style.display = 'none';
}

logoNav.addEventListener("click", closeNav);

function closeQuestion(){
  question.style.display= 'none'
}

questionNav.addEventListener("click", closeQuestion);