function colorChanger(){
	document.getElementById('header1').style.color = randomColors();
}

function randomColors(){
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
}