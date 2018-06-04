
var cols = 10;
var rows = 20;
var w = 30;
var grid = [];
var bugs = 0.2;
var gameover = false;

function setup(){
    createCanvas(window.innerWidth,window.innerHeight);

    for(var i=0;i<rows;i++){
        grid[i] = [];        
        for(var j=0;j<cols;j++){
            grid[i][j] = new cell(i,j,w);
            if(random() < bugs ){
                grid[i][j].bug = true;
            }
        }
    }

    for(var i=0;i<rows;i++){
        for(var j=0;j<cols;j++){
            grid[i][j].calPadosi();
        }
    }

}


function draw(){

    background(100);
    
    fill(255);
    textSize(width/20);
    textAlign(CENTER);
    text("MineSweeper",width/2,60);

    for(var i=0;i<rows;i++){
        for(var j=0;j<cols;j++){
            grid[i][j].show();
        }
    }

	if(gameover){
        fill(255);
        textSize(width/20);
        textAlign(CENTER);
        text("Game Over!",width/2,height-60);	
	}
}

function mousePressed(){
    for(var i=0;i<rows;i++){
        for(var j=0;j<cols;j++){
            grid[i][j].clicked(mouseX,mouseY);
        }
    }
}
