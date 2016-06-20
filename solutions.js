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

solutions.lucy = function (board) {


    function Matrix(size, value) {
        var arr = new Array(size);
        for (var i = 0; i < size; i++) {
            arr[i] = new Array(size);
            for (var j = 0; j < size; j++) {
                arr[i][j] = value;
            }
        }
        return arr;
    }
    var n = board.length;


    function index(inputArray, searchValue) {
        for (var i = 0, L = inputArray.length; i < L; i++) {
            var j = inputArray[i].indexOf(searchValue);

            if (j >= 0) {
                return [i, j];
            }
        }
        return null;
    }

    function notVisited(x, y) {
        if ((x >= 0) && (x < n) && (y >= 0) && (y < n)) {
            if (!used[x][y]) {
                /*if (board[x][y]!=-1 ){*/
                return true;
            }
        }
        return false;
        /*}return false;*/
    }

    var start = index(board, 's');
    var finish = index(board, 'f');
    var s1 = start[0];
    var s2 = start[1];
    var f1 = finish[0];
    var f2 = finish[1];
    var dst = Matrix(n, -1);
    var used = Matrix(n, false);
    var parent = Matrix(n, 0);
    var queue = [];
    var way = [];

    used[s1][s2] = true;
    dst[s1][s2] = 0;
    parent[s1][s2] = -1;


    queue.push([s1, s2]);

    while (queue.length != 0) {
        var current = queue.shift();
        var cx = current[0];
        var cy = current[1];

        if (notVisited(cx + 1, cy + 2)) {
            queue.push([cx + 1, cy + 2]);
            used[cx + 1][cy + 2] = true;
            dst[cx + 1][cy + 2] = dst[cx][cy] + 1;
            parent[cx + 1][cy + 2] = [cx, cy];

        }

        if (notVisited(cx + 1, cy - 2)) {
            queue.push([cx + 1, cy - 2]);
            used[cx + 1][cy - 2] = true;
            dst[cx + 1][cy - 2] = dst[cx][cy] + 1;
            parent[cx + 1][cy - 2] = [cx, cy];
        }

        if (notVisited(cx - 1, cy + 2)) {
            queue.push([cx - 1, cy + 2]);
            used[cx - 1][cy + 2] = true;
            dst[cx - 1][cy + 2] = dst[cx][cy] + 1;
            parent[cx - 1][cy + 2] = [cx, cy];
        }

        if (notVisited(cx - 1, cy - 2)) {
            queue.push([cx - 1, cy - 2]);
            used[cx - 1][cy - 2] = true;
            dst[cx - 1][cy - 2] = dst[cx][cy] + 1;
            parent[cx - 1][cy - 2] = [cx, cy];
        }

        if (notVisited(cx + 2, cy + 1)) {
            queue.push([cx + 2, cy + 1]);
            used[cx + 2][cy + 1] = true;
            dst[cx + 2][cy + 1] = dst[cx][cy] + 1;
            parent[cx + 2][cy + 1] = [cx, cy];
        }

        if (notVisited(cx + 2, cy - 1)) {
            queue.push([cx + 2, cy - 1]);
            used[cx + 2][cy - 1] = true;
            dst[cx + 2][cy - 1] = dst[cx][cy] + 1;
            parent[cx + 2][cy - 1] = [cx, cy];
        }

        if (notVisited(cx - 2, cy + 1)) {
            queue.push([cx - 2, cy + 1]);
            used[cx - 2][cy + 1] = true;
            dst[cx - 2][cy + 1] = dst[cx][cy] + 1;
            parent[cx - 2][cy + 1] = [cx, cy];
        }

        if (notVisited(cx - 2, cy - 1)) {
            queue.push([cx - 2, cy - 1]);
            used[cx - 2][cy - 1] = true;
            dst[cx - 2][cy - 1] = dst[cx][cy] + 1;
            parent[cx - 2][cy - 1] = [cx, cy];
        }
    }

    if (dst[f1][f2] != -1) {
        return true;
    } else {
        return false;
    }

    way.unshift([f1, f2]);
    var i = parent[f1][f2][0];
    var j = parent[f1][f2][1];
    while ((i !== s1) && (j !== s2)) {
        way.unshift([i, j]);
        var i2 = i;
        i = parent[i][j][0];
        j = parent[i2][j][1];
    }
    way.unshift([s1, s2]);

    return way;
};

solutions.yaroslavSamoilenko = function (board) {
    // YOUR SOLUTION GOES HERE
};

module.exports = solutions;
