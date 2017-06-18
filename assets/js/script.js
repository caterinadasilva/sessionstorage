function saveData() {
	var name = document.getElementById('name').value;
	var password = document.getElementById('password').value;
	sessionStorage.setItem(name, password);
	console.log('Nombre: ' + name);
	console.log('Contraseña: ' + password);
}
function recoverData() {
	for (var i = 0; i < sessionStorage.length; i++) {
		var name = sessionStorage.key(i);
		var password = sessionStorage.getItem(name);
		document.getElementById("data").innerHTML = 'Nombre: ' + name + '<br>Contraseña: ' + password;
	console.log('Nombre: ' + name);
	console.log('Contraseña: ' + password);
	}
}
function cleanData() {
	document.getElementById('data').innerHTML = "Limpiada vista. Los datos permanecen almacenados.";
	
	console.log('Nombre: ' + name);
	console.log('Contraseña: ' + password);

}
function cleanEverything() {
	sessionStorage.clear();
	recoverData();
	console.log('Nombre: ' + name);
	console.log('Contraseña: ' + password);
}
