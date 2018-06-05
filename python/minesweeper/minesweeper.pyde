
w = 30
rows = 10
cols = 20
grid = []
bugs = 0.2

class Cell:
    def __init__(self,i,j):
        self.i = i
        self.j = j
        self.x = width/2 - cols*w/2 + self.j*w
        self.y = height/2 - rows*w/2 + self.i*w
        self.bug = False
        self.revealed = False
        self.neighbour = 0;
    
    def show(self):
        if(self.revealed):
            fill(200)
            rect(self.x,self.y,w,w)
            if(self.bug):
                fill(0)
                ellipse(self.x + w/2,self.y + w/2 , w/2 , w/2)
            elif not self.bug and self.neighbour:
                fill(0)
                textAlign(CENTER)
                text(self.neighbour,self.x + w/2,self.y+w/2)
        else:    
            fill(255)
            rect(self.x,self.y,w,w)
            
    def clicked(self,x,y):
        if(x > self.x and x < self.x + w and y > self.y and y < self.y + w and not self.revealed):
            self.revealed = True
            if not self.neighbour:
                for i in range(-1,2):
                    for j in range(-1,2):
                        if self.i + i > -1 and self.j + j > -1 and self.i + i < rows and self.j + j < cols and not grid[self.i+i][self.j+j].bug :
                            grid[self.i+i][self.j+j].clicked(grid[self.i+i][self.j+j].x+ w/2,grid[self.i+i][self.j+j].y+w/2)
                
            
    def calNeighbours(self):
        for i in range(-1,2):
            for j in range(-1,2):
                if self.i + i > -1 and self.j + j > -1 and self.i + i < rows and self.j + j < cols and grid[self.i+i][self.j+j].bug == True :
                    self.neighbour += 1







def setup():
    size(800,500)
    for i in range(rows):
        grid.append([])
        for j in range(cols):
            grid[i].append(Cell(i,j))
            grid[i][j].show()
            if random(1) < bugs:
                grid[i][j].bug = True
            
    for i in range(rows):
        for j in range(cols):
            grid[i][j].calNeighbours()

def draw():
    background(100)
    for i in range(rows):
        for j in range(cols):
            grid[i][j].show()
    
    
    
def mousePressed():
    for i in range(rows):
        for j in range(cols):
            grid[i][j].clicked(mouseX,mouseY)
