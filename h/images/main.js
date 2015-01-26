$(function(){

  // ajax 提交网址
  var postUrl = '//test.minuteschina.com/api_posterInfo.html';
  var type = 1;
  var bless = 1;


  // 显示教程
  var n = 1;
  function teach(i){
    $('.t'+i).hide();
    i++;
    $('.t'+i).show();
  }
  var timer = setInterval(function(){
    if(n<6){
      teach(n);
      n++;
    } else {
      clearInterval(timer);
    }
  },3000);

  $(".t6").click(function(){
    $(".p1").hide(100);
    $(".p2").show(100);
  });

  // 选中祝福
  $(".zhufu li").click(function(){
    $(".zhufu li").hide(100);
    $('.jiantou').show(100);
    $(this).show(100);
    $('.ta').show(100);
    bless = $(this).index()+1;
  });

  $('.jiantou').click(function(){
    $(".zhufu li").show(100);
    $('.ta').hide(100);
    $(this).hide(100);
  });

  // 提交表单
  $('#myform').validationEngine('attach', {
    promptPosition: 'topLeft',
    scroll: false,
    autoHidePrompt: true,
    autoHideDelay:3000,
    onValidationComplete: function(form, status){
      if(status) {
        var from_info = $("#from_info").val();
        var to_info = $("#to_info").val();
        var content = $("#content").val();

        $.post(postUrl, {from_info:from_info,to_info:to_info,content:content,bless:bless,type:type},
          function(data){
            var data = JSON.parse(data);
            if(data.status == 200){
              $('.tijiao').hide(100);
              $('.share').show(100);
              $('.share1').show(100);
            }
        });

      } else {
        console.log(0);
      }
    }
  });


  // 分享给我的好友
  $(".share").click(function(){
    consle.log('分享给我的好友');
  });

});
