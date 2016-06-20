'use strict';

var solutions = {};

solutions.andreiZubrytskyi = function (board) {
    // YOUR SOLUTION GOES HERE
};

solutions.bohdanVolyk = function (board) {
    // YOUR SOLUTION GOES HERE
};

solutions.katerynaMazurkevych = function (walls) {
            var SIZE = walls.length;
          //debugger;
          var board =[];
          var open =[];
          var close=[];
          var father=[];
        
          var start, finish;
        
          function ev(s, f)
          {
          	return (Math.sqrt((s[0]-f[0])*(s[0]-f[0])+(s[1]-f[1])*(s[1]-f[1])));
          }
        
          function minn(arr)
          {
          	var min;
          	min=0;
          	for (var i=0; i<arr.length; i++)
          	{
               if ( arr[i].f<arr[min].f ) { min=i ;};
          	}
          	return min;
          }
        
          for (var i = 0; i < SIZE ; i++) {
          	board[i]=[];
          	close[i]=[];
          	father[i]=[];
            for (var j = 0; j < SIZE ; j++) {
        
            	if (walls[j][i]=='s') {start=[i,j];}
            	if (walls[j][i]=='f') {finish=[i,j];} 
            	if ( start&&finish ){ break; }	
            }
        
          };
          board[start[0]][start[1]]=0;
          start.g=0;
          start.h=ev(start, finish);
          start.f=start.g+start.h;
        
          open.push(start);
        
          while (open.length && !board[finish[0]][finish[1]]) {
            
            var c = minn(open);
            var curr=open[c];
        
            var i = curr[0];
            var j = curr[1];
            open.splice(c, 1);
        
            close[i][j]=1;
        
            var neighbors = [[i - 1, j - 2], [i - 2, j - 1], [i - 2, j + 1], [i - 1, j + 2], [i + 1, j + 2], [i + 2, j + 1], [i + 2, j - 1], [i + 1, j - 2]];
        
            for (var k = 0; k < neighbors.length; k++) {
            
              var iNr=neighbors[k][0];
              var jNr=neighbors[k][1];
              if (  iNr >= 0 && iNr<SIZE && jNr >= 0 && jNr<SIZE && close[iNr][jNr]!==1 &&  walls[jNr][iNr]!==-1 ) {
        
              	neighbors[k].g=curr.g+1;
              	neighbors[k].h=ev(neighbors[k], finish);
              	neighbors[k].f=neighbors[k].g+neighbors[k].h;
              	open.push(neighbors[k]);
              	close[iNr][jNr]=1;
                board[iNr][jNr] = board[i][j] + 1;
                father[iNr][jNr] = [i,j];
              };
            };
          };
         
          var road=[];
          function path(fPath)
        	{
        	    road.unshift(fPath);
        		if(fPath)
        		{   
        			return path(father[fPath[0]][fPath[1]])
        		};
        		return start;
        	}
        	  
        	  path([finish[0] , finish[1]]);
        	  road.shift();
           return (path);

};

solutions.liudmylaPolianychko = function (board) {
    // YOUR SOLUTION GOES HERE
};

solutions.maksymYurchenko = function (board) {
    // YOUR SOLUTION GOES HERE
};

solutions.olhaRomankiv = function (board) {
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
        for (var ii = 0; ii < options.length; ii++) {

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
