

function hittaobjekt()
{
	alert("nu anropades funktionen hittaobjekt");
	var kanal;
	kanal=document.getElementById("layout");
	kanal.style.background="blue";
}


function bytbild()
{
var bildkanal;
bildkanal=document.getElementById("exempel");
if (bildkanal.src = "gfx/Background.png"){
bildkanal.src="gfx/Background.jpg"
}
else {
bildkanal.src="gfx/Background.png";
}
}