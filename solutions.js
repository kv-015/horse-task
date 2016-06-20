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
	      
		console.log(road);

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
        var coord= [];
    
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
    }
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
            // sorted clockwise
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
    var q = [];
    q[0] = [0,0];
    var path = [];
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
                    q_x+_x[j] < board.length && q_y+_y[j] < board.length) {
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
            if(point_coordinates[0]+_x[k] < board.length && point_coordinates[1]+_y[k] < board.length &&
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

    return path;
};

module.exports = solutions;
