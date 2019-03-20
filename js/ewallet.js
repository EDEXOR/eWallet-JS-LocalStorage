window.onload = function empezar(){
var pase = localStorage.getItem("login");
var dato = JSON.parse(localStorage.getItem("dato"));
var id = localStorage.getItem("id");
if (pase=="simon") {

		if (dato[id]==0) {
				window.location="primera.html";


		}
		else{

var dataEMA= JSON.parse(localStorage.getItem("email"));
var dataP= JSON.parse(localStorage.getItem("pass"));
var dataN= JSON.parse(localStorage.getItem("nombre"));
var dataA= JSON.parse(localStorage.getItem("apellido"));
var dataDUI= JSON.parse(localStorage.getItem("dui"));
var dataNIT= JSON.parse(localStorage.getItem("nit"));
var dataTEL= JSON.parse(localStorage.getItem("tel"));
var dataDA= JSON.parse(localStorage.getItem("dato"));
var dataPR= JSON.parse(localStorage.getItem("pre"));
var dataRE= JSON.parse(localStorage.getItem("pre1"));
var dataCU= JSON.parse(localStorage.getItem("cuentas"));
var conteoCU= JSON.parse(localStorage.getItem("contcu"));
var conteoTA= JSON.parse(localStorage.getItem("contta"));
var dataDA= JSON.parse(localStorage.getItem("dato"));
var conCU= JSON.parse(localStorage.getItem("conteo"));
var conteo = JSON.parse(localStorage.getItem("contcu"));

			
			var monto = []; 
		  	
		  	var y = (parseInt(conteo[id])+1);
		  	var x=0;
		  	var suma= 0;
		for (var i = 1; i<y ; i++) {
			x= parseInt(dataCU[id][i][0]);
			suma= suma+parseInt(x);

		}	

			var tota=parseInt(dataDA[id]);
			var toyal = suma + tota;

			document.getElementById("nom").innerHTML=dataN[id] + "  "+ dataA[id];
			document.getElementById("monto").innerHTML=" $ " + toyal;
			document.getElementById("email").innerHTML=dataEMA[id];
			
			


		}

}
else{
	alert("ACCESO DENEGADO");
	window.location="login.html";
}





};
function salir(){

	localStorage.setItem("login", "nel");
	localStorage.setItem("id", 0);

	window.location="login.html";
	
	
}