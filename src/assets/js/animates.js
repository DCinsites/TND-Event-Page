$(function() {
    $('.pop').on('click', function() {
        $('.imagepreview').attr('src', $(this).find('img').attr('src'));
        $('#imagemodal').modal('show');   
    });		
});

setTimeout(function(){ jQuery("#cspio-content").show().addClass('animated fadeIn'); }, 250);
        
        $('#cspio-content').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
          function(){
            var width = $('#cspio-field-wrapper').width();
            if(width < 480 && width != 0){
              resize();
            }
          }
        );