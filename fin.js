// Espera a que el DOM se cargue completamente antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function() {
    
  // Agrega un event listener al botón 'volver' para mostrar una alerta al hacer clic
  document.getElementById('volverBtn').addEventListener('click', function() {
      alert('¡Pantalla de inicio del juego!');
  });

  // Agrega un event listener al botón 'credits' para mostrar el elemento con ID 'credits' al hacer clic
  document.getElementById('creditsBtn').addEventListener('click', function() {
      document.getElementById('credits').style.display = 'block';
  });

  // Agrega un event listener al botón 'exit' para mostrar un confirmar y redirigir a 'about:blank' si se confirma
  document.getElementById('exitBtn').addEventListener('click', function() {
      if (confirm('¿Estás seguro de que quieres salir?')) {
          window.location.href = 'about:blank';
      }
  });

  // Agrega un event listener al elemento con ID 'credits' para ocultarlo al hacer clic
  document.getElementById('credits').addEventListener('click', function() {
      document.getElementById('credits').style.display = 'none';
  });
});
