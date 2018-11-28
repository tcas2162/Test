$(document).ready(function(e) {
     $('nav > ul').clone().appendTo('.side_bar');
      $('.con').clone().appendTo('.side_bar');
     $('#nav-icon').click(function(e){
         $('body').toggleClass('open');
     });

	 
        
// Sticky Header
	$(window).scroll(function(e){
				
		if($(window).scrollTop() > 50)
		{
			$('body').addClass('sticky');						
			}
			else{
				$('body').removeClass('sticky');	
				}
 		})        
  });