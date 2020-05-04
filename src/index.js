function generateRandomHexCode() {
  let hexCode = '#';

  while (hexCode.length < 7) {
    hexCode += Math.ceil(Math.random() * 12).toString(16);
  }

  return hexCode;
}

// const generateMatrix = (size) =>
//   Array.from({ length: size }, () => new Array(size).fill(0));

// const matriz = generateMatrix(30);

const matriz = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
function createMatriz() {
  const $matriz = document.createElement('section');
  $matriz.setAttribute('class', 'matriz');
  $matriz.setAttribute('id', 'matriz');
  return $matriz;
}

function createRow() {
  const $row = document.createElement('div');
  $row.setAttribute('class', 'row');
  return $row;
}

function createSquare(squareId, rowId, color = 'white') {
  const $square = document.createElement('div');
  $square.setAttribute('class', `square`);
  $square.style.backgroundColor = color;

  $square.onclick = (event) => {
    console.log(rowId, squareId);

    matriz[rowId][squareId]
      ? (matriz[rowId][squareId] = 0)
      : (matriz[rowId][squareId] = 1);

    drawMatriz(matriz);
  };

  return $square;
}

function analyser(
  currentElementMatriz,
  currentElementRow,
  indexRow,
  indexSquare
) {
  const aboveSquare =
    !!matriz[indexRow - 1] && matriz[indexRow - 1][indexSquare];
  const previousSquare = !!matriz[indexRow][indexSquare - 1];

  if (aboveSquare) {
    const color =
      currentElementMatriz.children[indexRow - 1].children[indexSquare].style
        .backgroundColor;
    const squareElement = createSquare(indexSquare, indexRow, color);
    return squareElement;
  }
  if (previousSquare) {
    const color =
      currentElementRow.children[indexSquare - 1].style.backgroundColor;
    const squareElement = createSquare(indexSquare, indexRow, color);
    return squareElement;
  }

  const squareElement = createSquare(indexSquare, indexRow);
  squareElement.style.backgroundColor = generateRandomHexCode();

  return squareElement;
}

function drawMatriz(matriz) {
  document.body.innerHTML = '';
  const currentElementMatriz = createMatriz();

  matriz.forEach((row, indexRow, matriz) => {
    const currentElementRow = createRow();

    row.forEach((square, indexSquare, currentRow) => {
      if (!square) {
        currentElementRow.append(createSquare(indexSquare, indexRow));
      }
      if (square) {
        const $square = analyser(
          currentElementMatriz,
          currentElementRow,
          indexRow,
          indexSquare
        );
        currentElementRow.append($square);
      }
    });

    currentElementMatriz.append(currentElementRow);
  });
  document.body.appendChild(currentElementMatriz);
}

drawMatriz(matriz);

document.addEventListener('keydown', (ev) => {
  drawMatriz(matriz);
});
document.addEventListener('click', (ev) => {
  drawMatriz(matriz);
});
