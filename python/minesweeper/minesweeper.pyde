
w = 20
rows = 10
cols = 20
grid = []

class Cell:
    def __init__(self,i,j):
        self.i = i
        self.j = j
        self.x = width/2 - cols*w/2 + self.j*w
        self.y = height/2 - rows*w/2 + self.i*w
    
    def show(self):
        fill(255)
        print(self.x)
        rect(self.x,self.y,w,w)
        

def setup():
    size(800,500)
    for i in range(rows):
        grid.append([])
        for j in range(cols):
            grid[i].append(Cell(i,j))
            grid[i][j].show()
    
def draw():
    background(100)
    for i in range(rows):
        for j in range(cols):
            grid[i][j].show()
    
    
    
