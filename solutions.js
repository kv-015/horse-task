var solutions = {};

solutions.andreiZubrytskyi = function (board) {
    let first_x, first_y, last_x, last_y;

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 's') {
                first_x = j;
                first_y = i;
            }
            else if (board[i][j] === 'f') {
                last_x = i;
                last_y = j;
            }
        }
    }
    // possible steps
    let x = [1, 1, -1, -1, 2, 2, -2, -2];
    let y = [2, -2, 2, -2, 1, -1, 1, -1];

    let queue = [];

    queue.push([first_x, first_y]);

    let used = [];
    for (let i = 0; i < board.length; i++) {
        used[i] = [];
    }
    used[first_x][first_y] = true;

    let parent = [];
    for (let i = 0; i < board.length; i++) {
        parent[i] = [];
    }

    // breadth-first search
    while (queue.length > 0) {
        let vertex = queue.shift();
        for (let i = 0; i < 8; i++) {
            let vx = vertex[0] + x[i];
            let vy = vertex[1] + y[i];

            if (vx >= 0 && vy >= 0 && vx < board.length && vy < board[0].length && board[vx][vy] !== -1) {
                if (!used[vx][vy]) {
                    used[vx][vy] = true;
                    queue.push([vx, vy]);
                    parent[vx][vy] = vertex;
                }
            }
        }
    }

    // the shortest path
    let path = [];

    let i = last_x, j = last_y;
    path.push([last_x, last_y]);

    while (i != first_x && j != first_y) {

        if (typeof parent[i][j] != 'undefined') {
            let vx = parent[i][j][0];
            j = parent[i][j][1];
            i = vx;
            path.push([i, j]);
        }
        else {
            return [];
        }
    }
    path.reverse();

    return path;
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
};

module.exports = solutions;
