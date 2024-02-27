// Espera a que el DOM se cargue completamente antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function () {
    // Obtiene la referencia al contenedor del rompecabezas por su ID
    const puzzleContainer = document.getElementById('puzzle-container');

    // Agrega un event listener para el evento 'mousedown' en el contenedor del rompecabezas
    puzzleContainer.addEventListener('mousedown', handleMouseDown);

    // Función para manejar el evento 'mousedown'
    function handleMouseDown(event) {
        // Encuentra el elemento más cercano con la clase 'puzzle-piece' a donde se hizo clic
        const piece = event.target.closest('.puzzle-piece');

        // Si no se hizo clic en una pieza, no hace nada y sale de la función
        if (!piece) return;

        // Establece el índice z para que la pieza esté por encima de otras piezas mientras se arrastra
        piece.style.zIndex = 1;

        // Calcula la posición del ratón relativa al borde izquierdo y superior de la pieza
        const offsetX = event.clientX - piece.getBoundingClientRect().left;
        const offsetY = event.clientY - piece.getBoundingClientRect().top;

        // Función para manejar el movimiento del ratón mientras se arrastra la pieza
        function handleMouseMove(event) {
            // Calcula la nueva posición de la pieza en función de la posición del ratón
            const x = event.clientX - offsetX;
            const y = event.clientY - offsetY;

            // Actualiza las propiedades 'left' y 'top' de la pieza para moverla
            piece.style.left = x + 'px';
            piece.style.top = y + 'px';
        }

        // Función para manejar el evento 'mouseup' cuando se suelta el botón del ratón
        function handleMouseUp() {
            // Restablece el índice z de la pieza a 0 para que esté en el mismo nivel que otras piezas
            piece.style.zIndex = 0;

            // Obtiene el rectángulo del contenedor del rompecabezas
            const puzzleRect = puzzleContainer.getBoundingClientRect();

            // Verifica si todas las piezas están en el lugar correcto dentro del contenedor del rompecabezas
            const allPiecesInPlace = Array.from(puzzleContainer.children).every(piece => {
                const rect = piece.getBoundingClientRect();
                return (
                    rect.left >= puzzleRect.left &&
                    rect.top >= puzzleRect.top &&
                    rect.right <= puzzleRect.right &&
                    rect.bottom <= puzzleRect.bottom
                );
            });

            // Si todas las piezas están en su lugar, muestra la felicitación y redirige a 'fin.html'
            if (allPiecesInPlace) {
                showCongratulations();
                window.location.href = 'fin.html';
            }

            // Elimina los event listeners para 'mousemove' y 'mouseup' después de soltar la pieza
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }

        // Agrega event listeners para 'mousemove' y 'mouseup' al documento
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }

    // Función para mostrar un mensaje de felicitación (en este caso, un cuadro de alerta)
    function showCongratulations() {
        alert('¡Felicidades! Has completado el rompecabezas.');
    }
});
