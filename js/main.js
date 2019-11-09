var $container = $('.tab-container');

var makeTabs = function(){

  $container
  	.children().hide()
  	.eq(0).show(); 
  
  makeTabNav();

}




// provide mechanism for history/back and hashes

