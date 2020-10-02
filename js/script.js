$('.page-scroll').on('click', function (e) {

  var tujuan = $(this).attr('href');

  var elemenTujuan = $(tujuan);

  $('html, body').animate({
    scrollTop: elemenTujuan.offset().top - 70
  }, 2750, 'easeOutBounce');

  e.preventDefault();

});

// paralaxx

$(window).scroll(function () {
  var WindowScroll = $(this).scrollTop();

  $('#jumbotrons img').css({
    'transform': 'translate(0 , ' + WindowScroll + ' % ) '
  });

});

