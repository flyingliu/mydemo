(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
    };


  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

$(function(){

  var aWin = [];

  var oCon = {
    level:"一等奖",
    minNum:1,
    maxNum:30,
    include:false,
    ps:[]
  };
  for(i=oCon.minNum;i<=oCon.maxNum;i++){
    oCon.ps.push(i);
  };

  function showWin(arr){
    var html = '';
    for(i=0,len=arr.length;i<len;i++){
      html += '<li>' + arr[i] + '</li>'
    }
    $('#no1').html(html);
  }

  $('.winType button').click(function(){
    $('.winType button').removeClass('btn-warning');
    oCon.level = $(this).text();
    $(this).addClass('btn-warning');
    $('.curLevel').text(oCon.level);
  });




  $('.setcon').click(function(){
    oCon.minNum = $('.minNum').val();
    oCon.maxNum = $('.maxNum').val();
    oCon.ps = [];
    for(i=oCon.minNum;i<=oCon.maxNum;i++){
      oCon.ps.push(parseInt(i));
    };
    console.log(oCon);
  });

  $('.start').click(function(){
    if(!oCon.include){
      var newPs = _.difference(oCon.ps,aWin);
    } else {
      var newPs = oCon.ps;
    }
    if (newPs.length) {
      var id = _.sample(newPs);
      aWin.push(id);
      store.set('winA',aWin);
      console.log();
      showWin(aWin);
    }
  });

      showWin(store.get('winA'));

})