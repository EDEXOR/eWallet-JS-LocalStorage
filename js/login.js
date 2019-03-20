
window.onload = function usuarios(){







 if ((localStorage.getItem("users")==null)) {

 	localStorage.setItem("users", '1');

 }else{
 	var u = localStorage.getItem("users");

var x = parseInt(u);

 
 }


}
function Login()
{ 
	var done=0; 
	var usuario=document.getElementById("user").value; 
	var password=document.getElementById("pass").value;  

	if (usuario=="test" && password=="test1") { 
		window.location="ewallet.html"; 
		} 

	if (usuario=="USUARIO2" && password=="CONTRASEÑA2") { 
		window.location="ewallet.html"; 
		} 
	if (usuario=="" && password=="") { 
		alert("escriba algun dato"); 
		} 
} 
function reg()
{ 
	var done=0; 
	var usuario=document.getElementById("user").value; 
	var password=document.getElementById("pass").value;  

	if (usuario=="test" && password=="test1") { 
		window.location="ewallet.html"; 
		} 

	if (usuario=="USUARIO2" && password=="CONTRASEÑA2") { 
		window.location="ewallet.html"; 
		} 
	if (usuario=="" && password=="") { 
		alert("escriba algun dato"); 
		} 
} 



function mail(){
var email=document.getElementById("email").value;
emai= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

   if (emai.test(email)) {
    	document.getElementById("email").style="box-shadow: 2px -2px 153px 5px ";
    	document.getElementById("email").style="border: solid 5px green ";
   } else {
      document.getElementById("email").style="box-shadow: 2px -2px 153px 5px rgba(255,0,0,1);";
   }
}

function mostrar(){

	if (document.getElementById("pass").type=="password") {

		document.getElementById("pass").type="text";
	}
	else{
		document.getElementById("pass").type="password";
	}
}
function contra(){

	var pass=document.getElementById("pass").value;
		xd= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,30}/;

   if (xd.test(pass)) {
    	document.getElementById("pass").style="box-shadow: 2px -2px 153px 5px ";
    	document.getElementById("pass").style="border: solid 5px green ";
   } else {
      document.getElementById("pass").style="box-shadow: 2px -2px 153px 5px rgba(255,0,0,1);";
   }
}
function nomb(){
var nombre=document.getElementById("nombre").value;


   if (!nombre=="") {
    	document.getElementById("nombre").style="box-shadow: 2px -2px 153px 5px ";
    	document.getElementById("nombre").style="border: solid 5px green ";
   } else {
      document.getElementById("nombre").style="box-shadow: 2px -2px 153px 5px rgba(255,0,0,1);";
   }
}
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

function ape(){
var apellido=document.getElementById("apellido").value;

   if (!apellido=="") {
    	document.getElementById("apellido").style="box-shadow: 2px -2px 153px 5px ";
    	document.getElementById("apellido").style="border: solid 5px green ";
   } else {
      document.getElementById("apellido").style="box-shadow: 2px -2px 153px 5px rgba(255,0,0,1);";
   }
}


function duiv(){

	var dui=document.getElementById("dui").value;
		duii= /^\d{8}-\d{1}$/;

   if (duii.test(dui)) {
    	document.getElementById("dui").style="box-shadow: 2px -2px 153px 5px ";
    	document.getElementById("dui").style="border: solid 5px green ";
   } else {
      document.getElementById("dui").style="box-shadow: 2px -2px 153px 5px rgba(255,0,0,1);";
   }
}


function nitv(){

	var nit=document.getElementById("nit").value;
		nitt= /^[0-9]{4}-[0-9]{6}-[0-9]{3}-[0-9]{1}$/;

   if (nitt.test(nit)) {
    	document.getElementById("nit").style="box-shadow: 2px -2px 153px 5px ";
    	document.getElementById("nit").style="border: solid 5px green ";
   } else {
      document.getElementById("nit").style="box-shadow: 2px -2px 153px 5px rgba(255,0,0,1);";
   }
}


function telv(){

	var tel=document.getElementById("tel").value;
		tell= /^[0-9]{4}-[0-9]{4}$/;

   if (tell.test(tel)) {
    	document.getElementById("tel").style="box-shadow: 2px -2px 153px 5px ";
    	document.getElementById("tel").style="border: solid 5px green ";
   } else {
      document.getElementById("tel").style="box-shadow: 2px -2px 153px 5px rgba(255,0,0,1);";
   }
}



