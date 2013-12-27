$( document ).ready(function() {
  $('aside > ul > li > a').click(function() {
  $('aside li').removeClass('active');
  $(this).closest('li').addClass('active');	

  var checkElement = $(this).next();
  if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
    $(this).closest('li').removeClass('active');
    checkElement.slideUp();
  } else {
    $('aside ul ul:visible').slideUp('normal');
    checkElement.slideDown();
  }
});
});