

function cell(i,j,w){
    this.i = i;
    this.j = j;
    this.x = width/2 - w*rows/2 + i*w;
    this.y = height/2 - w*cols/2 + j*w;
    this.w = w;

    this.bug;

    this.revealed = false;

    this.neighbours = 0;

    this.show = function(){
        if(this.revealed){
            fill(200);
            rect(this.x,this.y,this.w,this.w);            
            if(this.bug){
                this.neighbours = -1;
                fill(0);
                ellipse(this.x + this.w/2 , this.y + this.w/2,this.w/2,this.w/2);
            }else if(this.neighbours){
                fill(0);
                textSize(14);
                textAlign(CENTER);
                text(this.neighbours,this.x + this.w/2 , this.y + this.w/2);
            }
        }else{
            fill(255);
            rect(this.x,this.y,this.w,this.w);   
        }
    }

    this.clicked = function(x,y){
        if(x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w){
            this.revealed = true;

            if(this.bug){
                for(var i=0;i<rows;i++){
                    for(var j=0;j<cols;j++){
                        grid[i][j].revealed = true;
                    }
                }
            }
            
            if(this.neighbours == 0){
                for(var i=-1;i<=1;i++){
                    for(var j=-1;j<=1;j++){
                        var ti = this.i + i;
                        var tj = this.j + j;
                        if(ti > -1 && ti < rows && tj > -1 && tj < cols && !grid[ti][tj].bug && !grid[ti][tj].revealed){
                            grid[ti][tj].clicked(
                                grid[ti][tj].x + this.w/2,
                                grid[ti][tj].y + this.w/2
                            );
                        }
                    }
                }
            }

        }

    }

    this.calPadosi = function(){
        for(var i=-1;i<=1;i++){
            for(var j=-1;j<=1;j++){
                if(this.i + i > -1 && this.i + i < rows && this.j + j > -1 && this.j + j < cols && grid[this.i + i][this.j+ j].bug){
                    this.neighbours++;
                }
            }
        }
    }
}