
$(function(){

      //全选
      $('#allSelect').change(function(){
           let status = $(this).prop('checked');
           $('.singleSelect').prop('checked', status);
           $('.storeSelect').prop('checked',status);
           //调用合计函数
          allCount();
      })
      //店铺商品全选
      $('.storeSelect').change(function(){
        let status = $(this).prop('checked');
        $(this).closest('.storeName').siblings('.goodsBox').find('.singleSelect').prop('checked', status);
        //控制全选框
        $('#allSelect').prop('checked',status);

         //点击增加背景
         if($(this).prop('checked')){
          $(this).closest('.storeName').siblings('.goodsBox').css('background','#eee')
      }else{
          $(this).closest('.storeName').siblings('.goodsBox').css('background','#fff')
      }
        //调用合计函数
        allCount();
   })
 
      //反选
      var flag = true;
      $('.singleSelect').click(function(){
        //   let len =  $('.singleSelect').length;
        //   let sel = $('.singleSelect:checked').length;
        //   if(len == sel){
        //     $('#allSelect').prop('checked',true);
        //   }else{
        //     $('#allSelect').prop('checked', false);
        //   }
       
        //点击增加背景
        if($(this).prop('checked')){
            $(this).parents('.goodsBox').css('background','#eee')
        }else{
            $(this).parents('.goodsBox').css('background','#fff')
        }



          let flag = true;
          $('.singleSelect').each(function(){
              //获取每个check状态
              let status = $(this).prop('checked');
              if(!status){
                  flag = false;
                  return false;
              }
          })

          if(flag ){
            //全选
            $('#allSelect').prop('checked',true);
            //店铺选择
            $(this).parents('.goodsBox').siblings('.storeName').find('.storeSelect').prop('checked',true);
          }else{
            $('#allSelect').prop('checked',false);
            $(this).parents('.goodsBox').siblings('.storeName').find('.storeSelect').prop('checked',false);
         
          }

          //调用合计函数
          allCount();

      })


      // $('.storeSelect').click(function(){
      //     let len =  $('.storeSelect').length;
      //     let sel = $('.storeSelect:checked').length;
      //     console.log(len+ " " +sel);
      //     if(len == sel){
      //       $('#allSelect').prop('checked',true);
      //     }else{
      //       $('#allSelect').prop('checked', false);
      //     }
      // })



      //----------------------------------------
      // $('.singleSelect').click(function(){
      //        var len = $('.singleSelect').length;r
      //       //  console.log(len);
      //        var sel = $('.singleSelect:checked').length;
      //       //  console.log(sel);
      //        if(len == sel ){
      //           $('#storeSelect').prop('checked',true);
      //        }else{
      //           $('#storeSelect').prop('checked',false);
      //        }
      // })


      //增加减少商品
      $('.add').click(function(){
          var num =  $(this).siblings('.num').val();
          num++;
          $(this).siblings('.num').val(num);
          countPrice(this,num);
          //调用合计函数
          allCount();
      })

      $('.cut').click(function(){
        var num =  $(this).siblings('.num').val();
        if(num >1){
            num--;
           $(this).css('cursor','pointer');
        }else{
           $(this).css('cursor','not-allowed');
        }
        $(this).siblings('.num').val(num);

        countPrice(this,num);

        //调用合计函数
        allCount();
    })


      function countPrice(obj,num){
        //获取单价
        var price = $(obj).closest('.iptNum').siblings('.goodsPrice').find('p i').text();
        //获取数量
        //num
        //计算小计
        $(obj).closest('.iptNum').siblings('.AllPrice').find('p i').text((price * num).toFixed(2));
        
      }



    function allCount(){
      //总数量 
      var allNum = 0 ;
      //总价格
      var allPrice = 0; 
       
       $('.singleSelect:checked').each(function(){
           //获取每个输入框中的数字
           var num = parseInt($(this).closest('li').siblings('.iptNum').find('.num').val());
           allNum+=num ;

            //获取总价格
            var aPrice = parseFloat($(this).closest('li').siblings('.AllPrice').find('.Allmoney').html());
            allPrice+=aPrice ;
            // allPrice =allPrice.toFixed(2);

     })
       //将合计的价格输入相应的元素
       $('.selected').html(allNum);
       $('.allCount').html(allPrice);
   
    }


  //删除当前商品
  $('.delete').click(function(){
     $(this).parents('ul').remove();
     allCount();

  })



})