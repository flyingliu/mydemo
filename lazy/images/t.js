
// <img id="cvs_1_0" data-src="http://y0.ifengimg.com/a/2015_11/274b82278252849.jpg" class="lazyload"/>
// id 为唯一标识
// data-src 为预加载图片地址,图片地址可以跨域
// class="lazyload" 为执行预加载的样式名称

$(function() {

  var renderCvs = function(parent, max) {
    var lazyloadImage = $('.lazyload', parent);
    if (lazyloadImage.length < 1) {
      return;
    }
    var max = max || lazyloadImage.length;
    for (var i = 0; i < max; i++) {
      var imgId = lazyloadImage[i].id;
      var imageCache = localStorage.getItem(imgId);
      if (imageCache) {
        lazyloadImage[i].src = imageCache;
        continue;
      }
      var img = new Image();
      img.index = i;
      img.id = imgId;
      img.crossorigin = "*"; //canvas跨域调用图片
      img.onload = function() {
        var _this = this;
        var zCvs = $('#' + this.id);
        var domCvs = zCvs[0];
        var width = _this.width;
        var height = _this.height;
        domCvs.src = this.src;
        zCvs.removeClass('lazyload');
        try {
          var cvs = document.createElement('canvas');
          cvs.style.display = 'none';
          document.body.appendChild(cvs);
          var rcvs = cvs.getContext('2d');
          cvs.width = width;
          cvs.height = height;
          rcvs.drawImage(this, 0, 0);
          setTimeout(function() {
            var data = cvs.toDataURL();
            localStorage.setItem(_this.id, data);
            document.body.removeChild(cvs);
          }, 200);
        } catch (ex) {
          console.log(ex);
        }
      }
      img.src = lazyloadImage[i].getAttribute('data-src');
    }
  }
  renderCvs($("#target"));

});