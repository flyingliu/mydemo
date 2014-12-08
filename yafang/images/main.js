var nodes = ['.layer1','.layer2','.layer3','.layer4'];
var step = nodes.length;

function addact(){
	$('.layert').addClass('active');

	touch.on("#mm", 'touchstart', function(ev){
		ev.preventDefault();
	});	

	touch.on("#mm", 'swipeleft', function(ev){
		var _this = $("#mm");
	  _this.addClass("BounceOutL");
	  $('.layert').addClass("BounceOutL");
	  setTimeout(function(){
	  	_this.hide();
	  	$('.layert').hide();
	  },1000);		  
	});	
}
$(function(){

	for(var i=0;i<step;i++){
		$(nodes[i]).find('img').hide();
		(function(i){

			touch.on(nodes[i], 'touchstart', function(ev){
				ev.preventDefault();
			});

			touch.on(nodes[i], 'swipeleft', function(ev){
				var _this = $(nodes[i]);
				var _thisprev = $(nodes[i]).prev();
			  _this.addClass("BounceOutL");
			  _thisprev.show().addClass('FadeInR');
			  setTimeout(function(){
			  	_this.hide();

			  	$(nodes[i+1]).find("img").show().addClass('BounceIn');
			  	step--;
			  	if(step==0){
			  		addact();	
			  	}
			  },1000);	
			});

		  // setTimeout(function(){
		  // 	$(nodes[i]).find("img").show().addClass('BounceIn');
		  // },500*i);	

		})(i);

		setTimeout(function(){
	  	$(nodes[0]).find("img").show().addClass('BounceIn');
	  },500);	

	}
})

