var sw_validacion_vacio = 0, sw_validacion_nombre = 0, sw_validacion_apellido = 0, sw_validacion_email = 0, sw_validacion_tel=0;

function validar()
{
    valor1 = document.getElementById("name").value;
    valor2 = document.getElementById("last").value;
    valor3 = document.getElementById("bhirday").value;
    //valor4 = document.getElementById("inlineRadioOptions").value;
    valor5 = document.getElementById("email1").value;
    valor6 = document.getElementById("phone").value;
    valor7 = document.getElementById("inputState").value;
    
    //alert ("1: "+valor1 +" 2: "+valor2+" 3: "+valor3 );
    //alert ("5: "+valor5 +" 6: "+valor6+" 7: "+valor7 );


    //alert("hola");
    if (valor1 == "" || valor2 == "" || valor3 == "" || valor5 == "" || valor6 == "" || valor7 == "Escoger...")  
    {
          alert("Falta uno o varios campos");
          sw_validacion_vacio = 0;//error
    }
    else
    {
      sw_validacion_vacio = 1;//bien
      //Salert ("1: "+valor1 +"   2: "+valor2+"   5: "+valor5 +"   6: "+valor6);


      validarName(valor1); 
      validarLast(valor2);
      validarPhone(valor6);  
      validarEmail(valor5); 
      alert ("sw_validacion_vacio: "+sw_validacion_vacio +"  sw_validacion_nombre: "+sw_validacion_nombre+"  sw_validacion_apellido: "+sw_validacion_apellido +"  sw_validacion_email: "+sw_validacion_email + " sw_validacion_tel: "+sw_validacion_tel);
      if (sw_validacion_vacio == 1 && sw_validacion_email == 1 && sw_validacion_nombre == 1 && sw_validacion_apellido==1 && sw_validacion_tel==1) 
      {
        location.href = "https://www.google.com";
      }
    }

}


function validarName(c) {
  userInput = c;  
  //alert("Ingreso un nombre" + c +" y contiene: " + userInput.length);          	


 if(userInput.length >= 1 && userInput.length <= 10){  
      sw_validacion_nombre = 1;
      alert("Ingreso un nombre de " + userInput.length);          	
    }
 else {  	
      alert("Ingrese un nombre entre " +1+ " and " +10+ " caracteres"); 
      sw_validacion_nombre = 0; 		
    }  
}

function validarLast(d) {
userInput = d;
//alert("Ingreso un nombre" + d +" y contiene: " + userInput.length);          	

 if(userInput.length >= 1 && userInput.length <= 10)      {  
      sw_validacion_apellido = 1;
      alert("Ingreso un apellido de " + userInput.length);          	
    }
 else {  	
      alert("Ingrese un apellido entre " +1+ " and " +10+ " caracteres"); 
      sw_validacion_apellido = 0; 		
    }   
}
  

//ñapa pa el profe
function validarEmail(x) {
  validadordeEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i; //esprexion que contiene el valor de un email valido
  if (validadordeEmail.test(x)) {
    sw_validacion_email = 1;
    alert("La dirección de email " + x + " es correcta.");
  } else {
    alert("La dirección de email " + x + " es incorrecta.");
    sw_validacion_email = 0;
  }
}

function validarPhone(b) {
  if (isNaN(b)) {
    alert("El telefono debe ser numero!");
    sw_validacion_tel = 0;
  } else {
    sw_validacion_tel = 1;
    alert("El telefono es numero!");
  }
}

