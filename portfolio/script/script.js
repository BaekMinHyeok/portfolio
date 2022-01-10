
$(document).ready(function(){


//   메뉴 원 슬라이드

function TopBar__init(){
  var $menuItemLine = $('.menu-circle');
  
  $('.top-bar .top-menu .menu ul li').mouseenter(function(){
      var $li = $(this);
      
      var left = $li.position().left;

      
      $menuItemLine.css({
          left:left + 58 + 'px',
      });
  });

  
  // $('.top-bar .top-menu .menu ul li').eq(0).mouseenter();

}

TopBar__init();

  $('.top-bar .top-menu .menu ul li').click(function (){
   $('.menu-circle').css("left","58px")
  });


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
      
//Branding 페이지 이동시 스크롤 애니메이션
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
  //About 페이지 이동시 스크롤 애니메이션

  if(destination.index == 0){
    $("#fullpage .about .about-box").addClass("active");
    $("#fullpage .about .profile-box").addClass("active");
  } else {
    $("#fullpage .about .about-box").removeClass("active");
    $("#fullpage .about .profile-box").removeClass("active");        
  }

  //Mind Map 페이지 이동시 스크롤 애니메이션 
  
  if(destination.index == 1){
    $("#fullpage .mindmap .map-box .character .line01").addClass("active");
    $("#fullpage .mindmap .map-box .character .text-sub").addClass("active");
    $("#fullpage .mindmap .map-box .experience .top").addClass("active");
    $("#fullpage .mindmap .map-box .experience .right").addClass("active");
    $("#fullpage .mindmap .map-box .goal .text-sub").addClass("active");
    $("#fullpage .mindmap .map-box .goal .line01").addClass("active");
    $("#fullpage .mindmap .map-box .other .left").addClass("active");
    $("#fullpage .mindmap .map-box .other .bottom").addClass("active");
  } else {
    $("#fullpage .mindmap .map-box .character .line01").removeClass("active");
    $("#fullpage .mindmap .map-box .character .text-sub").removeClass("active");
    $("#fullpage .mindmap .map-box .experience .top").removeClass("active");
    $("#fullpage .mindmap .map-box .experience .right").removeClass("active");
    $("#fullpage .mindmap .map-box .goal .text-sub").removeClass("active");
    $("#fullpage .mindmap .map-box .goal .line01").removeClass("active");
    $("#fullpage .mindmap .map-box .other .left").removeClass("active");
    $("#fullpage .mindmap .map-box .other .bottom").removeClass("active");        
  }

//Skills 페이지 이동시 스크롤 애니메이션 
if(destination.index == 2){
  $("#fullpage .skills .skills-inner .ps").addClass("active");
  $("#fullpage .skills .skills-inner .ai").addClass("active");
  $("#fullpage .skills .skills-inner .vs").addClass("active");
} else {
  $("#fullpage .skills .skills-inner .ps").removeClass("active");
  $("#fullpage .skills .skills-inner .ai").removeClass("active");
  $("#fullpage .skills .skills-inner .vs").removeClass("active");        
}


//About-Me 페이지 이동시 스크롤 애니메이션
if(destination.index == 3){
  $("#fullpage .about-me .inner .illustration").addClass("active");
  $("#fullpage .about-me .inner .main-text").addClass("active");

} else {
  $("#fullpage .about-me .inner .illustration").removeClass("active");
  $("#fullpage .about-me .inner .main-text").removeClass("active");     
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
          $('.slider p').eq(-num).stop().fadeOut('slow');
          $('.slider p').eq(num).stop().fadeIn('slow');
          console.log(num);
          num++;
          
//            $(".slider").stop().animate({
//               left : result + 'px'
//            });
      },3000);
  }
  slider();

  // about-me 일러스트이미지 후버
  $('.about-me .inner .illustration .text-box').mouseover(function(){
    $('.about-me .inner .illustration .img').css({
     "transform": "scale(1)",
     "transition": "1.5s",
    });

  });

  $('.about-me .inner .illustration .text-box').mouseout(function(){
    $('.about-me .inner .illustration .img').css({
     "transform": "scale(0.9)",
     "transition": "1.5s",
    });

  });

  
 

    


});
