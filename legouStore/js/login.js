$(function(){


   //点击二维码显示手机登录
   $('.code').click(function(){
       $('.login-box').fadeOut();
       $('.scan-code').fadeIn();
   })
   $('.scan-code').click(function(){
        $('.login-box').fadeIn();
        $('.scan-code').fadeOut();
   })

   //点击眼睛切换
   let flag = true;
   $('.eye').click(function(){
       if(flag){
           $('#pwd').prop('type','text');
           $(this).css({'backgroundImage':'url(./img/open.png)'})
           flag=false;
       }else{
           $('#pwd').prop('type','password');
           $(this).css({'backgroundImage':'url(./img/close.png)'})
           flag=true;
        }
     
   })

    //点击删除键清除文字
    $('.del').click(function(){
        var alt = $('#user').attr('placeholder');
        if($('#user').val() != " "){
            $('#user').val(alt) ;
        }
    })

    //点击去掉所有文字
    $('#user').focus(function(){
        $('#user').val("") ;
    })

    //二维码指导
    $('.scan-code .code').mouseover(function(){
        $(this).stop().animate({left : 40 });
        $('.code-help').stop().fadeIn();
    })
    $('.scan-code .code').mouseout(function(){
        $(this).stop().animate({left : 110 });
        $('.code-help').stop().fadeOut();
    })
   
  //切换手机二维码登录
  $('.select-btn a').mouseover(function(){
    $('.login-box').eq($(this).index()).addClass('current').siblings().removeClass('current');
    $(this).addClass('btm').removeClass('btm');
  })
  //切换手机二维码登录
//   $('.select-btn a:first-child').click(function(){
//     $('.login-box ').addClass('current');
//     $('.codeLogin-box ').removeClass('current');
//     $('select-btn a').addClass('btm').siblings().removeClass('btm');
//   })
//   $('.select-btn a:last-child').click(function(){
//     $('.login-box ').removeClass('current');
//     $('.codeLogin-box').addClass('current');
//   })

   //获取验证码
   var downNum = 60;
   var timeId = null;
   var code = document.querySelector('#validate');
   code.onclick = function(){
      timeId = setInterval(function(){
          downNum --;
          code.innerHTML = downNum ;
          if(downNum ==50){
              alert('您的验证码为: 347934');
            // alert();
            // window.confirm("您的验证码为: 347934");  
            
            document.querySelector('#ipt-code').value = '347934' ;
            code.innerHTML = '获取验证码' ;
            clearInterval(timeId);
          }else if(downNum ==0 ){
              clearInterval(timeId);
            code.innerHTML = '获取验证码' ;

          }
      },1000)
   }

//   document.querySelector('.qq').onclick = function(){
//          window.location.href('https://im.qq.com/');
//    }




})