const section = document.getElementById("container");
let display = 0;

function showDiv(){
  if(display == 1){
    section.style.display = 'flex';
    display = 0;
  }else{
    section.style.display = 'none';
    display = 1;
  }
}