document.querySelector('#registrar').addEventListener('click',registrar);


function registrar() {
	var aNuevaPersona = [],
		aCedula = '',
		aNombre = '',
		aApellido = '',
		aNacionalidad = '',
		aTipoIden = '',
		aNacimiento = '',
		aGenero = '',
		aTelefono = '',
		aUsuario = '',
		aContrasena = '',
		aEdad = '',
		aNombreReferen = '',
		aNumReferen = '',
		aTipoUser = '',
		aFoto = '';


	aCedula = document.querySelector('#cedula').value;
	aNombre = document.querySelector('#Nombre').value;
	aApellido = document.querySelector('#Apellido').value;
	aNacionalidad = document.querySelector('#nacionalidad').value;
	aTipoIden = document.querySelector('#Identificacion').value;
	aNacimiento = document.querySelector('#nacimiento').value;
	aGenero= document.querySelector('#genero').value;
	aTelefono = document.querySelector('#telefono').value;
	aUsuario = document.querySelector('#usuario').value;
	aContrasena  = document.querySelector('#contrasena').value;
	aEdad  = document.querySelector('#edad').value;
	aNombreReferen = document.querySelector('#referencia').value;
	aNumReferen  = document.querySelector('#telreferencia').value;
	aTipoUser  = document.querySelector('#tipocliente').value;
	aFoto = document.querySelector('#image').value;

	aNuevaPersona.push(aCedula,aNombre,aApellido,aNacionalidad,aTipoIden,
	aNacimiento,aGenero,aTelefono,aUsuario,aContrasena,aEdad,aNombreReferen,
	aTipoUser,aFoto);

	registrarPersonasIngresadas(aNuevaPersona);

}