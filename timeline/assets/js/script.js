$(function(){

	// If no url property is passed, the
	// href attribute will be used

	$('#b1').frameWarp();

	$('#b2').frameWarp();

	$('#b3').frameWarp();

	$('#bgithub').frameWarp({
		url : 'http://emptymalei.github.com/WesternXia/',
		cache:false
	});
});
