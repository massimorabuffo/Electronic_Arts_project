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
  hamburger.style.width =  '0'
  document.body.style.backgroundColor = 'white';
}

logoHamburger.addEventListener('click', closeSidebarTablet)