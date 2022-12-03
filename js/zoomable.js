function getPics() {} 
const imgs = document.querySelectorAll('.carousel-item img');
const fullPage = document.querySelector('#fullpage');

imgs.forEach(img => {
  img.addEventListener('click', function() {
    fullPage.style.backgroundImage = 'url(' + img.src + ')';
    fullPage.style.display = 'block';
  });
}); 

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
}); 
 
$(".navbar-collapse a").click(function () { 
  $(".navbar-collapse").collapse("hide");
});