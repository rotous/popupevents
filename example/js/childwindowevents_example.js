window.onload = function(){
	
	var btn = document.getElementById('btn-open');
	btn.addEventListener('click', function(){
		var win = window.open('win.html', null, "menubar=no,location=yes,resizable=yes,scrollbars=yes,status=no,left=250,top=250,width=600,height=500");
	});
};

	window.addEventListener('childclosed', function(e){
		console.log('window closed', e.childWindow);
	});
	window.addEventListener('childrefreshed', function(e){
		console.log('window refreshed', e.childWindow);
	});
