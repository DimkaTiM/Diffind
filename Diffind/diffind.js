window.onscroll = function showHeader() {
	var header = document.querySelector('.hat');
	if(window.pageYOffset > 100){
		header.classList.add('header_fixed');
	}else{
		header.classList.remove('header_fixed');
	}
}

// кнопка вверх
$(function() {
      $(window).scroll(function() {
        if($(this).scrollTop() > 100) {
          $('.scrollup').fadeIn();
        } else {
          $('.scrollup').fadeOut();
        }
      });

      $('.scrollup').click(function() {
        $('body,html').animate({scrollTop:1}, 800);
      });
    });
// кнопка вверх ^

