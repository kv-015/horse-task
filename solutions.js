var solutions = {};

solutions.andreiZubrytskyi = function (board) {
    // YOUR SOLUTION GOES HERE
    // board: 2-d array, where
    // -1  - wall
    //  0  - emptry cell
    // 's' - start
    // 'f' - finish

    // var board = [
    //     ['s', -1,  -1,   0,  0  ],
    //     [0,    0,  -1,  -1,  0  ],
    //     [0,    0,  -1,  -1,  0  ],
    //     [0,    0,   0,  -1,  0  ],
    //     [0,    0,   0,   0, 'f' ]
    // ]

    // expected: path array
    // return [ [0,0], [1,2], [0,4], [2, 3], [4,4] ]
    // if s в точке (0,0), f в точке (2,4)
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

solutions.olgaRomankiv = function (board) {
    var size = board.length;
    function position(parent, nodeC) {
        var parentNode = parent;
        var nodeContent = nodeC;
        this.getPrev = function () {
            return parentNode;
        }
        this.getCoord = function () {
            return nodeContent;
        }
        this.clearParent = function () {
            parentNode = null;
        }
    }

    
    function getPossibleSteps(current, fieldA) {
        current = current.getCoord();
        var possibleSteps = [];
        var options = [];
        var x = current.x;
        var y = current.y;
        if (((x - 2) >= 0) && ((y + 1) < size)) options.push({x: x - 2, y: y + 1});
        if (((x - 1) >= 0) && ((y + 2) < size)) options.push({x: x - 1, y: y + 2});
        if (((x + 1) < size) && ((y + 2) < size)) options.push({x: x + 1, y: y + 2});
        if (((x + 2) < size) && ((y + 1) < size)) options.push({x: x + 2, y: y + 1});
        if (((x + 2) < size) && ((y - 1) >= 0)) options.push({x: x + 2, y: y - 1});
        if (((x + 1) < size) && ((y - 2) >= 0)) options.push({x: x + 1, y: y - 2});
        if (((x - 1) > 0) && ((y - 2) > 0)) options.push({x: x - 1, y: y - 2});
        if (((x - 2) > 0) && ((y - 1) > 0)) options.push({x: x - 2, y: y - 1});
        for (ii = 0; ii < options.length; ii++) {

            if ((fieldA[(options[ii].x)][(options[ii].y)] == 0)||((fieldA[(options[ii].x)][(options[ii].y)] == 'f')))
                possibleSteps.push(options[ii]);
        }
        return possibleSteps;
    }

    function horseMove(start, finish, fieldB) {
        var queue = [];
        var currPos = new position(null, start);
        queue.push(currPos);
        fieldB[(start.x)][(start.y)] = 1;
        var result = 0;
        var resultPath = [];
        while (queue.length != 0) {
            var curr = queue.shift();
            if ((curr.getCoord().x == finish.x) && (curr.getCoord().y == finish.y)) {
                while (curr != null) {
                    result++;
                    var tinyArr=[curr.getCoord().x, curr.getCoord().y];
                    resultPath.unshift(tinyArr);
                    curr = curr.getPrev();
                }
                return resultPath;
            }
            var possSteps = getPossibleSteps(curr, fieldB);
            for (var item in possSteps) {
                currPos = new position(curr, possSteps[item]);
                queue.push(currPos);
                fieldB[(possSteps[item].x)][(possSteps[item].y)] = 1;
            }
        }
        return false;
    }

    var corner = [{x:0, y:0}, {x:board.length-1, y:0}, {x:0, y:board.length-1}, {x:board.length-1, y:board.length-1}];
    var start, finish;
	for (var e in corner){
        if (board[corner[e].x][corner[e].y] == 's') {
            start = corner[e];
        }
        if (board[corner[e].x][corner[e].y] == 'f') {
            finish = corner[e];
        }

    }
    return (horseMove(start, finish, board));
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
