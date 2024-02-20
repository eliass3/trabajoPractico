document.addEventListener('DOMContentLoaded', function () {
    const puzzleContainer = document.getElementById('puzzle-container');
    let moves = 0;

    puzzleContainer.addEventListener('mousedown', handleMouseDown);

    function handleMouseDown(event) {
        const piece = event.target.closest('.puzzle-piece');

        if (!piece) return;

        piece.style.zIndex = 1;

        const offsetX = event.clientX - piece.getBoundingClientRect().left;
        const offsetY = event.clientY - piece.getBoundingClientRect().top;

        function handleMouseMove(event) {
            const x = event.clientX - offsetX;
            const y = event.clientY - offsetY;

            piece.style.left = x + 'px';
            piece.style.top = y + 'px';
        }

        function handleMouseUp() {
            piece.style.zIndex = 0;

            const puzzleRect = puzzleContainer.getBoundingClientRect();

            // Verifica si todas las piezas están en el lugar correcto
            const allPiecesInPlace = Array.from(puzzleContainer.children).every(piece => {
                const rect = piece.getBoundingClientRect();
                return (
                    rect.left >= puzzleRect.left &&
                    rect.top >= puzzleRect.top &&
                    rect.right <= puzzleRect.right &&
                    rect.bottom <= puzzleRect.bottom
                );
            });

            if (allPiecesInPlace) {
                showCongratulations();
                 window.location.href = 'fin.html';
            }

            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }

    function showCongratulations() {
        alert('¡Felicidades! Has completado el rompecabezas.');
    }
});
