$(function() {
	$('.review-slider').slick({
		infinite: true,
		dots: true
	});
});
function r(f) {
	/in/.test(document.readyState) ? setTimeout('r(' + f + ')', 9) : f();
}
r(function() {
	if (!document.getElementsByClassName) {
		var getElementsByClassName = function(node, classname) {
			var a = [];
			var re = new RegExp('(^| )' + classname + '( |$)');
			var els = node.getElementsByTagName('*');
			for (var i = 0, j = els.length; i < j; i++)
				if (re.test(els[i].className)) a.push(els[i]);
			return a;
		};
		var videos = getElementsByClassName(document.body, 'youtube');
	} else {
		var videos = document.getElementsByClassName('youtube');
	}
	var nb_videos = videos.length;
	for (var i = 0; i < nb_videos; i++) {
		videos[i].style.backgroundImage =
			'url(http://i.ytimg.com/vi/' + videos[i].id + '/sddefault.jpg)';
		videos[i].style.backgroundPosition = 'center';
		videos[i].style.backgroundSize = 'cover';
		var play = document.createElement('div');
		play.setAttribute('class', 'play');
		videos[i].appendChild(play);
		videos[i].onclick = function() {
			var iframe = document.createElement('iframe');
			var iframe_url =
				'https://www.youtube.com/embed/' + this.id + '?autoplay=1';
			if (this.getAttribute('data-params'))
				iframe_url += '&' + this.getAttribute('data-params');
			iframe.setAttribute('src', iframe_url);
			iframe.setAttribute('frameborder', '0');
			iframe.setAttribute('allow', 'autoplay');
			iframe.width = '680';
			iframe.height = '380';
			this.parentNode.replaceChild(iframe, this);
			iframe.setAttribute('autoplay', '1');
		};
	}
});
