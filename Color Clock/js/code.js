$(function(){
	$('body').css("backgroundColor",'#000');
	$('.timeB').css('background','rgba(255, 255, 255, 0.83)');
	handleClickEvents();

	setInterval(function() {
		// d.setTime(d.getTime() + 500);
		var d = new Date();

		var secondColor = niceify(d.getSeconds() * 255/60);
		var minuteColor = niceify(d.getMinutes() * 255/60);
		var hourColor = niceify((d.getHours() * 255/24)-3);
		
		var time = pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds());
		$('.clock').html(time);

		var hexClock = hourColor + minuteColor + secondColor;
		var hexColor = '#' + hexClock;

		$('.hexClock').html(hexClock);

		$('body').css("backgroundColor",hexColor);
		var txtShadow = "1px 4px 6px " + hexColor + ", 0 0 0 rgba(0, 0, 0, 0.57), 1px 4px 6px " + hexColor;
		$('.clock').css("text-shadow",txtShadow);
		$('.hexClock').css("text-shadow",txtShadow);
	}, 500);
})

function pad(num) {
    var s = num+"";
    if (s.length < 2) s = "0" + s;
    return s;
}

function niceify(num){
	return pad((Math.round(num)).toString(16));
}

function handleClickEvents(){
	$('body').on('click','.timeB',function(){
		$('.clock').css("-webkit-animation","moveDown 2s ease both");
		$('hr').css("-webkit-animation","moveDown 2s ease both");
		$('.hexClock').css("-webkit-animation","moveDown 2s ease both");
		$('.timeB').css('background','rgba(255, 255, 255, 0.83)');
		$('.colorB').css('background','rgba(255, 255, 255, 0.55)');
	})
	$('body').on('click','.colorB',function(){
		$('.clock').css("-webkit-animation","moveUp 2s ease both");
		$('hr').css("-webkit-animation","moveUp 2s ease both");
		$('.hexClock').css("-webkit-animation","moveUp 2s ease both");
		$('.colorB').css('background','rgba(255, 255, 255, 0.83)');
		$('.timeB').css('background','rgba(255, 255, 255, 0.55)');
	})
}