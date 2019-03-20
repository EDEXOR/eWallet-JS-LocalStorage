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
var dataCU= JSON.parse(localStorage.getItem("ingreso"));
var dataCUU= JSON.parse(localStorage.getItem("cuentas"));
var dataTA= JSON.parse(localStorage.getItem("tarjeta"));
var conteoCU= JSON.parse(localStorage.getItem("contcu"));
var conteoTA= JSON.parse(localStorage.getItem("contta"));
var dataDA= JSON.parse(localStorage.getItem("dato"));
var conCU= JSON.parse(localStorage.getItem("conteo"));
var conteo = JSON.parse(localStorage.getItem("contin"));

			if (conteo[id]==null) {

				document.getElementById("tabla").insertAdjacentHTML("beforeBegin","<H1>No hay ingresos</H1>");

			}
			else{
				var monto = []; 
		  	
		  	var yyy = parseInt(conteoCU[id]+1);
		  	var yy = (parseInt(conteo[id])+1);
		  	var xx=0;
		  	var suma= 0;
		for (var i = 1; i<yy ; i++) {
			xx= parseInt(dataCU[id][i][1]);
			suma= suma+xx;

		}
		var total= (suma);
			

			document.getElementById("efe").innerHTML=" $ " + total;
			
			for (var j = 1; j<yy ; j++) {
			
			  
			 
			document.getElementById("tabla").insertAdjacentHTML("beforeBegin","<td>"+dataCU[id][j][0]+"</td><td>$"+dataCU[id][j][1]+"</td><td>"+dataCU[id][j][2]+"</td>"+"</td><td>"+dataCU[id][j][3]+"</td>"+"</td><td>"+dataCU[id][j][4]+"</td>");

		}
			
			for (var jj = 1; jj<yyy ; jj++) {
			
			  
			 
			document.getElementById("cuentas").insertAdjacentHTML("afterbegin","<option value='"+jj+"'>"+dataCUU[id][jj][1]+"</option>");

		}


		}

			}
			
}
else{
	alert("ACCESO DENEGADO");
	window.location="login.html";
}





};
function nueva(){
	var idxd=localStorage.getItem("id");
	
	var saldo=document.getElementById("fecha");
	var banco=document.getElementById("monto").value;
	var cuentas=document.getElementById("motivo").value;
	


	



var u = localStorage.getItem("users");

var x = parseInt(u);
if (saldo==""|| banco==""|| cuentas=="") {

	alert("Falta un dato, favor revise los campos");
}
else{
var dataDA= JSON.parse(localStorage.getItem("dato"));
var dataTA= JSON.parse(localStorage.getItem("ingreso"));
var dataCU= JSON.parse(localStorage.getItem("ingreso"));
var conCU= JSON.parse(localStorage.getItem("cuentas"));
var conteo = JSON.parse(localStorage.getItem("contin"));



var conteoc=[];
 var datosG = [];
  var conG = [];
var pisto = [];

var cuentasG = [[[]]];

var datosG = [[[]]];



var j =parseInt(1); 

if (dataDA==null) {

}
else{




		for (;u>j;) {
			 cuentasG[j]=dataTA[j];
			 datosG[j]=conCU[j];
			 pisto[j]=dataDA[j];
			 conteoc[j]=conteo[j];
			 j++
		} 
		 


}
		var y =((parseInt(conteo[idxd]))+1);
		alert(y);
	conteoc[idxd] = y
	conteo[idxd] = y

	var fecha=document.getElementById("fecha").value;
	var monto=document.getElementById("monto").value;
	var motivo=document.getElementById("motivo").value;
	var medio=document.getElementById("medio").value;
	var selec = document.getElementById("medio").value;
	if (selec=="Efectivo") {
		var cuentaa="Efectivo";
		var tot = ((parseInt(monto))+(parseInt(pisto[idxd])));
		pisto[idxd]=tot;
		localStorage.setItem("dato", JSON.stringify(pisto));
	}
	else if(selec=="Cuenta bancaria"){
		var cuenta=document.getElementById("cuentas").value;

	var prov0=datosG[idxd][cuenta][0];
	var prov1=datosG[idxd][cuenta][1];

	var prov2=datosG[idxd][cuenta][2];
	var provT=((parseInt(prov0))+(parseInt(monto)));
		datosG[idxd][cuenta]=[provT,prov1,prov2];

		cuentaa=datosG[idxd][cuenta][1];
		localStorage.setItem("cuentas", JSON.stringify(datosG));

	}
	cuentasG[idxd][y] = [fecha,monto,motivo,medio,cuentaa] ;

 

 	
	alert(saldo.value );


  localStorage.setItem("ingreso", JSON.stringify(cuentasG));
  localStorage.setItem("contin", JSON.stringify(conteo));
  

  j=1;

  window.location="ingresos.html";


} }
function cuentav(){

	var cuenta=document.getElementById("cuenta").value;
		cuentat= /^[0-9]{11}$/;

   if (cuentat.test(cuenta)) {
    	document.getElementById("cuenta").style="box-shadow: 2px -2px 153px 5px ";
    	document.getElementById("cuenta").style="border: solid 5px green ";
   } else {
      document.getElementById("cuenta").style="box-shadow: 2px -2px 153px 5px rgba(255,0,0,1);";
   }
}
function montov(){

	var monto=document.getElementById("monto").value;
		

   if (monto=="") {
   	document.getElementById("monto").style="box-shadow: 2px -2px 153px 5px rgba(255,0,0,1);";
    	
   } else {
      document.getElementById("monto").style="box-shadow: 2px -2px 153px 5px ";
    	document.getElementById("monto").style="border: solid 5px green ";
   }
}
function bancov(){

	var banco=document.getElementById("banco").value;

   if (banco=="") {
    	document.getElementById("banco").style="box-shadow: 2px -2px 153px 5px rgba(255,0,0,1);";
    	
   } else {
      document.getElementById("banco").style="box-shadow: 2px -2px 153px 5px ";
    	document.getElementById("banco").style="border: solid 5px green ";
   }
}



function saldov(){

	var saldo=document.getElementById("saldo").value;

   if (saldo=="") {
    	document.getElementById("saldo").style="box-shadow: 2px -2px 153px 5px rgba(255,0,0,1);";
   } else {
   	document.getElementById("saldo").style="box-shadow: 2px -2px 153px 5px ";
    	document.getElementById("saldo").style="border: solid 5px green ";
      
   }
   }
function ver(){

	var selec = document.getElementById("medio").value;
	if (selec=="Efectivo") {
		document.getElementById("metodo").style="opacity: 0;";
	}
	else if(selec=="Cuenta bancaria"){
		document.getElementById("metodo").style=" opacity: 1;";

	}
	
}
function salir(){

	localStorage.setItem("login", "nel");
	localStorage.setItem("id", 0);

	window.location="login.html";
	
	
}