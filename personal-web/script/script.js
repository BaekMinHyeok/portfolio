// Full page 임시

$(document).ready(function(){
  
    $("#fullpage").fullpage({
      
      navigation: true ,
      navigationPosition: 'right' ,
      
      navigationTooltips: [        
        "Logo",
        "Brand Concept",
        "Logo Design",
        'test4'        
      ],
      loopHorizontal: false,

      controlArrows: false,
      slidesNavigation: true,
      slidesNavPosition: 'top',
      keyboardScrolling: true,
      

      afterLoad : function(origin, destination, direction){
        var leavingSection = this;
  
        //3페이지 이동시 스크롤 애니메이션
        if(destination.index == 2){
          $("#fullpage .logo-design .logo-inner .logo-img").addClass("active");
          $("#fullpage .logo-design .logo-inner .text-box").addClass("active");
        } else {
          $("#fullpage .logo-design .logo-inner .logo-img").removeClass("active");
          $("#fullpage .logo-design .logo-inner .text-box").removeClass("active");        
        }
  
        
      }

    });

    
});




//   메뉴 원 슬라이드

// function TopBar__init(){
//     var $menuItemLine = $('.menu-circle');
    
//     $('.top-bar .top-menu .menu ul li').mouseenter(function(){
//         var $li = $(this);
        
//         var left = $li.position().left;
//         var width = $li.outerWidth();
        
//         $menuItemLine.css({
//             left:left,
//             width:width
//         });
//     });

//     $('.top-bar .top-menu .menu ul li').eq(0).mouseenter();
// }


// TopBar__init();



