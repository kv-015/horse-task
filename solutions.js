'use strict';

var solutions = {};

solutions.andreiZubrytskyi = function (board) {
    // YOUR SOLUTION GOES HERE
};

solutions.bohdanVolyk = function (board) {
    // YOUR SOLUTION GOES HERE
};

solutions.katerynaMazurkevych = function (board) {
    // YOUR SOLUTION GOES HERE
};

solutions.liudmylaPolianychko = function (board) {
    // YOUR SOLUTION GOES HERE
};

solutions.maksymYurchenko = function (board) {
    // YOUR SOLUTION GOES HERE
};

solutions.olhaRomankiv = function (board) {
    // YOUR SOLUTION GOES HERE
};

solutions.ostapKhomitskyi = function (board) {

    let start, finish;

    // find start and finish coordinates
    for (let i = 0; i < board.length; i++) {

        for (let j = 0; j < board[i].length; j++) {
            let currentCell = board[i][j];
            board[i][j] = {
                value: currentCell,
                coordinates: [i, j]
            };

            if (currentCell === 's') {
                start = board[i][j];
            }
            if (currentCell === 'f') {
                finish = board[i][j];
            }
        } // end inner for

    } // end outer for

    // creates a double wall around the board.
    function bound(board) {
        let l = board.length,
            arr = new Array(l),
            wallObj = {
                value: -1
            };

        for (let i = 0; i < arr.length; i++) {
            arr[i] = wallObj;
        }

        board[-1] = arr;
        board[-2] = arr;
        board.push(arr);
        board.push(arr);

        for (let i = 0; i < l + 2; i++) {
            board[i][-1] = wallObj;
            board[i][-2] = wallObj;
            board[i][l] = wallObj;
            board[i][l + 1] = wallObj;
        }

        return board;
    }

    // returns array of coordinates of elements of the next frontier
    function possibleMoves(x, y) {
        return [
            [x + 1, y - 2],
            [x + 2, y - 1],
            [x + 2, y + 1],
            [x + 1, y + 2],
            [x - 1, y + 2],
            [x - 2, y + 1],
            [x - 2, y - 1],
            [x - 1, y - 2]
        ];
    }

    // returns array of coordinates
    function createPath(val) {
        const path = [];
        while (val) {
            path.unshift(val.coordinates);
            val = val.parent;
        }

        return path;
    }

    bound(board);

    start.level = 0;
    start.parent = undefined;

    let iteration = 1,
        frontier = [start];

    while (frontier.length) {
        let nextFrontier = [];

        for (let i = 0; i < frontier.length; i++) {
            let x = frontier[i].coordinates[0],
                y = frontier[i].coordinates[1];

            for (let j = 0, cells = possibleMoves(x, y); j < cells.length; j++) {
                let cell = board[cells[j][0]][cells[j][1]];

                if (cell.value === -1) {
                    continue;
                }

                if (!cell.hasOwnProperty('level')) {
                    cell.level = iteration;
                    cell.parent = frontier[i];

                    if (cell.value === 'f') {

                        return createPath(cell);
                    }

                    nextFrontier.push(cell);
                } // end outer if

            } // end inner for

        } // end outer for

        frontier = nextFrontier;
        iteration++;
    } // end while
    
};

solutions.volodymyrPantasenko = function (board) {
    // YOUR SOLUTION GOES HERE
};

solutions.yaroslavSamoilenko = function (board) {
    // YOUR SOLUTION GOES HERE
};

module.exports = solutions;
