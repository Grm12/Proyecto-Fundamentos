//TipoUsuario > 1: Entrenador, 2: Cliente
function obtenerUsuarios(){
  var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLS'));

  if(listaUsuarios == null){
    listaUsuarios =
    [
      ['1-111-111','Tatiana','Maria','Perez','Ramos','Costarricense','Cedula','20-10-1989','Femenino','2222-222-222','tatiana1','123456','27','Rodrigo Arias','8888-88-88','Cliente','/img/usuario-mujer.png'],
      ['2-222-222','Raul','','Prado','Ruiz','Costarricense','Paposrte','20-10-1982','Maculino','2789-89-23','Raul2','1111','35','Amalia Perez','7777-77-77','Entrenador','/img/usuario-hombre.png']
    ]
  }
  return listaUsuarios;
}

function ValidarCredenciales(pusuario,pcontrasena){
  var listaUsuarios = obtenerUsuarios();

  var bAcceso = false;

  for (var i = 0; i < listaUsuarios.length; i++) {
    if(pusuario == listaUsuarios[i][10] && pcontrasena == listaUsuarios[i][11]) {
      bAcceso = true;
      sessionStorage.setItem("usuarioActivo",listaUsuarios[i][2] + " " + listaUsuarios[i][3]);
      sessionStorage.setItem("rolUsuarioActivo",listaUsuarios[i][15]);
    }
  }
  return bAcceso;
}
