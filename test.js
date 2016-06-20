'use strict';

var assert = require('assert');

var solutions = require('./solutions.js');

var Nsmall = 50;
var Nbig = 1000;

var po = function (x, y) {
    var obj = {};
    obj.x = x;
    obj.y = y;
    return obj;
};

var boardFacrory = function (N, start, finish) {
    var board = new Array(N);
    for (var i = 0; i < N; i++) {
        board[i] = new Array(N);
        for (var j = 0; j < N; j++) {
            board[i][j] = 0;
        }
    }
    board[start.x][start.y] = 's';
    board[finish.x][finish.y] = 'f';
    return board;
};

var addRectToBoard = function (board, start, finish) {
    for (var i = start.x; i <= finish.x; i++) {
        for (var j = start.y; j <= finish.y; j++) {
            board[i][j] = -1;
        }
    }
};


var board0 = boardFacrory(Nsmall, po(4, 8), po(0, 0));

var board1 = boardFacrory(Nsmall, po(0, 0), po(49, 49));

var board2 = boardFacrory(Nsmall, po(49, 49), po(0, 0));

var board3 = boardFacrory(Nsmall, po(22, 22), po(23, 23));

var board4 = boardFacrory(Nbig, po(0, 0), po(999, 999));

var board5 = boardFacrory(Nbig, po(0, 0), po(999, 998));

var board6 = boardFacrory(Nbig, po(999, 0), po(0, 999));

var board7 = boardFacrory(Nbig, po(0, 0), po(999, 999));
addRectToBoard(board7, po(2, 0), po(3, 997));
addRectToBoard(board7, po(8, 2), po(10, 999));

var board8 = boardFacrory(Nbig, po(0, 0), po(999, 999));
addRectToBoard(board8, po(2, 2), po(997, 997));

for (var solutionFuncName in solutions) {

    (function (solution) {

        describe(solutionFuncName, function () {
            this.timeout(10000);

            var timer;
            var localTimer;
            var skipped;

            before(function () {
                timer = Date.now();
                skipped = false
            });

            after(function () {
                console.log("\n it takes: " + ( Date.now() - timer) + "ms \n");
            });

            beforeEach(function () {
                localTimer = Date.now();
            });

            afterEach(function () {
                if ((Date.now() - localTimer) > 10000) {
                    this.skip()
                }
                if (skipped) {
                    this.skip();
                }
            });

            var tests = [
                {args: board0, expected: 5},
                {args: board1, expected: 35},
                {args: board2, expected: 35},
                {args: board3, expected: 3},
                {args: board4, expected: 667},
                {args: board5, expected: 668},
                {args: board6, expected: 667},
                {args: board7, expected: 1665},
                {args: board8, expected: 999}
            ];

            function arrayClone(arr) {

                var i, copy;

                if (Array.isArray(arr)) {
                    copy = arr.slice(0);
                    for (i = 0; i < copy.length; i++) {
                        copy[i] = arrayClone(copy[i]);
                    }
                    return copy;
                } else if (typeof arr === 'object') {
                    throw 'Cannot clone array containing an object!';
                } else {
                    return arr;
                }

            }

            tests.forEach(function (test, index) {
                it('can find path on #' + index + ' board', function () {
                    var result = solution(arrayClone(test.args));
                    result = (typeof(result) == "undefined") ? undefined : result.length;
                    //if (result !== test.expected) {
                    //    skipped = true;
                    //}
                    assert.equal(result, test.expected);

                });
            });
        });
    })(solutions[solutionFuncName]);
}
