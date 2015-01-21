$(function(){
  var xAngle = 0,
      yAngle = 0;
  var curpage = 0;

  var props = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
      prop,
      el = document.createElement('div');

  for (var i = 0, l = props.length; i < l; i++) {
      if (typeof el.style[props[i]] !== "undefined") {
          prop = props[i];
          break;
      }
  }



	function pageAnim(curpage){
		if(curpage == 0) {
			$('.p0no1').animate({"opacity":'1'},3000,"",function(){
				$(this).addClass('pulse');
			});
			$('.p0no2').animate({"opacity":'1'},3000,"",function(){
					$('.p0no3').show().addClass('slideDown');
			});
		}
	}

	function pageStop(curpage){
		if(curpage == 0) {
			$('.p0no1').animate({"opacity":'0'},1,'',function(){
				$(this).removeClass('pulse');
			});
			$('.p0no2').animate({"opacity":'0'},1,"",function(){
					$('.p0no3').removeClass('slideDown').hide();
			});
		}
	}

	pageAnim(0);


	touch.on('#touch', 'swipeleft', function(ev){
      // yAngle -= 90;
      // document.getElementById('cube').style[prop] = "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)";
	});


	touch.on('#touch', 'swiperight', function(ev){
      // yAngle -= 90;
      // document.getElementById('cube').style[prop] = "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)";
	});



	touch.on('#touch', 'swipeup', function(ev){
		if(curpage>=0 && curpage<3){
			pageStop(curpage);
      yAngle -= 90;
      console.log(yAngle);
      document.getElementById('cube').style[prop] = "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)";
      curpage++;
      pageAnim(curpage);
      console.log(curpage);
		}
	});

	touch.on('#touch', 'swipedown', function(ev){
		if(curpage>0 && curpage<=3){
      yAngle += 90;
      document.getElementById('cube').style[prop] = "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)";
      curpage--;
      pageAnim(curpage);
      console.log(curpage);
    }
	});


});
