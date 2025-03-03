
window.onscroll = function(){scrollBegin();};
function scrollBegin(){
  if(document.documentElement.scrollTop > 20){
    document.getElementById('scroll-button').style.display = "block";
  } else {
    document.getElementById(
    'scroll-button').style.display = "none";
  }
}

function scrollButton(){
  let scrollElement = document.documentElement.scrollTop;
  if(scrollElement > 0){
    document.documentElement.scrollTop = scrollElement - 200;
  }
}