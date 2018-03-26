$(window).scroll(function(){
    if($(document).scrollTop() >80){
      $('header').addClass('scrolled');

    }
    else{
        $('header').removeClass('scrolled');
    }

});


// 
// $(document).ready(function(){
//     setBindings();
//
// });
//
// function setBindings(){
//     $(".menu .dates a").click(function(e){
//         e.preventDefault();
//         var sectionID = e.currentTarget.id + "Section";
//
//       $("html, body").animate({
//           scrollTop: $("#" + sectionID).offset()
//           .top
//       }, 1000);
//       return false;
//
//   });
// }
