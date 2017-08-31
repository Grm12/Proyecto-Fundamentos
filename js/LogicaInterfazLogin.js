document.querySelector("#ingresar").addEventListener("click", iniciarSesion);

function iniciarSesion() {
  var nusuario ="";
  var ncontrasena = "";
  var bAcceso = false;
  
  var susuario = document.querySelector("#username").value;
  var scontrasena = document.querySelector("#password").value;

  bAcceso = ValidarCredenciales(susuario,scontrasena);
  
  if(bAcceso == true){
     ingresar();
  }

}

function ingresar(){
  
  var rol = sessionStorage.getItem("rolUsuarioActivo");
  
  switch(rol){
    case "Entrenador":
      window.location.href = "admin.html";
    break;

    case "Cliente":
      window.location.href = "cliente.html";
    break;
  }
}