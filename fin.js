document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('volverBtn').addEventListener('click', function() {
      alert('¡Pantalla de inicio del juego!');
    });
  
    document.getElementById('creditsBtn').addEventListener('click', function() {
      document.getElementById('credits').style.display = 'block';
    });
  
    document.getElementById('exitBtn').addEventListener('click', function() {
      if (confirm('¿Estás seguro de que quieres salir?')) {
        window.close();
      }
    });
  
    document.getElementById('credits').addEventListener('click', function() {
      document.getElementById('credits').style.display = 'none';
    });
  });
  