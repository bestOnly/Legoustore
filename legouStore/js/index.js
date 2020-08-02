$(function(){
    
 //轮播图
//   var run_box = document.querySelector('#run');
//   var lis = document.querySelectorAll('#run li');
//   var run = document.querySelector('.banner');
//   //克隆第一个儿子
//   run_box.appendChild(lis[0].cloneNode(true));
//   // console.log(lis);
//   var index = 0;
//   //动态获取总宽度
//   run_box.style.width = lis[0].offsetWidth*lis.length +"px";
//   var timeId = null ;

  function startPlay(){
    timeId = setInterval(function(){
     index++;
    //  console.log(index);
     //当到达最后一个，立即调整为第一张
     if(index == lis.length){
     index =0;
     run_box.style.left=0;
 }
     startMove(run_box,{left:-(lis[0].offsetWidth*index)},300,'easeOut');
},2000);
}

//自动轮播
// startPlay();

//鼠标移入暂停
// run.onmouseover = function(){
//     clearInterval(timeId);
// }
// run.onmouseout = function(){
//     startPlay();
// }

//滑动显示回顶部
   $(window).scroll(function(){
       var sTop = $(document).scrollTop();
    //    console.log(sTop);
       if( sTop > 2500){
           $('#toTop').slideDown('slow');
       }else{
        $('#toTop').slideUp('slow');
       }
   })

//滑动显示电梯导航
 var nav = document.querySelector('.logo-fix');
 window.onscroll = function(event){
       var top = document.documentElement.scrollTop;
       if(top > 1600){
           nav.style.display = 'block';
       }else{
          nav.style.display = 'none';
       }
 }

//滑动显示电梯导航
//  $(window).scroll(function(){
//       var top = $(document).scrollTop();
//       if(top>1600){
//           $('.logo-fix').fadeIn('slow');
//       }else{
//         $('.logo-fix').fadeOut();
//       }
//  })

 

 //触摸导航切换颜色
  let bkgc = ['rgb(205, 156, 250)','rgb(30, 247, 214)','skyblue','pink','rgb(236, 110, 236)'];
  $('.logo-fix li:not(:last-child)').hover(function(){
    $(this).css({
        width : '80px',
        backgroundColor : bkgc[ $(this).index()],
        backgroundPositionX : '-40px'
    })
    }, function(){
        $(this).css({
            width : '40px',
            backgroundColor : '',
            backgroundPositionX : '0'
        })
})

//点击电梯导航显示相应页面
$('.logo-fix li:not(:last-child)').click(function(){
    //获取每个内容区离顶部高度
    var top =  $('.clothes-items').eq($(this).index()).offset().top + -100;
    $('html,body').animate({ scrollTop : top});
    $(this).css('border-color', bkgc[ $(this).index()]).siblings().css('border-color','');
    
})

//滑动页面显示相应的位置
$(window).scroll(function(){
    $('.clothes-items').each(function(i,e){
        if( $(document).scrollTop() > $(e).offset().top){
            $('.logo-fix li').eq(i).css('background-color',bkgc[i]).siblings().css('background-color','');
        }
    })
})



 //点击回顶部
//    var toTop = document.querySelector('#toTop');
//    toTop.onclick = function(){
//         var timeId=null;
//         let top = document.documentElement.scrollTop;
//         console.log(top);
//         timeId =  setInterval(function(){
//                 // if(!top == 0){
//                     console.log(top);
//                     document.documentElement.scrollTop = top-50;
//                     document.body.scrollTop = top-50;
//                 // }else{
//                     // clearInterval(timeId);
//                 // }
//         },30);
//         }
      //点击回顶部
      var top = $(document).scrollTop();
      $('#toTop').click(function(){
          $('html').animate({scrollTop : 0},500)
      })


      //滑动显示二维码
      $(window).scroll(function(){
          var top = $(document).scrollTop();
          if(top>1100){
              $('.downlode-pic').fadeIn('slow');
          }else{
              $('.downlode-pic').fadeOut();

        }
      })

      //二维码动效
      $('.downlode-pic').mouseover(function(){
          $(this).stop().animate({right: 20});
      })
      $('.downlode-pic').mouseout(function(){
        $(this).stop().animate({
              right: -60,
              top : 300
        },500);
        
    
    })

      //动态显示时间
      function nowTime(){
          var date = new Date();
          var hour = date.getHours();
          var minute = date.getMinutes();
          var second = date.getSeconds();
          var nowhour = document.querySelector('.hour');
          var nowminute = document.querySelector('.minute');
          var nowsecond = document.querySelector('.second');
          hour=  add0(hour);
          minute = add0(minute);
          second = add0(second);
          nowhour.innerHTML = hour;
          nowminute.innerHTML = minute;
          nowsecond.innerHTML  = second;
      }
      // setInterval(nowTime,1000);
      function add0(str){
           if(str < 10)  str ="0"+ str ;
           return str;
      }

      //倒计时
      function toEnd(){
          var now = new Date();
          var end = new Date('2020-08-01');
          var lastTime = end - now ;
          // console.log(end.getTime());
          // console.log(now.getTime());
          // console.log(lastTime);
          // var d = Math.floor(lastTime/24/60/60/1000);
          var h = Math.floor(lastTime/1000/60/60%24);
          var m = Math.floor(lastTime/1000/60%60);
          var s = Math.floor(lastTime/1000%60);
          var nowhour = document.querySelector('.hour');
          var nowminute = document.querySelector('.minute');
          var nowsecond = document.querySelector('.second');
          h= add0(h);
          m= add0(m);
          s= add0(s);
          nowhour.innerHTML = h;
          nowminute.innerHTML = m;
          nowsecond.innerHTML  = s;
      }
      setInterval(toEnd,1000);

      //(小米音箱)点击右键图片左移
      var rightBtn = document.querySelector('.arrow-right');
      var leftBtn = document.querySelector('.arrow-left');
      var eachGoods = document.querySelector('.eachGoods');
       rightBtn.onclick = function(){
              startMove(eachGoods,{left:-975},400,'easeOut');
       }
       leftBtn.onclick = function(){
              startMove(eachGoods,{left: 0},400,'easeOut');
       }
  

       //选项卡js
    //    let lis = document.querySelectorAll('.clothes-top .choose li');
    //    let alist = document.querySelectorAll('.choose li a');
    //    let tabs = document.querySelectorAll('.tabList');
//        for(let i = 0 ; i<lis.length;i++){
//             lis[i].onmouseover = function(){
//                 // alert(lis[i]);
//                 for(let j = 0 ; j<lis.length;j++){
//                     // lis[j].className = ' ';
//                     tabs[j].classList.remove('current');
//                     alist[j].className =" " ;
//                 }
//                tabs[i].classList.add('current');
//                alist[i].className = 'active';
//             }
//        }
// })
      //选项卡jq
     $('.clothes-top .choose li').mouseover(function(){
            $('.tabList').eq($(this).index()).addClass('current').siblings().removeClass('current');
            $(this).addClass('active').siblings().removeClass('active');
            // $(this).find('a').css('color','#ffbd0d');
        })

//轮播图
     $('.ck-slide , .middle-box').ckSlide({
        autoPlay: true
    });

//   第二种
$("#bannerInner").tyslide({
        boxh:300,//盒子的高度
        w:455,//盒子的宽度
        h:300,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:30,//控制按钮宽度
        controlsH:10,//控制按钮高度
        radius:1,//控制按钮圆角度数
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
        isShowNum:false //是否显示数字
});


    //顶部固定搜索框
    $(window).scroll(function(){
        var sTop = $(document).scrollTop();
        if(sTop > 150){
            $('#fixHeadeLine').slideDown();
            $('.search').appendTo('#fixHeadeLine .w');
        }else{
            $('#fixHeadeLine').slideUp();
            $('.search').appendTo('.nav');
        }
})



    // $('.search-ipt').click(function(){
    //     // $('.search-list').slideToggle()
    // })
    $('.search-list').click(function(){
        window.location.href = 'phone.html';
    })
    //显示下拉框
    // $('.search-ipt').change(function(){
    //    var len= $(this).val().length;
    //    if(len >=3){
    //      $('.search-list').slideDown()
    //    }else{
    //      $('.search-list').slideUp()
    //    }
    // })

    //jq中的input事件，只能此方法
    $('.search-ipt').on('input propertychange', function(){
              var len = $(this).val().length;
              console.log(len);
              if(len >=3){
                     $('.search-list').slideDown()
                   }else if( len == 0){
                     $('.search-list').slideUp()
                   }
              })

 




    




})