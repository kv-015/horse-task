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
    var n = board.length;
    var way = new Array(n);

    for (var i = n; i--;) {
        way[i] = new Array(n);
    }
    
    way[0][0] = [0,0];
    var coord = [];

    var x;
    var y;
    var stepX;
    var stepY;
    var stepXY = [[-1, -2], [1, -2], [2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1]];
    var stLen = stepXY.length;

    var queue = [];
    queue.push([0, 0]);

    for (; queue.length !== 0;) {

        x = queue[0][0];
        y = queue[0][1];

        for (i = stLen; i--;) {
            stepX = x + stepXY[i][0];
            stepY = y + stepXY[i][1];

            if (stepX < n && stepX >= 0 && stepY < n && stepY >= 0) {
                switch (board[stepX][stepY]) {
                    case 0:
                        board[stepX][stepY] = 1;
                        queue.push([stepX, stepY]);
                        way[stepX][stepY] = [x, y];
                        break;
                    case 'f':
                        way[stepX][stepY] = [x, y];
                        wayCord(stepX, stepY);
                        queue = [];
                        break;
                }
            }
        }
        queue.shift();
    }
    return coord;

    function wayCord(x,y) {
        var elem;
        do {
            coord.push([x,y]);
            elem = way[x][y];
            x = elem[0];
            y = elem[1];
        } while ( x != 0 || y != 0);
        coord.push([x,y]);
        coord.reverse();
        return coord;
    }
};

solutions.olhaRomankiv = function (board) {
    // YOUR SOLUTION GOES HERE
};

solutions.ostapKhomitskyi = function (board) {
    // YOUR SOLUTION GOES HERE
};

solutions.volodymyrPantasenko = function (board) {
    // YOUR SOLUTION GOES HERE
};

solutions.yaroslavSamoilenko = function (board) {
    // YOUR SOLUTION GOES HERE
};

module.exports = solutions;
