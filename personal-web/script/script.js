// Full page 임시

// $(document).ready(function(){
  
//     $("#fullpage").fullpage({
      
//       navigation: true ,
//       navigationPosition: 'left' ,
      
//       navigationTooltips: [        
//         "test",
//         "test2",
//         "test3",
//         'test4'        
//       ],
//       loopHorizontal: false,

//       controlArrows: false,
//       slidesNavigation: true,
//       slidesNavPosition: 'top',
//       keyboardScrolling: true,

//     });
// });





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



// 스크롤 효과

$(document).ready(function() {
    $(window).scroll( function(){
        $('.logo-inner .logo-img').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-right':'320px'},1000);
            }
            
        }); 
    });
});


$(document).ready(function() {
    $(window).scroll( function(){
        $('.logo-inner .text-box').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-left':'320px'},1000);
            }
            
        }); 
    });
});