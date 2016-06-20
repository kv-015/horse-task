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
