$(window).on('scroll', function (){

    var elem = $('.elem');
    var isAnimate = 'isAnimate';
    
    elem.each(function () {
    
      var elemOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();
  
      if(scrollPos > elemOffset - wh + (wh / 2) ){
        $(this).addClass(isAnimate);
      }
    });
  
  });
  