// Espera a que el DOM se cargue completamente antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function() {
    
  // Agrega un event listener al botón de inicio para redirigir a 'game.html' al hacer clic
  document.getElementById('startBtn').addEventListener('click', function() {
      window.location.href = 'game.html';
  });

  // Agrega un event listener al botón de créditos para mostrar el elemento con ID 'credits' al hacer clic
  document.getElementById('creditsBtn').addEventListener('click', function() {
      document.getElementById('credits').style.display = 'block';
  });

  // Agrega un event listener al botón de salir para mostrar un confirmar y redirigir a 'about:blank' si se confirma
  document.getElementById('exitBtn').addEventListener('click', function() {
      if (confirm('¿Estás seguro de que quieres salir?')) {
          window.location.href = 'about:blank';
      }
  });

  // Agrega un event listener al elemento con ID 'credits' para ocultarlo al hacer clic
  document.getElementById('credits').addEventListener('click', function() {
      document.getElementById('credits').style.display = 'none';
  });

  // Agrega un event listener al elemento con ID 'form' para redirigir a 'form.html' al hacer clic
  document.getElementById('form').addEventListener('click', function() {
      window.location.href = 'form.html';
  });
});
