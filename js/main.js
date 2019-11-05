var $container = $('.tab-container');

var makeTabs = function(){

  $container
  	.children().hide()
  	.eq(0).show(); 
  
  makeTabNav();

}

var makeTabNav = function(){

  // variables for array and text
  var a=[], t;

  // store values in array to create tab nav
  $container.children().each(function(index){
    // title for button
    t = $(this).find('h1').text();
    // location for link
    $(this).attr('id','tab'+t);
    // add values to array wrapped in list and anchor markup
    a.push('<li><a href="#tab'+t+'">'+t+'</a></li>');
  });
  
  // create a string containing all list items
  var l = a.join('');
  // add list items to unordered list serving as tab nav
  $container.prepend('<nav class="tab-nav"><ul>'+l+'</ul></nav>');
  // mark default tab
  $('.tab-nav').find('a').eq(0).addClass('curr');

  // handle clicks
  $('.tab-nav').on('click','a',function(){
    var curr = $(this).attr('href');
    $container.children().not('nav').hide();
    $(this).parents('ul').find('a').removeClass('curr');
    $(curr).show();
    $(this).addClass('curr');
  });

}

makeTabs();

// provide mechanism for history/back and hashes