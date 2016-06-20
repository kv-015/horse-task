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
};

solutions.yaroslavSamoilenko = function (board) {
    // YOUR SOLUTION GOES HERE
    var q = [];
    q[0] = [0,0];
    var path = [];
    var l = board.length;
    var current_step = 0;
    var added = 1;
    var t = 0;
    var found = false;
    var _x = [-2,-2,-1,-1,1,1,2,2];
    var _y = [-1,1,-2,2,-2,2,-1,1];
    var point_coordinates = [];
    while(q.length != 0) {
        current_step++;
        for (var i = 0; i < added; i++) {
            var q_x = q[0][0];
            var q_y = q[0][1];
            for(var j = 0; j < _x.length; j++) {
                if(q_x+_x[j] >= 0 && q_y+_y[j] >= 0 &&
                    q_x+_x[j] < l && q_y+_y[j] < l) {
                    if (board[q_x + _x[j]][q_y + _y[j]] == 'f') {
                        found = true;
                        point_coordinates = [q_x+_x[j], q_y+_y[j]];
                        break;
                    }
                    if ((board[q_x + _x[j]][q_y + _y[j]] == 0)) {
                        board[q_x + _x[j]][q_y + _y[j]] = current_step;
                        q.push([q_x + _x[j], q_y + _y[j]]);
                        t++;
                    }


                }
            }

            q.shift();

        }
        added = t;
        t = 0;
        if(found == true)
            break;
    }
    path.push([point_coordinates[0], point_coordinates[1]]);
    while(board[point_coordinates[0]][point_coordinates[1]] != 's') {
        for(var k = 0; k < _x.length; k++) {
            if(point_coordinates[0]+_x[k] < l && point_coordinates[1]+_y[k] < l &&
                point_coordinates[0]+_x[k] >= 0 && point_coordinates[1]+_y[k] >= 0) {
                if(board[point_coordinates[0]+_x[k]][point_coordinates[1]+_y[k]] == 's') {
                    path.push([point_coordinates[0] + _x[k], point_coordinates[1] + _y[k]]);
                    point_coordinates[0] = point_coordinates[0] + _x[k];
                    point_coordinates[1] = point_coordinates[1] + _y[k];
                    break;
                }
                if (board[point_coordinates[0] + _x[k]][point_coordinates[1] + _y[k]] == current_step - 1) {
                    path.push([point_coordinates[0] + _x[k], point_coordinates[1] + _y[k]]);
                    current_step--;
                    point_coordinates[0] = point_coordinates[0] + _x[k];
                    point_coordinates[1] = point_coordinates[1] + _y[k];
                }

            }

        }
    }
    path.reverse();
    document.getElementById('path').innerHTML += path.length;

    return path;
};

module.exports = solutions;