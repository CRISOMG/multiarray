function generateRandomHexCode() {
  let hexCode = '#';

  while (hexCode.length < 7) {
    hexCode += Math.round(Math.random() * 15).toString(16);
  }

  return hexCode;
}

const matriz = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
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
  $square.setAttribute('id', `square-${squareId}`);
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
  indexSquare,
  rowId,
  squareId
) {
  const aboveSquare =
    !!matriz[indexRow - 1] && matriz[indexRow - 1][indexSquare];
  const previousSquare = !!matriz[indexRow][indexSquare - 1];

  if (aboveSquare) {
    const color =
      currentElementMatriz.children[indexRow - 1].children[indexSquare].style
        .backgroundColor;
    const squareElement = createSquare(squareId, rowId, color);
    return squareElement;
  }
  if (previousSquare) {
    const color =
      currentElementRow.children[indexSquare - 1].style.backgroundColor;
    const squareElement = createSquare(squareId, rowId, color);
    return squareElement;
  }

  const squareElement = createSquare(squareId, rowId);
  squareElement.style.backgroundColor = generateRandomHexCode();

  return squareElement;
}

function drawMatriz(matriz) {
  document.body.innerHTML = '';
  const currentElementMatriz = createMatriz();

  let rowId = 0;
  matriz.forEach((row, indexRow, matriz) => {
    const currentElementRow = createRow();

    let squareId = 0;
    row.forEach((square, indexSquare, currentRow) => {
      if (!square) {
        currentElementRow.append(createSquare(squareId, rowId));
        squareId++;
      }
      if (square) {
        const $square = analyser(
          currentElementMatriz,
          currentElementRow,
          indexRow,
          indexSquare,
          rowId,
          squareId
        );
        currentElementRow.append($square);
        squareId++;
      }
    });

    currentElementMatriz.append(currentElementRow);
    rowId++;
  });
  document.body.appendChild(currentElementMatriz);
}

drawMatriz(matriz);

document.addEventListener('keydown', (ev) => {
  if (ev.keyCode == 13) {
    drawMatriz(matriz);
  }
});
