document.addEventListener('DOMContentLoaded', () => {
    const imageSrc = 'https://wallpapers.com/images/hd/artist-in-action-4k-painting-ithpkp4exl3ypj55.jpg';
    const puzzle = document.getElementById('puzzle');
    const size = 4; // 4x4 grid
    const pieceSize = 150; // Each piece is 150x150 pixels

    let pieces = [];
    
    function createPuzzle() {
        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                const piece = document.createElement('div');
                piece.classList.add('piece');
                piece.style.width = `${pieceSize}px`;
                piece.style.height = `${pieceSize}px`;
                piece.style.backgroundImage = `url(${imageSrc})`;
                piece.style.backgroundPosition = `${-col * pieceSize}px ${-row * pieceSize}px`;
                piece.dataset.index = row * size + col;
                pieces.push(piece);
            }
        }
        pieces = shuffleArray(pieces);
        pieces.forEach(piece => puzzle.appendChild(piece));
        addEventListeners();
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function addEventListeners() {
        pieces.forEach(piece => piece.addEventListener('click', onPieceClick));
    }

    function onPieceClick(e) {
        const index = e.target.dataset.index;
        const emptyPiece = document.querySelector('.empty');
        if (emptyPiece) {
            const emptyIndex = emptyPiece.dataset.index;
            emptyPiece.dataset.index = index;
            e.target.dataset.index = emptyIndex;

            swapPieces(e.target, emptyPiece);
        } else {
            e.target.classList.add('empty');
        }
    }

    function swapPieces(piece1, piece2) {
        const tempBg = piece1.style.backgroundPosition;
        piece1.style.backgroundPosition = piece2.style.backgroundPosition;
        piece2.style.backgroundPosition = tempBg;
        piece1.classList.remove('empty');
    }

    createPuzzle();
});