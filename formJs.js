// Función para crear un usuario y almacenar la información en sessionStorage
function crearUsuario() {
    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const contrasenha = document.getElementById('contrasenha').value;
    const sexo = document.getElementById('sexo').value;

    // Imprimir los datos en la consola para propósitos de depuración
    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    console.log('Correo:', correo);
    console.log('Contraseña:', contrasenha);
    console.log('Sexo:', sexo);

    // Almacenar los datos en sessionStorage
    sessionStorage.setItem('nombre', nombre);
    sessionStorage.setItem('apellido', apellido);
    sessionStorage.setItem('correo', correo);
    sessionStorage.setItem('contrasenha', contrasenha);
    sessionStorage.setItem('sexo', sexo);

    // Mostrar un mensaje de éxito y redirigir a la página de inicio
    alert('¡Usuario creado con éxito! Gracias por registrarte.');
    window.location.href = 'inicio.html';
}

// Función para confirmar la intención de salir y redirigir a la página de inicio
function salir() {
    // Mostrar un mensaje de confirmación
    alert('¿Seguro que no deseas iniciar sesión?');

    // Redirigir a la página de inicio
    window.location.href = 'inicio.html';
}
