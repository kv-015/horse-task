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
    // YOUR SOLUTION GOES HERE
};

solutions.volodymyrPantasenko = function (board) {
    // YOUR SOLUTION GOES HERE
    var dimensions = board.length;
    var startPoint, startPointY, startPointX;
    var finishPoint, finishPointY, finishPointX;

    // Search for start and finish points
    var i, j;
    i = j = dimensions;
    while (i--) {
        while (j--) {
            if (board[i][j] == 's') {
                startPointY = i;
                startPointX = j;
                startPoint = [startPointY, startPointX];
            } else if (board[i][j] == 'f') {
                finishPointY = i;
                finishPointX = j;
                finishPoint = [finishPointY, finishPointX];
            }
        }
        j = dimensions;
    }

    // Prepare an array for passed points
    var passedPoints = new Array(dimensions);
    for (i = 0; i < dimensions; i++) {
        passedPoints[i] = new Array(dimensions);
    }

    // Horse figure's possible moves ([y, x] coordinates)
    var possibleMoves = [[-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1]];

    // Search for possible moves on the chessboard
    var queue = [];
    var currentPoint = startPoint;
    queue.push(currentPoint);

    while (queue.length > 0) {
        currentPoint = queue.shift();

        var currentPointY = currentPoint[0];
        var currentPointX = currentPoint[1];

        if (board[currentPointY][currentPointX] != 's'
            && board[currentPointY][currentPointX] != 'f'
            && board[currentPointY][currentPointX] != 0) {
            continue;
        } else if (currentPointY == finishPointY && currentPointX == finishPointX) {
            break;
        }

        board[currentPointY][currentPointX] = (-1).toString();

        for (var move of possibleMoves) {
            var nextPointY = currentPointY + move[0];
            var nextPointX = currentPointX + move[1];
            var nextPoint = [nextPointY, nextPointX];
            if ((nextPointY >= 0 && nextPointY < dimensions) && (nextPointX >= 0 && nextPointX < dimensions)
                && (board[nextPointY][nextPointX] == 0 || board[nextPointY][nextPointX] == 'f')) {
                if (board[nextPointY][nextPointX] == 'f') {
                    queue.unshift(nextPoint);
                } else {
                    queue.push(nextPoint);
                }
                passedPoints[nextPointY][nextPointX] = currentPoint;
            }
        }
    }

    // Find the shortest path
    var path = [];

    var pointY = finishPointY;
    var pointX = finishPointX;

    while (pointY != startPointY && pointX != startPointX) {
        var point = [pointY, pointX];
        var prevPoint = passedPoints[pointY][pointX];

        if (prevPoint) {
            var prevPointY = prevPoint[0];
            var prevPointX = prevPoint[1];

            path.unshift(point);

            pointY = prevPointY;
            pointX = prevPointX;
        } else {
            return [];
        }
    }

    point = [pointY, pointX];
    path.unshift(point);

    return path;
};

solutions.yaroslavSamoilenko = function (board) {
    // YOUR SOLUTION GOES HERE
};

module.exports = solutions;
