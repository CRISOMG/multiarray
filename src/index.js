const app = document.getElementById('app')

const array = [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
]


function createSquare() {

    const square = document.createElement('div')
    square.setAttribute('class', 'square')
    square.setAttribute('id', 'square')

    return square

}

function buildArrayColor(arrayColor) {

    const row = document.createElement('div')
    row.setAttribute('class', 'row')

    arrayColor.forEach(color => {

        const s = createSquare()

        if (color === 'red') {
            s.classList.add('red')
        } else if (color === 'white') {
            s.classList.add('white')
        }


        row.append(s)
    })

    app.append(row)

}

function analitycArray(array) {
    let length = null;
    let deep = null;
    // array.forEach(square => {
    //     console.log(square)
    //     square.forEach(item => console.count(item))
    // });
    for (let index = 0; index < array.length; index++) {
        const row = array[index];


        const arrayColor = []

        row.forEach(square => {

            if (square === 0) {
                arrayColor.push('white')
            } else if (square === 1) {
                arrayColor.push('red')
            }

        });

        console.log(arrayColor);
        buildArrayColor(arrayColor)
    }
}


analitycArray(array)

