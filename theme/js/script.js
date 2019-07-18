var GUI = {};
GUI.win = $(window);
GUI._initMainMenu = function(){
  if($(".menu-btn").length==0) return;
  $('.menu-btn').click(function(){
    // $('.main-nav').toggleClass('active');
    $('.main-nav').slideToggle();
    $('.menu-btn i').toggleClass('fa-times');
    $('.menu-btn i').toggleClass('fa-bars');
    $('.main-nav li>ul').removeClass('active');
    $('.main-nav li i').removeClass('fa-caret-up');
    $('.cate ul').removeClass('active');
  });

      $('.main-nav ul li ul').each(function(){
    $(this).parent('li').prepend('<i class="fa fa-caret-down" aria-hidden="true"></i>');
  });
   $('.main-nav>ul>li>i').click(function(){
    $(this).parent('li').children('ul').toggleClass('active');
    $(this).toggleClass('fa-caret-up');
  });
}
GUI._initHomeSlide = function(){
  if($(".h-slider").length==0) return;
  $('.h-slider').slick({
      arrows: false,
      slidestoshow:1,
      dots: false,
      //   autoplay: true,
      // autoplaySpeed: 3000,
  });
}
GUI._initAvatar = function(){
  if($(".talk").length==0) return;
  $('.talk').slick({
      arrows: false,
      slidestoshow:1,
      dots: false,
      //   autoplay: true,
      // autoplaySpeed: 3000,
  });
}
GUI._initUpdatPro = function(){
  $('.plus').click(function(){
      var parent = $(this).parent();
      var input = parent.find('.input-number');
      var val = parseInt(input.val());
      val +=1;
      input.val(val);
  })

  $('.minus').click(function(){
      var parent = $(this).parent();
      var input = parent.find('.input-number');
      var val = parseInt(input.val());
      if (val>1){
          val -=1;

      }
      else{

          val=1;
      }
      input.val(val);
  });
  
  
  $.fn.numberOnly =
  function()
  {
      return this.each(function()
      {
          $(this).keydown(function(e)
          {
              var key = e.charCode || e.keyCode || 0;
              return (
                  key == 8 || 
                  key == 9 ||
                  key == 13 ||
                  key == 46 ||
                  // key == 110 ||
                  // key == 190 ||
                  (key >= 35 && key <= 40) ||
                  (key >= 48 && key <= 57) ||
                  (key >= 96 && key <= 105));
          });
      });
  };
  $(".input-number").numberOnly();
}

GUI._initDoiTac = function(){
  if($(".doitac").length==0) return;
  $('.doitac').slick({
    slidesToShow: 5,
    slidesToScroll: 3,
    infinite: true,
    dots:false,
    arrows:false,
      //   autoplay: true,
      // autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
}


GUI._initSearch = function(){
  $('.search button').click(function(){
    // $('.ct').toggleClass('active');
    $('.search .ct').slideToggle();

  });
  $(function(){
        var win = $(window);
        var menu = $(".search");
        win.click(function(event) {
            if(menu.has(event.target).length == 0 && !menu.is(event.target)){
                menu.find('.ct').slideUp(200);
            }
        });
  });
}

GUI._initFixed = function(){
    //Lấy chiều cao của thah menu
  var $navHeight=$("header").height();
  //Sự kiến scroll chạy khi người dùng cuộn trang
  $(window).scroll(function () {
       //Lấy vị trí của thanh cuộn
       var top = $(window).scrollTop();
       //Kiêm tra nếu như kếu xuống quá menu
       if (top > $navHeight) {
           //Thêm class vào body
           $("header").addClass('fixed');
       } else {
           //Xóa class khỏi body
         $("header").removeClass('fixed');
       }
  });
}
GUI._initSliderProduct = function(){
  if($(".slider-for").length==0) return;
  if($(".slider-nav").length==0) return;
   $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    infinite:true,
     arrows: false,
    // centerMode: true,
    focusOnSelect: true,
    vertical: true,
  responsive: [
      {
          breakpoint: 991,
          settings: {
              vertical: false,
          }
      },
      ],
  });
}
GUI._initWow = function(){
  new WOW().init();
}
GUI._initRange = function(){
  $( function() {
    if(typeof $.fn.slider !="udefined"){
        if($( ".slider-range" ).length==0) return;
        var min = $( ".slider-range" ).data("min");
        var max = $( ".slider-range" ).data("max");
        var step = $( ".slider-range" ).data("step");
        $( ".slider-range" ).slider({
          range: true,
          min: min,
          max: max,
          step: step,
          values: [ min,max ],
          slide: function( event, ui ) {
            $( ".amount" ).val( formatNumber(ui.values[ 0 ]) );
            $( ".amount1" ).val(formatNumber( ui.values[ 1 ]) );
          }
        });
        $( ".amount" ).val($( ".slider-range" ).slider( "values", 0 ));
        $( ".amount1" ).val(  $( ".slider-range" ).slider( "values", 1 ) );
    }
  function formatNumber(s) {
    s= s+"";
    var parts = s.split(/,/)
      , spaced = parts[0]
           .split('').reverse().join('') // Reverse the string.
           .match(/\d{1,3}/g).join(',') // Join groups of 3 digits with spaces.
           .split('').reverse().join(''); // Reverse it back.
    return spaced + (parts[1] ? ','+parts[1] : ''); // Add the fractional part.
  }
  } );
}

GUI.init = function(){
  GUI._initHomeSlide();
  GUI._initMainMenu();
  GUI._initFixed();
  GUI._initSearch();
  GUI._initAvatar();
  GUI._initDoiTac();
  GUI._initUpdatPro();
  GUI._initRange();
  GUI._initSliderProduct();

}
$(function() {
  GUI.init();
});
