$(document).ready(function() {
    "use strict";

    /***************************************************************************/
            /* NAVIGATION  */
    /***************************************************************************/
   
      $('.button-collapse').sideNav();
 
    /**************************************************************************
                 SKILL BAR 
    **************************************************************************/

      $(".determinate").each(function(){
          var width = $(this).text();
          $(this).css("width", width)
            .empty()
            .append('<i class="fa fa-circle"></i>');                
      });
  
    /**************************************************************************
             BLOG POST 
    **************************************************************************/
  
      jQuery(window).on('load', function(){ var $ = jQuery;
        $('.blog').masonry({
          itemSelector: '.blog-post',
          columnWidth: '.blog-post',
          percentPosition: true
        });
    });


    var height = $('.caption').height();
        if($(window).width()){
          $('#featured').css('height', height);   
          $('#featured img').css('height', height);   
        }


    /*************************************************************************
                TOOLTIP
    **************************************************************************/
    $('.tooltipped').tooltip({delay: 50});

    /**************************************************************************
        WOW INIT
    **************************************************************************/

    var wow = new WOW({ mobile: false });
    wow.init();
});