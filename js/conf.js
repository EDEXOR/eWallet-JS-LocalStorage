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
var dataCU= JSON.parse(localStorage.getItem("gasto"));
var dataCUU= JSON.parse(localStorage.getItem("cuentas"));
var dataTA= JSON.parse(localStorage.getItem("tarjeta"));
var conteoCU= JSON.parse(localStorage.getItem("contcu"));
var conteoTA= JSON.parse(localStorage.getItem("contta"));
var dataDA= JSON.parse(localStorage.getItem("dato"));
var conCU= JSON.parse(localStorage.getItem("conteo"));
var conteo = JSON.parse(localStorage.getItem("contga"));

			if (conteo[id]==null) {

				document.getElementById("tabla").insertAdjacentHTML("beforeBegin","<H1>No hay gastos</H1>");

			}
			else{
				var monto = []; 
		  	
		  	var yyy = parseInt(conteoCU[id]+1);
		  	var yyyy = parseInt(conteoTA[id]+1);
		  	var yy = (parseInt(conteo[id])+1);
		  	var xx=0;
		  	var suma= 0;
		for (var i = 1; i<yy ; i++) {
			xx= parseInt(dataCU[id][i][1]);
			suma= suma+xx;

		}
		var total= (suma);
			
			if(conteo[id]=="0"){}
			else{


			
			
			
		}
			
			for (var jj = 1; jj<yyy ; jj++) {
			
			  
			 
			document.getElementById("cuentas").insertAdjacentHTML("afterbegin","<option value='"+jj+"'>"+dataCUU[id][jj][1]+"</option>");

		}

		for (var jjj = 1; jjj<yyyy ; jjj++) {
			
			  
			 
			document.getElementById("tarjeta").insertAdjacentHTML("afterbegin","<option value='"+jjj+"'>"+dataTA[id][jjj][1]+"</option>");

		}


		}
			


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