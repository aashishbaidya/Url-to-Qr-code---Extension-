document.addEventListener('DOMContentLoaded', function() {
  //var checkPageButton = document.getElementById('checkPage');
  //checkPageButton.addEventListener('click', function() {
	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
	    var url = tabs[0].url;
		document.getElementById("qrcode").innerHTML = "";
	    	var qrcode = new QRCode("qrcode");
		qrcode.makeCode(url);
		
	});

    
 // }, false);
}, false);
