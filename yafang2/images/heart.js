/**
 * @see http://workshop.rs
 */
(function($){

  $.fn.snow = function(options){

      var $flake      = $('<div class="snowbox" />').css({'position': 'absolute', 'top': '-50px'}).html('&#9829;'),
        documentHeight  = $(document).height(),
        documentWidth = $(document).width(),
        defaults    = {
                  minSize   : 10,   //雪花的最小尺寸
                  maxSize   : 20,   //雪花的最大尺寸
                  newOn   : 1000,   //雪花出现的频率
                  flakeColor  : "#ff0000" //懒人建站 www.51xuediannao.com   整理
                },
        options     = $.extend({}, defaults, options);

      var interval    = setInterval( function(){
        var startPositionLeft   = Math.random() * documentWidth - 100,
          startOpacity    = 0.5 + Math.random(),
          sizeFlake     = options.minSize + Math.random() * options.maxSize,
          endPositionTop    = documentHeight - 100,
          endPositionLeft   = startPositionLeft - 100 + Math.random() * 100,
          durationFall    = documentHeight * 10 + Math.random() * 5000;
        $flake.clone().appendTo('body').css({
              left: startPositionLeft,
              opacity: startOpacity,
              'font-size': sizeFlake,
              color: options.flakeColor
            }).animate({
              top: endPositionTop,
              left: endPositionLeft,
              opacity: 0.2
            },durationFall,'linear',function(){
              $(this).remove()
            }
          );

      }, options.newOn);

  };

})(jQuery);