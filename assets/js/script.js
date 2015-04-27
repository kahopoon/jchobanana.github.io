$(document).ready(function() {

}

$("#sidebar-button").click(function() {
   if ($('.sidebar-container').hasClass('sidebar-active')) {
       $('body').removeClass('no-scroll');
       $('#sidebar-button').removeClass('button-active');
       $('.page-wrapper').removeClass('wrapper-active');
  } else {
       $('.sidebar-container').addClass('sidebar-active');
       $('#sidebar-button').addClass('button-active');
       $('.page-wrapper').addClass('wrapper-active');
       setTimeout(function() {
       $('body').addClass('no-scroll');
     }, 300);  
  }
});


$(".page-wrapper").click(function() {
   if ($('.sidebar-container').hasClass('sidebar-active')) {
       $('body').removeClass('no-scroll');
       $('#sidebar-button').removeClass('button-active');
       $('.page-wrapper').removeClass('wrapper-active');
  }
});

});