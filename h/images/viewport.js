var viewport = document.querySelector("meta[name=viewport]");
var winWidths=$(window).width();
var densityDpi=640/winWidths;
	densityDpi= densityDpi>1?300*640*densityDpi/640:densityDpi;
if(isWeixin()){
	viewport.setAttribute('content', 'width=640, target-densityDpi='+densityDpi);
}else{
	viewport.setAttribute('content', 'width=640, user-scalable=no');
	window.setTimeout(function(){
		viewport.setAttribute('content', 'width=640, user-scalable=no');
	},1000);
}
function isWeixin(){
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i)=="micromessenger") {
		return true;
	} else {
		return false;
	}
}