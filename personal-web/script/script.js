
$(document).ready(function(){


//   메뉴 원 슬라이드

function TopBar__init(){
  var $menuItemLine = $('.menu-circle');
  
  $('.top-bar .top-menu .menu ul li').mouseenter(function(){
      var $li = $(this);
      
      var left = $li.position().left;

      
      $menuItemLine.css({
          left:left + 50 + 'px',
      });
  });

  
  $('.top-bar .top-menu .menu ul li').eq(0).mouseenter();

}



TopBar__init();


// 풀페이지
  
    $("#fullpage").fullpage({
      
      navigation: true ,
      navigationPosition: 'right' ,
      
      navigationTooltips: [        
        "Logo",
        "Brand Concept",
        "Logo Design",
        'Color Typo',       
      ],

      
      loopHorizontal: false,

      controlArrows: false,
      slidesNavigation: true,
      slidesNavPosition: 'top',
      keyboardScrolling: true,
      
//3페이지 이동시 스크롤 애니메이션
      afterLoad : function(origin, destination, direction){
        var leavingSection = this;
  
        
        if(destination.index == 1){
          $("#fullpage .concept .concept-inner .concept-img").addClass("active");
          $("#fullpage .concept .concept-inner .text-box").addClass("active");
        } else {
          $("#fullpage .concept .concept-inner .concept-img").removeClass("active");
          $("#fullpage .concept .concept-inner .text-box").removeClass("active");        
        }

        if(destination.index == 2){
          $("#fullpage .logo-design .logo-inner .slide-box").addClass("active");
          $("#fullpage .logo-design .logo-inner .text-box").addClass("active");
        } else {
          $("#fullpage .logo-design .logo-inner .slide-box").removeClass("active");
          $("#fullpage .logo-design .logo-inner .text-box").removeClass("active");        
        }
  
        
      }




    });

    // 페이드인 페이드아웃

    function slider() {
      var num = 0;
//        var result;
      setInterval(function () {
//            result = num * -1200;
//            num++;
//            console.log(num);
//            console.log(result);
          if (num == 6) {
              num = 0;
          }
          $('.slider p').hide();
          $('.slider p').eq(-num).stop().fadeOut('linear');
          $('.slider p').eq(num).stop().fadeIn('linear');
          console.log(num);
          num++;
          
//            $(".slider").stop().animate({
//               left : result + 'px'
//            });
      },2500);
  }
  slider();

    
});
