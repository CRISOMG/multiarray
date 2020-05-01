const $matriz = document.getElementById('matriz');

const matriz = [
  [1, 0, 1, 0],
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [1, 0, 1, 0],
];

function createSquare(color, id) {
  const $square = document.createElement('div');
  $square.setAttribute('class', `square ${color}`);
  $square.setAttribute('id', `square-${id}`);
  return $square;
}

function createRow() {
  const $row = document.createElement('div');
  $row.setAttribute('class', 'row');
  return $row;
}

//se recorre la matriz de forma 'vertical y horizontal','longitudinal y en profundidad'...
function drawMatriz(matriz) {
  let squareId = 1;
//se recorre la 'longitud de la matriz' o la 'cantidad de filas de la matriz'
  for (let index = 0; index < matriz.length; index++) {
    const row = matriz[index];
    const $rowElement = createRow();

// se recorre la profundidad del 'indice actual del array' o 'fila de la matriz'
    row.forEach((square) => {
      if (square === 1) {
        $rowElement.append(createSquare('red', squareId));
        squareId++;
      } else if (square === 0) {
        $rowElement.append(createSquare('white', squareId));
        squareId++;
      }
    });

    $matriz.append($rowElement);
  }
  console.log(matriz);
}

drawMatriz(matriz);
