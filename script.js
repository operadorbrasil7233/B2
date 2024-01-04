$(function() {
  $("#showNews").click(function(){
    $("#coins").animate({left:"-380px"});
    $("#cryptoNews").animate({left:"0px"});    
  });
  $("#showCoins").click(function(){
    $("#cryptoNews").animate({left:"380px"});
    $("#coins").animate({left:"0px"});    
  });  
  
})