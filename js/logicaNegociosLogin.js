//TipoUsuario > 1: Entrenador, 2: Cliente
function obtenerUsuarios(){
  var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLS'));

  if(listaUsuarios == null){
    listaUsuarios =
    [
      ['1','correo@gmail.com','123','Tatiana','Perez','cliente'],
      ['2','correo@gmail.com','456','Elena','Ruiz','entrenador']
    ]
  }
  return listaUsuarios;
}

function ValidarCredenciales(pcorreo,pcontrasena){
  var listaUsuarios = obtenerUsuarios();

  var bAcceso = false;

  for (var i = 0; i < listaUsuarios.length; i++) {
    if(pcorreo == listaUsuarios[i][1] && pcontrasena == listaUsuarios[i][2]) {
      bAcceso = true;
      sessionStorage.setItem("usuarioActivo",listaUsuarios[i][3] + " " + listaUsuarios[i][4]);
      sessionStorage.setItem("rolUsuarioActivo",listaUsuarios[i][5]);
    }
  }
  return bAcceso;
}
