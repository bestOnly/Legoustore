$(function(){


   //注册

   //选项卡
   $('.register-steps ul li').click(function(){
    $('.register').eq($(this).index()).addClass('current').siblings().removeClass('current');
    $(this).addClass('active').siblings().removeClass('active');
    $(this).find('i').addClass('current').siblings().closest('li').siblings().find('i').removeClass('current');

 })

//假装已阅读，已填写完，注册成功
$('#yes').click(function(){
   $('.register').eq(1).addClass('current').siblings().removeClass('current');
 //   $('.register-steps ul li').addClass('active').siblings().removeClass('active');
 })
$('#submit').click(function(){
 $('.register').eq(2).addClass('current').siblings().removeClass('current');
})



})