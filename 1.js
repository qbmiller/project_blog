var n1 = ["tile1/1.jpg" , "tile1/2.jpg" , "tile1/3.jpg" ];

function setDelay(i) {
  setTimeout(function(){
    document.getElementById("image").src = n1[i];
  }, 1000);
}

function hoverImage(){
	var i;
	for (i = 0; i <= 2; ++i) {
		setDelay(i);
}
}