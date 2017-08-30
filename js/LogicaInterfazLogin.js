document.querySelector("#ingresar").addEventListener("click", iniciarSesion);

function iniciarSesion() {
  var ncorreo ="";
  var ncontrasena = "";
  var bAcceso = false;
  
  var scorreo = document.querySelector("#email").value;
  var scontrasena = document.querySelector("#password").value;

  bAcceso = ValidarCredenciales(scorreo,scontrasena);
  
  if(bAcceso == true){
     ingresar();
  }

}

function ingresar(){
  
  var rol = sessionStorage.getItem("rolUsuarioActivo");
  
  switch(rol){
    case "entrenador":
      window.location.href = "admin.html";
    break;

    case "cliente":
      window.location.href = "cliente.html";
    break;
  }
}