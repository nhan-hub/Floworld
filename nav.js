
function navToggle(){
  var navBar = document.getElementById('overlay');
  var toggleButton = document.getElementsByClassName('toggle-button')[0];
  var html = document.querySelector('html');

  html.classList.toggle("active");
  navBar.classList.toggle("active");
  toggleButton.classList.toggle("active");
}
function trailerToggle(){
  var trailer = document.getElementById('trailer');
  var trailerButton = document.getElementsByClassName('trailer-button')[0];
  var toggleButton = document.getElementsByClassName('toggle-button')[0];

  trailer.classList.toggle("active");
  trailerButton.classList.toggle("active");
}

function stopVideo() {
    var iframe = document.querySelector( 'iframe');
    var iframeSrc = iframe.src;
    iframe.src = iframeSrc;
}
