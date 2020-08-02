$(function(){


  //选项卡
   $('.each-step li').click(function(){
       $('.pay-page').eq($(this).index()).addClass('current').siblings().removeClass('current');
  
  })

  $('#submit').click(function(){
    $('.pay-page').eq(1).addClass('current').siblings().removeClass('current');
  })

  $('#pay').click(function(){
    $('.pay-page').eq(2).addClass('current').siblings().removeClass('current');
  })

  
  $('#sub').click(function(){
    window.location.href = ' index.html';
})

})