function guardar() {
	var preg=document.getElementById("pre");
	var pre1g=document.getElementById("pre1");
	var fech=document.getElementById("fecha").value;



var u = localStorage.getItem("users");

var x = parseInt(u);

if (nombre =="" || email=="" || pass=="" || dui==""  || pre1g=="" || fech=="") {

	alert("Falta un dato, favor revise los campos");
}
else{


var dataEMA= JSON.parse(localStorage.getItem("email"));
var dataP= JSON.parse(localStorage.getItem("pass"));
var dataN= JSON.parse(localStorage.getItem("nombre"));
var dataA= JSON.parse(localStorage.getItem("apellido"));
var dataDUI= JSON.parse(localStorage.getItem("dui"));
var dataTEL= JSON.parse(localStorage.getItem("tel"));
var dataDA= JSON.parse(localStorage.getItem("dato"));
var dataPR= JSON.parse(localStorage.getItem("pre"));
var dataRE= JSON.parse(localStorage.getItem("pre1"));
var dataCU= JSON.parse(localStorage.getItem("cuentas"));
var dataTA= JSON.parse(localStorage.getItem("tarjeta"));
var dataIN= JSON.parse(localStorage.getItem("ingreso"));
var dataGA= JSON.parse(localStorage.getItem("gasto"));
var conteoCU= JSON.parse(localStorage.getItem("contcu"));
var conteoTA= JSON.parse(localStorage.getItem("contta"));
var conteoIN= JSON.parse(localStorage.getItem("contin"));
var conteoGA= JSON.parse(localStorage.getItem("contga"));

var emailG = [];  
 var passG = [];
 var duiG = [];
 var telG = [];
 var nombreG = [];
 var apellidoG = [];
 var datosG = [];
 var preG=[];
 var respG=[];
  var conteocuG=[];
 var conteotaG=[];
 var conteoinG=[];
 var conteogaG=[];
var cuenG = new Array();
cuenG[0] = new Array();
cuenG[0][0] = new Array()
var tarjG = new Array();
cuenG[0] = new Array();
cuenG[0][0] = new Array()
var ingrG = new Array();
ingrG[0] = new Array();
ingrG[0][0] = new Array()
var gastG = new Array();
gastG[0] = new Array();
gastG[0][0] = new Array()




var j =parseInt(1); 

if (dataEMA==null) {

}
else{




		for (;dataEMA[j];) {
			conteotaG[j]=conteoTA[j];
			conteocuG[j]=conteoCU[j];
			conteoinG[j]=conteoIN[j];
			conteogaG[j]=conteoGA[j];
			cuenG[j]= dataCU[j];
			tarjG[j]= dataCU[j];
			ingrG[j]= dataCU[j];
			gastG[j]= dataCU[j];
			 emailG[j] = dataEMA[j];
			 passG[j] =dataP[j];
			  duiG[j] =dataDUI[j];
 			telG[j] =dataTEL[j];
 			nombreG[j] =dataN[j]; 
 			apellidoG[j] =dataA[j];
			 datosG[j] =dataDA[j];
			preG[j]= dataPR[j];
			respG[j]= dataRE[j];
			 j++
		} 
		 


}
		



 emailG[u] =email.value;  
 passG[u] = pass.value;
 duiG[u] = dui.value;
 telG[u] =tel .value;
 nombreG[u] = nombre.value;
 apellidoG[u] =  apellido.value;
 datosG[u] = 0;
 preG[u] = preg.value;
 respG[u] = pre1g.value;
 conteocuG[u]=0;
 conteotaG[u]=0;
 cuenG[u] = cuenG[0] = new Array();
cuenG[0][0] = new Array()
tarjG[u] = tarjG[0] = new Array();
tarjG[0][0] = new Array()
ingrG[u] = ingrG[0] = new Array();
ingrG[0][0] = new Array()
gastG[u] = gastG[0] = new Array();
gastG[0][0] = new Array()
 	var y = (parseInt(x)+1);




	alert(dataP);

  localStorage.setItem("email",JSON.stringify(emailG));
  localStorage.setItem("pass",JSON.stringify(passG));

  localStorage.setItem("dui", JSON.stringify(duiG));
  localStorage.setItem("nit", JSON.stringify("lol"));


  localStorage.setItem("tel", JSON.stringify(telG));
  localStorage.setItem("nombre", JSON.stringify(nombreG));


  localStorage.setItem("apellido", JSON.stringify(apellidoG));

  localStorage.setItem("dato", JSON.stringify(datosG));
  localStorage.setItem("pre", JSON.stringify(preG));
  localStorage.setItem("pre1", JSON.stringify(respG));
  localStorage.setItem("cuentas", JSON.stringify(cuenG));
  localStorage.setItem("tarjeta", JSON.stringify(tarjG));
  localStorage.setItem("contcu", JSON.stringify(conteocuG));
  localStorage.setItem("contta", JSON.stringify(conteotaG));
  localStorage.setItem("ingreso", JSON.stringify(ingrG));
  localStorage.setItem("gasto", JSON.stringify(gastG));
  localStorage.setItem("contin", JSON.stringify(conteocuG));
  localStorage.setItem("contga", JSON.stringify(conteocuG));

  localStorage.setItem("users", y);
  j=1;
  window.location="login.html";
}

  


}
function entrar(){

	var oc2=document.getElementById("pass").value;
	var oc1=document.getElementById("email").value;

	var entrar1 = JSON.parse(localStorage.getItem("email"));
	var entrar2 = JSON.parse(localStorage.getItem("pass"));

	entrar1.indexOf(oc1);

	if ((entrar1.indexOf(oc1))=='-1') {
		alert("El usuario no esta registrado")

	}
	else{
		var bandera= entrar1.indexOf(oc1);
		if (oc1==entrar1[bandera] && oc2==entrar2[bandera]) {

		window.location="ewallet.html"; 
		localStorage.setItem("login", "simon");
		localStorage.setItem("id", bandera);
		}
		else{
		alert("Contraseña Incorrecta");
		}
	}

	
	
}
function salir(){

	localStorage.setItem("login", "nel");
	localStorage.setItem("id", 0);

	window.location="login.html";
	
	
}function primera(){

	var idxd=localStorage.getItem("id");
	
var monto=document.getElementById("monto");
	var saldo=document.getElementById("saldo");
	var banco=document.getElementById("banco").value;
	var cuentas=document.getElementById("cuenta").value;



var u = localStorage.getItem("users");

var x = parseInt(u);
if (monto=="" || saldo==""|| banco==""|| cuentas=="") {

	alert("Falta un dato, favor revise los campos");
}
else{
var dataDA= JSON.parse(localStorage.getItem("dato"));
var dataCU= JSON.parse(localStorage.getItem("cuentas"));
var conCU= JSON.parse(localStorage.getItem("conteo"));
var conteo = JSON.parse(localStorage.getItem("contcu"));



var conteoc=[];
 var datosG = [];
  var conG = [];


var cuentasG = [[[]]];



var j =parseInt(1); 

if (dataDA==null) {

}
else{




		for (;u>j;) {
			 datosG[j] =dataDA[j];
			 cuentasG[j]=dataCU[j];
			 conteoc[j]=conteo[j];
			 j++
		} 
		 


}
		var y =((parseInt(conteo[idxd]))+1);
		alert(y);
	conteoc[idxd] = y
	conteo[idxd] = y
 datosG[idxd] = monto.value;

	var saldo=document.getElementById("saldo").value;
	var banco=document.getElementById("banco").value;
	var cuentas=document.getElementById("cuenta").value;
	cuentasG[idxd][y] = [saldo,cuentas,banco] ;

 

 	
	alert(saldo.value );


  localStorage.setItem("dato", JSON.stringify(datosG));
  localStorage.setItem("cuentas", JSON.stringify(cuentasG));
  localStorage.setItem("contcu", JSON.stringify(conteo));

  j=1;

  window.location="ewallet.html";
		
}}
function occ(){
	var oc1=document.getElementById("oc").value;
	var xd = localStorage.getItem("rec");
	var entrar1 = JSON.parse(localStorage.getItem("pre1"));
	var bandera= entrar1.indexOf(oc1);

	var pre1 = JSON.parse(localStorage.getItem("pre1"));

	if (pre1[bandera]==oc1) {
		var pass = JSON.parse(localStorage.getItem("pass"));

		alert(pass[bandera]);
		localStorage.setItem("rec", 0);
		window.location="login.html";
	}
	else{
		alert("Respuesta incorrecta");
	}

	
}
function recu(){


	var oc1=document.getElementById("email").value;

	var entrar1 = JSON.parse(localStorage.getItem("email"));

	entrar1.indexOf(oc1);

	if ((entrar1.indexOf(oc1))=='-1') {
		alert("El usuario no esta registrado")

	}
	else{
		var bandera= entrar1.indexOf(oc1);

		var pre = JSON.parse(localStorage.getItem("pre"));
		var pre1 = JSON.parse(localStorage.getItem("pre1"));
		
		document.getElementById("1").innerHTML="<br><br><h2>"+pre[bandera]+"</h2><br><br>";


		document.getElementById("email").id="oc";
		document.getElementById("4").insertAdjacentHTML("beforeBegin","<input value='Recuperar' id='rec'  target='_parent' onclick='occ()'' type='button'/>");
		document.getElementById("2").style=" opacity: 0;";
		localStorage.setItem("rec", oc1);
		
	}
}

