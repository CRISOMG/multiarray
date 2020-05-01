const $matriz = document.getElementById('matriz');

const array = [
  [1, 0, 1],
  [0, 1, 0],
  [1, 0, 1],
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

let squareId = 1;

function drawMatriz(array) {
  for (let index = 0; index < array.length; index++) {
    const row = array[index];

    const $rowElement = createRow();

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
  console.log(array);
}

drawMatriz(array);
