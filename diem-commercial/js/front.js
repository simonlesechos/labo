(function($)
{

  // Here is the entry point for your front javascript


  /// Transformation des liens de partage réseaux sociaux

	var btnHidden = $('.bs-social-buttons li').filter(function() {
	     return $(this).css('display') == 'none';
	});
	var bssBtnHidden = btnHidden.length;
	var bssbBtnNumber = $('.bs-social-buttons li').length - bssBtnHidden;

	console.log(btnHidden);
	console.log(bssBtnHidden);
	console.log(bssbBtnNumber);



	$('.bs-social-buttons li').css('width',  (100 / bssbBtnNumber) + '%');

////////////////////////////////////////////////////////////////////////////
	  
})(jQuery);