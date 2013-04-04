var setWidth = function(){
  width = $('.hero').width();
  if(width < 1000){
    $('.hero').css('height', width * 0.5);
  }
  else{
    $('.hero').css('height', width * 0.35);
  };
};

$(document).ready(function(){
  setWidth()
  $(window).resize( setWidth )
})
