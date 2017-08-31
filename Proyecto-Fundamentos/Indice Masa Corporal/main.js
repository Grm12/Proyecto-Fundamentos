function masaCorporal() {
  //declaramos las variables
  var peso, altura, imc;
  var message = "in global";
  //recogemos los datos.
  //Suponemos que los campos
  //tienen esos Id.
  //El peso en KG y la altura en cm
  //para operar mejor
  peso=document.getElementById("peso").value;
  altura=document.getElementById("altura").value;
  alturacm = (altura*100);
  //comprobamos que los campos
  //no vengan vacíos
  if(peso!="" && alturacm!=""){
    //aplicamos la fórmula
    altura = parseInt(alturacm)/100;
    imc=peso/(altura*altura);
    document.getElementById("imc").innerHTML = "Su indice de MasaCorporal es: " + imc.toFixed(2);

    if(imc >= 16.00 && imc <= 16.99){
      document.getElementById("text").innerHTML = "Su estado es : Delgadez Moderada"; 
    }else{
       if(imc >= 17.00 && imc <= 18.49){
          document.getElementById("text").innerHTML = "Su estado es : Delgadez Leve";
      }else{
        if(imc >= 19.00 && imc <= 24.99){
          document.getElementById("text").innerHTML = "Su estado es : Normal";
        }else{
          if(imc >= 25.00 && imc <= 29.99){
              document.getElementById("text").innerHTML = "Su estado es : Sobrepeso";
          }else{
            if(imc >= 30.00 && imc <= 34.99){
              document.getElementById("text").innerHTML = "Su estado es : Obesidad"; 
            }else{
              if(imc >= 35.00 && imc <= 39.99){
                document.getElementById("text").innerHTML = "Su estado es : Obesidad Media";
              }else{
                if(imc >= 40.00 && imc <= 44.99){
                  document.getElementById("text").innerHTML = "Su estado es : Obesidad Mórbida"; 
                }
              }
            }
          }
        }
      }
    }
  }
}

