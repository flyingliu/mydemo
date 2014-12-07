var nodes = ['#img1','#img2','#img3','#img4'];
var step = nodes.length;

function addact(){
	$('.layert').addClass('active');

	touch.on("#mm", 'touchstart', function(ev){
		ev.preventDefault();
	});	

	touch.on("#mm", 'swiperight', function(ev){
		var _this = $(this);
	  _this.addClass("BounceOutR");
	  $('.layert').addClass("BounceOutR");
	  setTimeout(function(){
	  	_this.hide();
	  	$('.layert').hide();
	  },1000);		  
	});	
}
$(function(){

	for(var i=0;i<step;i++){
		$(nodes[i]).hide();
		(function(i){

			touch.on(nodes[i], 'touchstart', function(ev){
				ev.preventDefault();
			});

			touch.on(nodes[i], 'swiperight', function(ev){
				var _this = $(nodes[i]).parent();
				var _thisprev = $(nodes[i]).parent().prev();
			  _this.addClass("BounceOutR");
			  _thisprev.show().addClass('FadeInL');
			  setTimeout(function(){
			  	_this.hide();
			  	step--;
			  	if(step==0){
			  		addact();	
			  	}
			  },1000);	
			});

		  setTimeout(function(){
		  	$(nodes[i]).show();
		  	$(nodes[i]).addClass('BounceIn');
		  },500*i);			

		})(i);	
	}



})

