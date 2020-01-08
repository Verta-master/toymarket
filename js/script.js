//Mobile menu
$('.menu__btn').click(function() {
  $('.menu').toggleClass('menu--opened');
  $('.menu__list').slideToggle();
});

$('.menu__drop-btn').click(function() {
  $(this).toggleClass('menu__drop-btn--up');
  $(this).next().slideToggle();
});

if (window.innerWidth < 1022) {
  $('.footer__title--btn').click(function() {
    $(this).next().slideToggle();
  })
}

//Scroll to top
$(window).scroll(function(){
  if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) >= 100) {
    $(".btn-top").fadeIn();
  } else {
    $(".btn-top").fadeOut();
  };
});

$(".btn-top").click(function () {
  $("body,html").animate({
    scrollTop: 0
  }, 400);
  return false;
});
